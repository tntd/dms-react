import React from "react";
import Dms, { mockJsonBySql } from "../lib";
import "antd/dist/antd.css";

const Home = (props) => (
  <div>
    <h4>自定义Home</h4>
    <pre style={{ backgroundColor: "#fff", padding: "20px" }}>
      {JSON.stringify(props, null, 4)}
    </pre>
  </div>
);
const App = () => (
  <Dms
    isDevelopmentEnv={true}
    title="Rookie DMS"
    action={(sql, { sqls } = {}) => {
      console.log("excute sql:", sql, sqls);
      return new Promise((resolve) => {
        resolve(mockJsonBySql(sql));
      });
    }}
    renderHome={Home}
  />
);

export default App;
