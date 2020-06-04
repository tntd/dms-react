import React, { PureComponent } from "react";
import "./index.less";

export default class Page extends PureComponent {
	render() {
		const { className, children } = this.props;

		return (
			<div className={`page simple-page ${className}`}>
				{children}
			</div>
		);
	}
}
