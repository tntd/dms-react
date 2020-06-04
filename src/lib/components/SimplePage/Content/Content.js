import React, { PureComponent, forwardRef } from "react";

class Body extends PureComponent {
    render() {
        const { forwardedRef, className = "" } = this.props;

        return (
            <div ref={forwardedRef} className={`simple-body ${className}`}>
                {this.props.children}
            </div>
        );
    }
}

export default forwardRef(
    (props, ref) => <Body forwardedRef={ref} {...props} />
);
