import React, { useState, useEffect, useContext } from 'react';
import { Row, Col, Icon } from 'antd';
import moment from 'moment';
import { bytesToSize } from '@tntd/utils';
import ActionContext from '../../ActionContext';
import CodeMirror from '../components/CodeMirror';
import './index.less';

export default props => {
    const {
        database,
        tableName
    } = props;
    const [tableStatus, setTableStatus] = useState({});
    const [createSql, setCreaetSql] = useState('');
    const excuteActions = useContext(ActionContext);

    useEffect(() => {
        excuteActions.getTableStatus(
            database, tableName
        ).then(data => setTableStatus(data || {}));
        excuteActions.getCreateSql(database, tableName).then(
            createSql => setCreaetSql(createSql)
        );
    }, [database, tableName]);

    return (
        <div className="info-page">
            <div className="section-box">
                <div className="box-header">
                    <h2>基本信息</h2>
                </div>
                <div className="box-body">
                    <Row
                        style={{
                            maxWidth: "750px"
                        }}
                    >
                        <Col span={12}>
                            <div className="label">
                                <Icon type='database' />
									数据库
								</div>
                            <div className="text">
                                {database}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <Icon type='table' />
									表名
								</div>
                            <div className="text">
                                {tableName}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <Icon type='project' />
									引擎
								</div>
                            <div className="text">
                                {tableStatus.Engine}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <Icon type='bulb' />
									字符集
								</div>
                            <div className="text">
                                {tableStatus.Collation && tableStatus.Collation.split("_")[0]}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <Icon type='control' />
									校验规则
								</div>
                            <div className="text">
                                {tableStatus.Collation}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <Icon type="clock-circle" />
									创建时间
								</div>
                            <div className="text">
                                {moment(tableStatus.Create_time).format("YYYY-MM-DD HH:mm:ss")}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <Icon type="clock-circle" />
									更新时间
								</div>
                            <div className="text">
                                {moment(tableStatus.Update_time).format("YYYY-MM-DD HH:mm:ss")}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <Icon type='number' />
									行数
								</div>
                            <div className="text">
                                {tableStatus.Rows}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <Icon type="container" />
									数据容量
								</div>
                            <div className="text">
                                {bytesToSize(tableStatus.Data_length)}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <Icon type="flag" />
									主键自动
								</div>
                            <div className="text">
                                {tableStatus.Auto_increment}
                            </div>
                        </Col>
                        <Col span={24}>
                            <div className="label">
                                <Icon type='read' />
									备注
								</div>
                            <div className="text">
                                {tableStatus.Comment}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="section-box">
                <div className="box-body">
                    <Row>
                        <Col span={24}>
                            <div className="label">
                                <Icon type="file" />
									建表语句
							</div>
                            <div className="text">
                                <CodeMirror
                                    value={createSql}
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
