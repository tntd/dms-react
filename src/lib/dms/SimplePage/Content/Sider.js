import React from "react";

export default props => {
    const { className = "", width = 200 } = props;

    return (
        <div
            className={`body-sider ${className}`}
            style={{ width: width + "px" }}
        >
            {props.children}
        </div>
    );
}
