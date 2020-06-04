import React from "react";
import Tree from "./Tree";

import { sqlTemplateList } from "../../constant";

export default props => {
    const { action, querySqlInfo, setQuerySqlInfo } = props;
    const { querySqlText } = querySqlInfo;

    const onDbClick = (item) => {
        if (querySqlInfo.querySqlText) {
            querySqlInfo.querySqlText = querySqlText + `\n${item.content}`;
        } else {
            querySqlInfo.querySqlText = item.content;
        }

        setQuerySqlInfo(querySqlInfo);
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
