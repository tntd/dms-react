import { PureComponent } from "react";
import { connect } from "dva";
import { Button, Select } from "antd";
import Tree from "./Tree";

import { sqlTemplateList } from "../../constant";
const { Option } = Select;

class Template extends PureComponent {

	onDbClick = (item) => {
		const { dispatch, store } = this.props;
		const { querySqlInfo } = store;
		let { querySqlText } = querySqlInfo;

		if (querySqlText) {
			querySqlText = querySqlText + `\n${item.content}`;
		} else {
			querySqlText = item.content;
		}
		querySqlInfo["querySqlText"] = querySqlText;

		dispatch({
			type: "dms/updateState",
			payload: {
				querySqlInfo
			}
		});

	}

	render() {

		return (
			<div className="sql-template-panel">
				<div className="panel-header">
					<h3>SQL模板</h3>
					<span>双击插入</span>
				</div>
				<div className="panel-body">
					<Tree
						treeMap={sqlTemplateList}
						onDbClick={this.onDbClick}
						defaultExpandedKeys={["group-1-0", "group-1-1"]}
					/>
				</div>
			</div>
		);
	}
}

export default connect(state => ({
	store: state.dms
}))(Template);
