import { PureComponent, Fragment } from "react";
import { connect } from "dva";
import { Table, Radio, Alert } from "antd";
import moment from "moment";

class TableContent extends PureComponent {

	render() {
		const { store, dispatch } = this.props;
		const { querySqlInfo } = store;
		const { querySqlText, loading, schema = [], content = [], resultTab = "result", errorInfo } = querySqlInfo;

		const columns = schema.map((item, index, arr) => {
			let obj = {
				title: item.text,
				dataIndex: item.text,
				key: item.dataIndex,
				ellipsis: true,
				width: 180,
				render: ((text, record) => {
					if (item.text === "gmt_create" || item.text === "gmt_modify") {
						text = moment(text).format("YYYY-MM-DD HH:mm:ss");
					}
					return (
						<span>
							{text}
						</span>
					);
				})
			};
			if (index === 0 && arr.length > 5) {
				obj["fixed"] = "left";
			}

			return obj;
		});

		return (
			<div className="table-content">
				<Radio.Group
					value={resultTab || undefined}
					size="middle"
					onChange={(e) => {
						querySqlInfo["resultTab"] = e.target.value;
						dispatch({
							type: "dms/updateState",
							payload: {
								querySqlInfo
							}
						});
					}}
				>
					<Radio.Button value="result">执行结果</Radio.Button>
					<Radio.Button value="message">消息</Radio.Button>
				</Radio.Group>
				{
					resultTab === "result" &&
					<Table
						dataSource={content}
						columns={columns}
						size="middle"
						loading={loading}
						scroll={{
							x: schema.length * 180
						}}
						pagination={{
							pageSize: 50,
							size: "small"
						}}
						rowKey="dataIndex"
					/>
				}
				{
					resultTab === "message" &&
					<div>
						{
							errorInfo &&
							errorInfo.code &&
							<Alert
								message="SQL执行错误"
								description={
									<Fragment>
										<div>
											<span>code：</span>
											{errorInfo.code}
										</div>
										<div>
											<span>errorNo：</span>
											{errorInfo.errno}
										</div>
										<div>
											<span>sqlState：</span>
											{errorInfo.sqlState}
										</div>
										<div>
											<span>sqlMessage：</span>
											{errorInfo.sqlMessage}
										</div>
										<div>
											<span>sql：</span>
											{errorInfo.sql}
										</div>
									</Fragment>
								}
								type="error"
							/>

						}
						{
							!errorInfo &&
							<Fragment>
								<div>【执行SQL】</div>
								<div>{querySqlText}</div>
								<div>执行成功，当前返回：[{content.length}]行。</div>
							</Fragment>
						}
					</div>
				}
			</div>
		);
	}
}

export default connect(state => ({
	store: state.dms
}))(TableContent);
