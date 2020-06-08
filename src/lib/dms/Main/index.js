import React, { useState } from "react";
import { Empty } from "antd";
import Home from "./Home";
import Columns from "./Columns";
import Content from "./Content";
import Relations from "./Relations";
import Triggers from "./Triggers";
import Info from "./Info";
import Query from "./Query";

export default props => {
    const { action, selectNav, columns, tableStatus, createSql, tableContentList, selectDatabase, selectTable } = props;

    const MainContent = {
        home: Home,
        columns: Columns,
        content: Content,
        relations: Relations,
        triggers: Triggers,
        info: Info,
        query: Query
    }[selectNav] || Home;

    return (
        <div className="dms-page-main">
            <MainContent
                action={action}
                columns={columns}
                tableStatus={tableStatus}
                tableContentList={tableContentList}
                createSql={createSql}
                selectDatabase={selectDatabase}
                selectTable={selectTable}
            />
        </div>
    );
}
