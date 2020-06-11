import React, { useEffect, useState } from "react";
import Toolbar from "./Toolbar";
import TableContent from "./TableContent";
import Template from "./Template";
import CodeMirror from "../components/CodeMirror";
import { initIDB, getAllData } from "../../indexDb";
import "./index.less";

export default props => {
    const { action } = props;
    const [querySqlInfo, setQuerySqlInfo] = useState({
        querySqlText: "",
        loading: false,
        schema: [],
        content: [],
        resultTab: "history",
        errorInfo: {}
    });

    const [sqlHistoryList, setSqlHistoryList] = useState([]);

    useEffect(() => {
        init();
        getSqlHistoryList();
    }, []);

    const getSqlHistoryList = () => {
        getAllData('sql_history', (list) => {
            console.log(list)
            setSqlHistoryList(list || [])
        })
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
