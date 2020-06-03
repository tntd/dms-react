import { useEffect, useState } from "react";
import Toolbar from "./Toolbar";
import TableContent from "./TableContent";
import Template from "./Template";

import CodeMirror from "../components/CodeMirror";
import "./index.less";

export default props => {
    const [querySqlInfo, setQuerySqlInfo] = useState({});

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
                <Toolbar />
                <div className="main-content-body">
                    <div className="sql-text">
                        <CodeMirror
                            value={querySqlText || ""}
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
                    <TableContent />
                </div>
            </div>
            <Template />
        </div>
    );
}
