import { PureComponent } from "react";

export default class Sider extends PureComponent {
	render() {
		const { className = "", width = 200 } = this.props;

		return (
			<div
				className={`body-sider ${className}`}
				style={{ width: width + "px" }}
			>
				{this.props.children}
			</div>
		);
	}
}
