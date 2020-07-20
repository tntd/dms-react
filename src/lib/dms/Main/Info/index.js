import React, { useState, useEffect, useContext } from 'react';

import {
    BulbOutlined,
    ClockCircleOutlined,
    ContainerOutlined,
    ControlOutlined,
    DatabaseOutlined,
    FileOutlined,
    FlagOutlined,
    NumberOutlined,
    ProjectOutlined,
    ReadOutlined,
    TableOutlined,
} from '@ant-design/icons';

import { Row, Col } from 'antd';
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
                                <DatabaseOutlined />
									数据库
								</div>
                            <div className="text">
                                {database}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <TableOutlined />
									表名
								</div>
                            <div className="text">
                                {tableName}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <ProjectOutlined />
									引擎
								</div>
                            <div className="text">
                                {tableStatus.Engine}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <BulbOutlined />
									字符集
								</div>
                            <div className="text">
                                {tableStatus.Collation && tableStatus.Collation.split("_")[0]}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <ControlOutlined />
									校验规则
								</div>
                            <div className="text">
                                {tableStatus.Collation}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <ClockCircleOutlined />
									创建时间
								</div>
                            <div className="text">
                                {moment(tableStatus.Create_time).format("YYYY-MM-DD HH:mm:ss")}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <ClockCircleOutlined />
									更新时间
								</div>
                            <div className="text">
                                {moment(tableStatus.Update_time).format("YYYY-MM-DD HH:mm:ss")}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <NumberOutlined />
									行数
								</div>
                            <div className="text">
                                {tableStatus.Rows}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <ContainerOutlined />
									数据容量
								</div>
                            <div className="text">
                                {bytesToSize(tableStatus.Data_length)}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="label">
                                <FlagOutlined />
									主键自动
								</div>
                            <div className="text">
                                {tableStatus.Auto_increment}
                            </div>
                        </Col>
                        <Col span={24}>
                            <div className="label">
                                <ReadOutlined />
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
                                <FileOutlined />
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
