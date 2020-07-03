import React, { useState, useEffect, useRef } from 'react';
import * as go from 'gojs';

const createDiagram = (dom, data) => {
    const $ = go.GraphObject.make;  // for conciseness in defining templates
    const myDiagram = $(
        go.Diagram,
        dom,  // must name or refer to the DIV HTML element
        {
            allowDelete: false,
            allowCopy: false,
            layout: $(go.ForceDirectedLayout),
            "undoManager.isEnabled": true
        }
    );
    const colorMap = {
      'int': '#be4b15',
      'text': '#52ce60',
      'longtext': '#6ea5f8',
      'varchar': '#fd8852',
      'timestamp': '#afd4fe',
      'lightgreen': '#b9e986',
      'pink': '#faadc1',
      'purple': '#d689ff',
      'orange': '#fdb400',
    };
    const figureMap = {
        'varchar': 'Decision',
        'int': 'Circle',
        'text': 'Hexagon',
        'longtext': 'Hexagon',
        'timestamp': 'TriangleUp'
    };

    // the template for each attribute in a node's array of item data
    const itemTempl = $(
        go.Panel,
        "Horizontal",
        $(
            go.Shape,
            {
                desiredSize: new go.Size(10, 10),
                strokeJoin: "round",
                strokeWidth: 3,
                stroke: null,
                margin: 2
            },
            new go.Binding("figure", "type", type => figureMap[type]),
            new go.Binding("fill", "type", type => colorMap[type]),
            new go.Binding("stroke", "type", type => colorMap[type])
        ),
        $(
            go.TextBlock,
            {
                stroke: "#333333",
                font: "bold 14px sans-serif"
            },
            new go.Binding("text", "field")
        ),
        $(
            go.TextBlock,
            {
                stroke: "#999",
                font: "bold 14px sans-serif"
            },
            new go.Binding("text", "type", type => `: ${type}`)
        ),
        $(
            go.TextBlock,
            {
                stroke: "#999",
                font: "bold 14px sans-serif"
            },
            new go.Binding("text", "maxlength", maxlength => `(${maxlength})`)
        )
    );

    // define the Node template, representing an entity
    myDiagram.nodeTemplate = $(
        go.Node,
        "Auto",  // the whole node panel
        {
            selectionAdorned: true,
            resizable: true,
            layoutConditions: go.Part.LayoutStandard & ~go.Part.LayoutNodeSized,
            fromSpot: go.Spot.AllSides,
            toSpot: go.Spot.AllSides,
            isShadowed: true,
            shadowOffset: new go.Point(3, 3),
            shadowColor: "#C5C1AA"
        },
        new go.Binding("location", "location").makeTwoWay(),
        // whenever the PanelExpanderButton changes the visible property of the "LIST" panel,
        // clear out any desiredSize set by the ResizingTool.
        new go.Binding("desiredSize", "visible", function(v) { return new go.Size(NaN, NaN); }).ofObject("LIST"),
        // define the node's outer shape, which will surround the Table
        $(
            go.Shape,
            "RoundedRectangle",
            {
                fill: 'white',
                stroke: "#eeeeee",
                strokeWidth: 3
            }
        ),
        $(
            go.Panel,
            "Table",
            { margin: 8, stretch: go.GraphObject.Fill },
            $(
                go.RowColumnDefinition,
                { row: 0, sizing: go.RowColumnDefinition.None }
            ),
            // the table header
            $(
                go.TextBlock,
                {
                row: 0, alignment: go.Spot.Center,
                margin: new go.Margin(0, 24, 0, 2),  // leave room for Button
                font: "bold 16px sans-serif"
                },
                new go.Binding("text", "key")
            ),
            // the collapse/expand button
            $(
                "PanelExpanderButton",
                "LIST",  // the name of the element whose visibility this button toggles
                { row: 0, alignment: go.Spot.TopRight }
            ),
            // the list of Panels, each showing an attribute
            $(
                go.Panel,
                "Vertical",
                {
                    name: "LIST",
                    row: 1,
                    padding: 3,
                    alignment: go.Spot.TopLeft,
                    defaultAlignment: go.Spot.Left,
                    stretch: go.GraphObject.Horizontal,
                    itemTemplate: itemTempl
                },
                new go.Binding("itemArray", "items")
            )
        )
    );

    // define the Link template, representing a relationship
    myDiagram.linkTemplate = $(
        go.Link,  // the whole link panel
        {
            selectionAdorned: true,
            layerName: "Foreground",
            reshapable: true,
            routing: go.Link.AvoidsNodes,
            corner: 5,
            curve: go.Link.JumpOver
        },
        $(
            go.Shape,  // the link shape
            {
                stroke: "#303B45",
                strokeWidth: 2.5
            }
        ),
        $(
            go.TextBlock,  // the "from" label
            {
                textAlign: "center",
                font: "bold 14px sans-serif",
                stroke: "#1967B3",
                segmentIndex: 0,
                segmentOffset: new go.Point(NaN, NaN),
                segmentOrientation: go.Link.OrientUpright
            },
            new go.Binding("text", "text")
        ),
        $(
            go.TextBlock,  // the "to" label
            {
                textAlign: "center",
                font: "bold 14px sans-serif",
                stroke: "#1967B3",
                segmentIndex: -1,
                segmentOffset: new go.Point(NaN, NaN),
                segmentOrientation: go.Link.OrientUpright
            },
            new go.Binding("text", "toText")
        )
    );

    myDiagram.setData = ({ nodeDataArray = [], linkDataArray = [] } = {}) => {
        myDiagram.model = $(
            go.GraphLinksModel,
            {
                copiesArrays: true,
                copiesArrayObjects: true,
                nodeDataArray: nodeDataArray,
                linkDataArray: linkDataArray
            }
        );
    };

    myDiagram.setData(data);

    return myDiagram;
};

let diagram;

export default ({ database, relations, excuteActions }) => {
    const graphRef = useRef(null);
    const [tables, setTables] = useState([]);
    const generateDiagramData = (tables, relations) => ({
        nodeDataArray: tables,
        linkDataArray: relations.map(item => ({
            from: item.table_name,
            to: item.referenced_table_name,
            text: '0..N',
            toText: '1'
        }))
    });

    useEffect(() => {
        diagram = createDiagram(
            graphRef.current,
            generateDiagramData(tables, relations)
        );

        return () => diagram = undefined;
    }, []);

    useEffect(() => {
        excuteActions.getColumnsGroupByTable(database).then(columnsMap => {
            setTables(Object.keys(columnsMap).map(table => ({
                key: table,
                items: columnsMap[table] || []
            })));
        });
    }, [database]);

    useEffect(() => {
        diagram.setData(generateDiagramData(tables, relations));
    }, [relations, tables]);

    return (
        <div ref={graphRef} className="entity-relationship-graph"></div>
    );
}
