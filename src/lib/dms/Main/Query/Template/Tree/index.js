import React, { PureComponent } from "react";
import { Tree, Icon } from "antd";
import folderClose from "./folder-close.svg";
import folderOpen from "./folder-open.svg";
import "./index.less";

const { TreeNode, DirectoryTree } = Tree;

class TreeDemo extends PureComponent {

    renderTreeNodes = data =>
        data.map(item => {
            if (item.children) {
                return (
                    <TreeNode
                        title={item.title}
                        key={item.key}
                        dataRef={item}
                        icon={
                            (props) => {
                                let expanded = props.expanded;

                                return (
                                    <img
                                        className="group-folder-icon"
                                        src={expanded ? folderOpen : folderClose}
                                    />
                                );
                            }
                        }
                    >
                        {this.renderTreeNodes(item.children)}
                    </TreeNode>
                );
            }
            return (
                <TreeNode
                    title={
                        <span
                            onDoubleClick={() => {
                                this.props.onDbClick(item);
                            }}
                        >
                            {item.title}
                        </span>
                    }
                    key={item.key}
                    dataRef={item}
                    icon={
                        (props) => {
                            return (
                                <Icon
                                    type="file"
                                    // className="iconfont icon-page"
                                    onDoubleClick={() => {
                                        this.props.onDbClick(item);
                                    }}
                                />
                            );
                        }
                    }
                    isLeaf
                />
            );
        });

    render() {
        const { treeMap, defaultExpandedKeys } = this.props;

        return (
            <DirectoryTree
                multiple
                className="tnt-directory-tree"
                defaultExpandedKeys={defaultExpandedKeys}
            >
                {
                    this.renderTreeNodes(treeMap)
                }
            </DirectoryTree>
        );
    }
}

export default TreeDemo;
