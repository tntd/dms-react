import React from "react";
import Dms from "../lib";
import { mockJson } from "./mock";
import 'antd/dist/antd.css';

const App = () => (
    <Dms
        isDevelopmentEnv={true}
        title='星辰DMS'
        action={({ value }) => {
            return new Promise(resolve => {
                resolve(
                    mockJson
                );
            });
        }}
    />
);

export default App;
