import React, { useEffect, useState, useContext } from "react";
import ActionContext from '../../ActionContext';
import Toolbar from "./Toolbar";
import TableContent from "./TableContent";
import Template from "./Template";
import CodeMirror from "../components/CodeMirror";
import { getAllData } from "../../indexDb";
import "./index.less";

export default props => {
    const { action, database } = props;
    const [querySqlInfo, setQuerySqlInfo] = useState({
        querySqlText: "",
        loading: false,
        schema: [],
        content: [],
        resultTab: "history",
        errorInfo: {}
    });

    const [sqlHistoryList, setSqlHistoryList] = useState([]);
    const [sqlCollectionList, setSqlCollectionList] = useState([]);
    const [tablesHint, setTablesHint] = useState([]);
    const excuteActions = useContext(ActionContext);

    useEffect(() => {
        init();
        getSqlHistoryList();
        getSqlCollectionList();
    }, []);

    useEffect(() => {
        excuteActions.getColumnsByDatabase(database).then(columns => {
            setTablesHint(columns.reduce((acc, cur) => {
                acc[cur.table_name] = acc[cur.table_name] || [];
                acc[cur.table_name].push(cur.column_name);

                return acc;
            }, {}));
        });
    }, [database]);

    const getSqlHistoryList = () => {
        getAllData('sql_history', (list) => {
            setSqlHistoryList(list || []);
        });
    };

    const getSqlCollectionList = () => {
        getAllData('sql_collection', (list) => {
            setSqlCollectionList(list || []);
        });
    };

    const init = () => {
        setQuerySqlInfo({
            ...querySqlInfo,
            querySqlText: localStorage.getItem("querySqlText")
        })
    };

    return (
        <div className="query-page">
            <div className="main-content">
                <Toolbar
                    action={action}
                    querySqlInfo={querySqlInfo}
                    setQuerySqlInfo={setQuerySqlInfo}
                    getSqlHistoryList={getSqlHistoryList}
                    sqlCollectionList={sqlCollectionList}
                    setSqlCollectionList={setSqlCollectionList}
                />
                <div className="main-content-body">
                    <div className="sql-text">
                        <CodeMirror
                            value={querySqlInfo.querySqlText || ""}
                            onChange={(value) => {
                                setQuerySqlInfo({
                                    ...querySqlInfo,
                                    querySqlText: value
                                })
                                localStorage.setItem("querySqlText", value);
                            }}
                            height={200}
                            tablesHint={tablesHint}
                        />
                    </div>
                    <TableContent
                        action={action}
                        querySqlInfo={querySqlInfo}
                        setQuerySqlInfo={setQuerySqlInfo}
                        sqlHistoryList={sqlHistoryList}
                    />
                </div>
            </div>
            <Template
                querySqlInfo={querySqlInfo}
                setQuerySqlInfo={setQuerySqlInfo}
            />
        </div>
    );
}
