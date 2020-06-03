import React from "react";
import Dms from "../lib";
import { mockJson } from "./mock";

const App = () => (
    <Dms
        action={({ value }) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(
                        mockJson
                    );
                }, 500);
            });
        }}
    />
);

export default App;
