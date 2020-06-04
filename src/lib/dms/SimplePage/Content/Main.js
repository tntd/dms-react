import React from "react";

export default props => {

    const { className = "" } = props;

    return (
        <div className={`body-main ${className}`}>
            {props.children}
        </div>
    );
}
