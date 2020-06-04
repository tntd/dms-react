import React, { useState, useEffect } from "react";
import "./index.less";

export default props => {

    return (
        <div className="simple-header">
            {props.children}
        </div>
    );
};
