import React from "react";
import { Table } from "antd";
import moment from "moment";
import { getSchema } from "../../util";
import "./index.less";

export default props => {
    const { tableContentList = [] } = props;
    const schema = getSchema(tableContentList);
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
        <div className="content-page">
            <Table
                dataSource={tableContentList}
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
        </div>
    );
}
