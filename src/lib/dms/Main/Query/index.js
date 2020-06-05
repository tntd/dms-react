import React, { useEffect, useState } from "react";
import Toolbar from "./Toolbar";
import TableContent from "./TableContent";
import Template from "./Template";
import CodeMirror from "../components/CodeMirror";
import "./index.less";

export default props => {
    const { action } = props;
    const [querySqlInfo, setQuerySqlInfo] = useState({
        querySqlText: "",
        loading: false,
        schema: [],
        content: [],
        resultTab: "result",
        errorInfo: {}
    });

    useEffect(() => {
        init();
    }, []);

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
