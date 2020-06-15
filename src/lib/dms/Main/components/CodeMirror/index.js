import React, { Component, createRef } from "react";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/sql/sql";
import "codemirror/addon/display/placeholder";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/sql-hint";
import "./index.less";

export default class CodeInput extends Component {
    constructor(props) {
        super(props);
        this.editBox = null;
        this.editorRef = createRef(null);
    }

    componentDidMount() {
        const { readonly, tablesHint } = this.props;
        this.editBox = CodeMirror.fromTextArea(this.editorRef.current, {
            mode: "text/x-sql",
            lineNumbers: true,
            matchBrackets: true,
            readOnly: readonly || false,
            Autofocus: true,
            // extraKeys: {
            //     "Ctrl-Space": "autocomplete"
            // },
            hint: CodeMirror.hint.sql,
            hintOptions: {
                tables: tablesHint
            }
        });

        if (this.props.value) {
            this.editBox.setValue(this.props.value);
        }
        this.bindEvent();
    }

    componentDidUpdate() {
        const { value, tablesHint } = this.props;

        if (this.editBox.getValue() !== value) {
            this.editBox.setValue(value || "");
        }

        if (this.editBox.getOption('hintOptions').tables !== tablesHint) {
            this.editBox.setOption('hintOptions', { tables: tablesHint });
        }
    }

    bindEvent = () => {
        const { onChange, onBlur } = this.props;

        this.editBox.on("change", e => {
            onChange && onChange(e.getValue());
        });
        this.editBox.on("blur", e => {
            onBlur && onBlur(e.getValue());
        });
        this.editBox.on("keyup", (cm, event) => {  
            // 所有的字母和'$','{','.'在键按下之后都将触发自动完成  
            if (!cm.state.completionActive && ((event.keyCode >= 65 && event.keyCode <= 90 ) || [52, 219, 190].includes(event.keyCode))) {  
                CodeMirror.commands.autocomplete(cm, null, {completeSingle: false});  
            }  
        });
    };

    render() {
        const { className = "", style = {}, height = 300, placeholder } = this.props;

        style.height = height;

        return (
            <div className={`code-input ${className}`} style={style}>
                <textarea
                    ref={this.editorRef}
                    placeholder={placeholder}
                />
            </div>
        );
    }

    componentWillUnmount() {
        this.editBox.off("change");
        this.editBox.off("blur");
        this.editBox.off("keyup");
    }

    shouldComponentUpdate(nextProps) {
        return this.editBox.getValue() !== nextProps.value || this.editBox.getOption('hintOptions') !== nextProps.tablesHint;
    }
}
