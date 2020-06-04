import React, { PureComponent } from "react";

export default class Main extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { className = "" } = this.props;

        return (
            <div className={`body-main ${className}`}>
                {this.props.children}
            </div>
        );
    }
}
