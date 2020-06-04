import { useState, Fragment } from "react";
import { Table, Empty } from "antd";
import moment from "moment";

import "./index.less";

export default props => {
    const { schema, content } = this.props;

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
        <Fragment>
            {
                content.length === 0 &&
                <Empty
                    imageStyle={{
                        height: 140,
                        margin: "20px 0"
                    }}
                    style={{ position: "relative", top: "60px" }}
                    description={
                        <span>
                            暂无查询结果
						</span>
                    }
                />
            }
            {
                content.length > 0 &&
                <Table
                    dataSource={content}
                    columns={columns}
                    size="middle"
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
        </Fragment>
    );
}
