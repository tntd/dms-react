import { PureComponent } from "react";
import { connect } from "dva";
import { Modal, Input, InputNumber, Row, Col, Button, Icon, Tooltip, Popconfirm, message } from "antd";
import QueryTable from "../components/QueryTable";
import CodeMirror from "../components/CodeMirror";
import "./index.less";

const { TextArea } = Input;
class Home extends PureComponent {

	state = {
		modalVisible: false,
		modalType: "add",
		id: null,
		title: null,
		content: null,
		sort: 1,
		tableInfo: {
			schema: [],
			content: []
		}
	}
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch({
			type: "dms/getDmsQueryList",
			payload: {
				isSystem: true
			}
		});
	}

	submitModal = () => {
		const { id, title, content, sort, modalType } = this.state;
		const { dispatch } = this.props;

		if (modalType === "add") {
			const params = {
				title, content, sort,
				isSystem: true
			};
			dispatch({
				type: "dms/addDmsQuery",
				payload: params
			});
		} else {
			const params = {
				id, title, content, sort,
				isSystem: true
			};
			dispatch({
				type: "dms/modifyDmsQuery",
				payload: params
			});
		}

		this.closeModal();
	}

	closeModal = () => {
		this.setState({
			modalVisible: false
		});
	}

	render() {
		const { modalVisible, modalType, id, title, content, sort, tableInfo } = this.state;
		const { store, dispatch } = this.props;
		const { dmsQueryInfo: { homeQueryList = [] }, dmsQuerySelectId } = store;

		return (
			<div className="home-page">
				<div className="home-page-aside">
					<div className="aside-header">
						<h3>SQL列表</h3>
						<Button
							onClick={() => {
								this.setState({
									modalVisible: true,
									modalType: "add"
								});
							}}
						>
							添加
						</Button>
					</div>
					<div className="aside-body">
						<ul>
							{
								homeQueryList.map((item, index) => {
									return (
										<li
											key={index}
											className={dmsQuerySelectId === item.id ? "active" : ""}
											onClick={() => {
												dispatch({
													type: "dms/updateState",
													payload: {
														dmsQuerySelectId: item.id
													}
												});
												// 执行sql
												dispatch({
													type: "dms/executeSql",
													payload: {
														value: item.content
													}
												}).then((res) => {
													const { content = [], schema = [] } = res;
													this.setState({
														tableInfo: {
															content,
															schema
														}
													});
												});
											}}
										>
											<i className="iconfont icon-page"></i>
											{item.title}
											<span className="action">
												<Tooltip title="点击修改">
													<Icon
														type="edit"
														onClick={(e) => {
															e.stopPropagation();
															this.setState({
																modalVisible: true,
																modalType: "modify",
																id: item.id,
																title: item.title,
																content: item.content,
																sort: item.sort
															});
														}}
													/>
												</Tooltip>
												<Tooltip title="点击删除">
													<Popconfirm
														title="您确认要删除当前sql语句吗？"
														onConfirm={(e) => {
															e.stopPropagation();
															dispatch({
																type: "dms/deleteDmsQuery",
																payload: {
																	id: item.id,
																	isSystem: true
																}
															});
														}}
														onCancel={() => { }}
														okText="Yes"
														cancelText="No"
													>
														<Icon
															type="delete"
															onClick={(e) => {
																e.stopPropagation();
															}}
														/>
													</Popconfirm>
												</Tooltip>
											</span>
										</li>
									);
								})
							}
						</ul>
					</div>
				</div>
				<div className="home-page-main">
					<div className="main-header">
						<h3>查询结果</h3>
					</div>
					<div className="main-body">
						<QueryTable
							schema={tableInfo.schema}
							content={tableInfo.content}
						/>
					</div>
				</div>
				<Modal
					title={modalType === "add" ? "添加sql" : "修改sql"}
					visible={modalVisible}
					maskClosable={false}
					onCancel={this.closeModal}
					onOk={this.submitModal}
					width={850}
					afterClose={() => {
						this.setState({
							modalType: "add",
							title: null,
							content: null,
							sort: 1
						});
					}}
				>
					<div className="basic-form">
						{
							modalType === "modify" &&
							<Row gutter={10} className="auto-height">
								<Col span={5} className="basic-info-title">
									Id：
    							</Col>
								<Col span={19}>
									<Input
										value={id || undefined}
										disabled
									/>
								</Col>
							</Row>
						}
						<Row gutter={10} className="auto-height">
							<Col span={5} className="basic-info-title">
								标题：
    						</Col>
							<Col span={19}>
								<Input
									value={title || undefined}
									placeholder="请输入标题"
									onChange={(e) => {
										this.setState({
											title: e.target.value
										});
									}}
								/>
							</Col>
						</Row>
						<Row gutter={10} className="auto-height">
							<Col span={5} className="basic-info-title">
								内容：
    						</Col>
							<Col span={19}>
								<CodeMirror
									value={content || ""}
									onChange={(value) => {
										this.setState({
											content: value
										});
									}}
									height={200}
								/>
							</Col>
						</Row>
						<Row gutter={10} className="auto-height">
							<Col span={5} className="basic-info-title">
								sort：
    						</Col>
							<Col span={19}>
								<InputNumber
									min={1}
									max={1000}
									step={1}
									value={sort || undefined}
									onChange={(value) => {
										this.setState({
											sort: value
										});
									}}
									placeholder="输入排序值"
									style={{
										width: "100%"
									}}
								/>
							</Col>
						</Row>
					</div>
				</Modal>
			</div>
		);
	}
}

export default connect(state => ({
	store: state.dms
}))(Home);
