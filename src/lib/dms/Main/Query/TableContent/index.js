import React, { useState, Fragment } from "react";
import { Table, Radio, Alert } from "antd";
import moment from "moment";
import SqlHistory from "../SqlHistory";

export default props => {
    const { action, querySqlInfo, setQuerySqlInfo } = props;
    const { querySqlText, loading, schema = [], content = [], resultTab = "history", errorInfo } = querySqlInfo;

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
                <SqlHistory />
            }
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
