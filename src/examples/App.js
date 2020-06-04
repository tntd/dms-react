import React from "react";
import Dms from "../lib";
import { mockJson } from "./mock";

const App = () => (
    <Dms
        title='精致DMS'
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
