import React, { useEffect, useState, useContext, useRef } from "react";
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
    const sqlEditorRef = useRef();
    const dataRef = useRef({
        setQuerySqlInfo
    });

    const [sqlHistoryList, setSqlHistoryList] = useState([]);
    const [sqlCollectionList, setSqlCollectionList] = useState([]);
    const [tablesHint, setTablesHint] = useState([]);
    const excuteActions = useContext(ActionContext);

    useEffect(() => {
        setQuerySqlInfo({
            ...querySqlInfo,
            querySqlText: localStorage.getItem("querySqlText")
        });
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

    useEffect(() => {
        dataRef.current.querySqlInfo = querySqlInfo;
    }, [querySqlInfo]);

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

    return (
        <div className="query-page">
            <div className="main-content">
                <Toolbar
                    action={action}
                    sqlEditorRef={sqlEditorRef}
                    querySqlInfo={querySqlInfo}
                    setQuerySqlInfo={setQuerySqlInfo}
                    getSqlHistoryList={getSqlHistoryList}
                    sqlCollectionList={sqlCollectionList}
                    getSqlCollectionList={getSqlCollectionList}
                    setSqlCollectionList={setSqlCollectionList}
                />
                <div className="main-content-body">
                    <div className="sql-text">
                        <CodeMirror
                            ref={sqlEditorRef}
                            value={querySqlInfo.querySqlText || ""}
                            onChange={(value) => {
                                setQuerySqlInfo({
                                    ...dataRef.current.querySqlInfo,
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
