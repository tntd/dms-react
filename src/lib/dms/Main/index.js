import React from "react";
import Home from "./Home";
import Columns from "./Columns";
import Content from "./Content";
import Relations from "./Relations";
import Triggers from "./Triggers";
import Info from "./Info";
import Query from "./Query";

export default (props) => {
  const {
    action,
    selectNav,
    selectDatabase,
    selectTable,
    tables,
    columns,
    renderHome,
  } = props;

  const MainContent =
    {
      home: renderHome || Home,
      columns: Columns,
      content: Content,
      relations: Relations,
      triggers: Triggers,
      info: Info,
      query: Query,
    }[selectNav] || Home;

  return (
    <div className="dms-page-main no-scrollbar">
      <MainContent
        action={action}
        database={selectDatabase}
        tableName={selectTable}
        tables={tables}
        columns={columns}
      />
    </div>
  );
};
