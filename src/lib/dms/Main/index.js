import { useState } from "react";
import { Empty } from "antd";
import Home from "./Home";
import Structure from "./Structure";
import Content from "./Content";
import Relations from "./Relations";
import Triggers from "./Triggers";
import Info from "./Info";
import Query from "./Query";

export default props => {
    const { selectNav, structure, createSql, tableContentList, selectDatabase, selectTable } = props;

    return (
        <div className="body-main-content">
            {
                selectNav === "home" &&
                // <Home />
                <div>首页</div>
            }
            {
                selectNav === "structure" &&
                <Structure structure={structure} />
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
                    selectDatabase={selectDatabase}
                    selectTable={selectTable}
                />
            }
            {
                selectNav === "query" &&
                <Query />
            }
        </div>
    );
}
