import React, { useState, useEffect, useContext } from "react";
import { Table } from "antd";
import moment from "moment";
import ActionContext from '../../ActionContext';
import { getSchema } from "../../util";
import './index.less';

export default props => {
    const { database, tableName } = props;
    const excuteActions = useContext(ActionContext);
    const [records, setRecords] = useState([]);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        excuteActions.getTableContent(database, tableName).then(data => {
            console.log('data...', data)
            setRecords(data);
            setColumns(
                getSchema(data).map((item, index, arr) => {
                    const obj = {
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
                })
            );
        });
    }, [database, tableName]);

    return (
        <div className="content-page">
            <Table
                dataSource={records}
                columns={columns}
                size="middle"
                scroll={{
                    x: columns.length * 180
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
