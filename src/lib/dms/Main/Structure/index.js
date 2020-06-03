import { useState } from "react";
import { Table } from "antd";
import "./index.less";

export default props => {
    const { structure } = props;

    const columns = [
        {
            title: "列名",
            dataIndex: "Field",
            key: "Field"
        },
        {
            title: "类型",
            dataIndex: "Type",
            key: "Type",
            render: ((text, record) => {
                return (
                    <span>
                        {text.split("(")[0]}
                    </span>
                );
            })
        },
        {
            title: "长度",
            dataIndex: "address",
            key: "address",
            render: ((text, record) => {
                let textArr;
                if (record.Type) {
                    textArr = record.Type.match(/\(([^)]*)\)/);
                }
                return (
                    <span>
                        {textArr && textArr.length > 0 && textArr[0]}
                    </span>
                );
            })
        },
        {
            title: "备注",
            dataIndex: "address",
            key: "address"
        },
        {
            title: "可空",
            dataIndex: "Null",
            key: "Null",
            render: ((text, record) => {
                return (
                    <span>
                        {text}
                    </span>
                );
            })
        },
        {
            title: "主键",
            dataIndex: "Key",
            key: "Key",
            render: ((text, record) => {
                return (
                    <span>
                        {text}
                    </span>
                );
            })
        }
    ];

    return (
        <div className="structure-page">
            <Table
                dataSource={structure}
                columns={columns}
                pagination={false}
                rowKey="Field"
                size="middle"
            />
        </div>
    );

}
