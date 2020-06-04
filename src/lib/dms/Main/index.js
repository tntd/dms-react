import React, { useState } from "react";
import { Empty } from "antd";
import Home from "./Home";
import Structure from "./Structure";
import Content from "./Content";
import Relations from "./Relations";
import Triggers from "./Triggers";
import Info from "./Info";
import Query from "./Query";

export default props => {
    const { action, selectNav, columns, tableStatus, createSql, tableContentList, selectDatabase, selectTable } = props;
    console.log("createSql", props);

    return (
        <div className="body-main-content">
            {
                selectNav === "home" &&
                // <Home />
                <div>首页</div>
            }
            {
                selectNav === "structure" &&
                <Structure
                    columns={columns}
                    tableStatus={tableStatus}
                />
            }
            {
                selectNav === "content" &&
                <Content tableContentList={tableContentList} />
            }
            {
                selectNav === "relations" &&
                <Relations />
            }
            {
                selectNav === "triggers" &&
                <Triggers />
            }
            {
                selectNav === "info" &&
                <Info
                    createSql={createSql}
                    columns={columns}
                    tableStatus={tableStatus}
                    selectDatabase={selectDatabase}
                    selectTable={selectTable}
                />
            }
            {
                selectNav === "query" &&
                <Query
                    action={action}
                />
            }
        </div>
    );
}
