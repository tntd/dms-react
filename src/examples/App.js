import React from "react";
import Dms from "../lib";
import mockJsonBySql from "./mock";
import 'antd/dist/antd.css';

const App = () => (
    <Dms
        isDevelopmentEnv={true}
        title='星辰DMS'
        action={({ value }) => {
            console.log('excute sql:', value);
            return new Promise(resolve => {
                resolve(
                    mockJsonBySql(value)
                );
            });
        }}
    />
);

export default App;
