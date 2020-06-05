import React from "react";
import Tree from "./Tree";

import { sqlTemplateList } from "../../constant";

export default props => {
    const { querySqlInfo, setQuerySqlInfo } = props;
    const { querySqlText } = querySqlInfo;

    const onDbClick = (item) => {
        let newText = querySqlText;
        if (newText) {
            newText = querySqlText + `\n${item.content}`;
        } else {
            newText = item.content;
        }

        localStorage.setItem('querySqlText', querySqlInfo.querySqlText);
        setQuerySqlInfo({
            ...querySqlInfo,
            querySqlText: newText
        });
    }

    return (
        <div className="sql-template-panel">
            <div className="panel-header">
                <h3>SQL模板</h3>
                <span>双击插入</span>
            </div>
            <div className="panel-body">
                <Tree
                    treeMap={sqlTemplateList}
                    onDbClick={onDbClick}
                    defaultExpandedKeys={["group-1-0", "group-1-1"]}
                />
            </div>
        </div>
    );
}
