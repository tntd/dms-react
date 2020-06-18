import React, { useState, Fragment } from "react";
import { Table, Radio, Alert } from "antd";
import moment from "moment";
import SqlHistory from "../SqlHistory";
import DetailModal from "../../components/RowDetailModal";

export default props => {
    const { querySqlInfo, setQuerySqlInfo, sqlHistoryList } = props;
    const { querySqlText, loading, schema = [], content = [], resultTab = "history", errorInfo } = querySqlInfo;
    const [detailModalVisible, setDetailModalVisible] = useState(false);
    const [detailItem, setDetailItem] = useState({});

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

    if (columns.length > 0) {
        columns.push({
            title: "操作",
            dataIndex: "action ",
            width: 120,
            fixed: "right",
            render: ((text, record) => {
                return (
                    <span>
                        <a
                            onClick={() => {
                                setDetailModalVisible(true);
                                setDetailItem(record);
                            }}
                        >
                            查看详情
                        </a>
                    </span>
                );
            })
        })
    }

    return (
        <div className="table-content">
            <Radio.Group
                value={resultTab || undefined}
                size="middle"
                onChange={(e) => {
                    setQuerySqlInfo({
                        ...querySqlInfo,
                        resultTab: e.target.value
                    })
                }}
            >
                <Radio.Button value="history">执行历史</Radio.Button>
                <Radio.Button value="result">执行结果</Radio.Button>
                <Radio.Button value="message">消息</Radio.Button>
            </Radio.Group>
            {
                resultTab === "history" &&
                <SqlHistory
                    sqlHistoryList={sqlHistoryList}
                    querySqlInfo={querySqlInfo}
                    setQuerySqlInfo={setQuerySqlInfo}
                />
            }
            {
                resultTab === "result" &&
                <Table
                    dataSource={content}
                    columns={columns}
                    size="small"
                    loading={loading}
                    scroll={{
                        x: schema.length * 180 + 120
                    }}
                    pagination={{
                        pageSize: 50
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
            <DetailModal
                visible={detailModalVisible}
                schema={schema || []}
                detailItem={detailItem}
                onCancel={() => {
                    setDetailModalVisible(false)
                }}
                afterClose={() => {
                    setDetailItem({})
                }}
            />
        </div>
    );
}
