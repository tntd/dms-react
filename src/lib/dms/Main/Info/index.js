import { useState } from "react";
import { Row, Col } from "antd";
import moment from "moment";
import { bytesToSize } from "@tntd/utils";
import CodeMirror from "../components/CodeMirror";
import "./index.less";

export default props => {
    const { createSql, selectDatabase, selectTable } = props;

    return (
        <div className="info-page">
            <div className="section-box">
                <div className="box-header">
                    <h2>基本信息</h2>
                </div>
                <div className="box-body">
                    <Row
                        gutter="20"
                        style={{
                            maxWidth: "750px"
                        }}
                    >
                        <Col span={12}>
                            <div className="label">
                                <i className="iconfont icon-project"></i>
									数据库
								</div>
                            <div className="text">
                                {selectDatabase}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <i className="iconfont icon-project"></i>
									表名
								</div>
                            <div className="text">
                                {selectTable}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <i className="iconfont icon-project"></i>
									引擎
								</div>
                            <div className="text">
                                {baseInfo.Engine}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <i className="iconfont icon-tip"></i>
									字符集
								</div>
                            <div className="text">
                                {baseInfo.Collation && baseInfo.Collation.split("_")[0]}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <i className="iconfont icon-tip"></i>
									校验规则
								</div>
                            <div className="text">
                                {baseInfo.Collation}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <i className="iconfont icon-tip"></i>
									创建时间
								</div>
                            <div className="text">
                                {moment(baseInfo.Create_time).format("YYYY-MM-DD HH:mm:ss")}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <i className="iconfont icon-tip"></i>
									更新时间
								</div>
                            <div className="text">
                                {moment(baseInfo.Update_time).format("YYYY-MM-DD HH:mm:ss")}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <i className="iconfont icon-tip"></i>
									行数
								</div>
                            <div className="text">
                                {baseInfo.Rows}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <i className="iconfont icon-tip"></i>
									数据容量
								</div>
                            <div className="text">
                                {bytesToSize(baseInfo.Data_length)}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <i className="iconfont icon-tip"></i>
									主键自动
								</div>
                            <div className="text">
                                {baseInfo.Auto_increment}
                            </div>
                        </Col>
                        <Col span={24}>
                            <div className="label">
                                <i className="iconfont icon-tip"></i>
									备注
								</div>
                            <div className="text">
                                {baseInfo.Comment}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="section-box">
                <div className="box-body">
                    <Row
                        gutter="20"
                    >
                        <Col span={24}>
                            <div className="label">
                                <i className="iconfont icon-project"></i>
									建表语句
								</div>
                            <div className="text">
                                <CodeMirror
                                    value={createSql || ""}
                                    height={"auto"}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}
