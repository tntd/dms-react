import React, { Component } from "react";
import codemirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/sql/sql";
import "codemirror/addon/display/placeholder";
// import "codemirror/addon/hint/show-hint";
// import "codemirror/addon/hint/sql-hint";
import "./index.less";

const defaultConfig = {
	readOnly: false,
	lineNumbers: true
};

export default class CodeInput extends Component {
	constructor(props) {
		super(props);
		this.editBox = null;
		this.randomId = window.parseInt(Math.random() * 10000);
	}

	componentDidMount() {
		const { readonly } = this.props;
		this.editBox = codemirror.fromTextArea(document.getElementById(`fb_${this.randomId}`), {
			mode: "text/x-sql",
			lineNumbers: true,
			matchBrackets: true,
			readOnly: readonly || false,
			Autofocus: true
		});
		if (this.props.value) {
			this.editBox.setValue(this.props.value);
		}
		this.bindEvent();
	}

	componentDidUpdate() {
		if (this.editBox.getValue() !== this.props.value) {
			this.editBox.setValue(this.props.value || "");
		}
	}

	bindEvent = () => {
		this.editBox.on("change", e => {
			this.props.onChange && this.props.onChange(e.getValue());
		});
		this.editBox.on("blur", e => {

			this.props.onBlur && this.props.onBlur(e.getValue());
		});
	};

	render() {
		const { className = "", style = {}, config = {}, height = 300, placeholder } = this.props;

		style.height = height;

		return (
			<div className={`code-input ${className}`} style={style}>
				<textarea className="formula-box" id={`fb_${this.randomId}`} placeholder={placeholder} />
			</div>
		);
	}

	componentWillUnmount() {
		this.editBox.off("change");
	}

	shouldComponentUpdate(nextProps) {
		if (this.editBox.getValue() === nextProps.value) {
			return false;
		}
		return true;
	}
}
