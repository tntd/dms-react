import React, { useEffect, useState, useContext, useRef } from "react";
import ActionContext from '../../ActionContext';
import { Radio } from 'antd';
import List from './List';
import EntityRelationship from './EntityRelationship';
import './index.less';

export default ({ database, tables }) => {
    const [viewType, setViewType] = useState('er');
    const [relations, setRelations] = useState([]);
    const Content = {
        list: List,
        er: EntityRelationship
    }[viewType] || List;
    const excuteActions = useContext(ActionContext);

    useEffect(() => {
        excuteActions.getEntityRelations(database).then(
            relations => setRelations(relations)
        );
    }, [database]);

    return (
        <div className="relations-page">
            <div className="relations-page-toolbar">
                <Radio.Group
                    value={viewType}
                    size="middle"
                    onChange={evt => setViewType(evt.target.value)}
                >
                    <Radio.Button value="er">ER图</Radio.Button>
                    <Radio.Button value="list">关系</Radio.Button>
                </Radio.Group>
            </div>
            <Content
                database={database}
                excuteActions={excuteActions}
                tables={tables}
                relations={relations}
            />
        </div>
    );
}
