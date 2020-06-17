import React, { useState, useEffect, useContext } from "react";
import { Table, Select, Input } from "antd";
import moment from "moment";
import ActionContext from '../../ActionContext';
import { getSchema } from "../../util";
import DetailModal from "./DetailModal";
import './index.less';

const { Search } = Input;
const { Option } = Select;

export default props => {
    const { database, tableName } = props;
    const excuteActions = useContext(ActionContext);
    const [records, setRecords] = useState([]);
    const [columns, setColumns] = useState([]);
    const [schema, setSchema] = useState([]);
    const [detailModalVisible, setDetailModalVisible] = useState(false);
    const [detailItem, setDetailItem] = useState({});


    useEffect(() => {
        excuteActions.getTableContent(database, tableName).then(data => {
            setRecords(data);
            setSchema(getSchema(data));
            const newColumns = getSchema(data).map((item, index, arr) => {
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
            });
            newColumns.push({
                title: "操作",
                dataIndex: "action",
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
            });
            setColumns(newColumns);
        });
    }, [database, tableName]);

    const operationArr = ['=', '!=', '<', '<=', '>', '>=', '包含', '不包含', '开始以', '开始不是以', '是null', '不是null', '是空的', '不是空的', '介于', '不介于', '在列表', '不在列表'];

    return (
        <div className="content-page">
            <div>
                <Select
                    value={"jack" || undefined}
                    style={{ width: 120 }}
                    onChange={() => {

                    }}
                    placeholder="请选择"
                    showSearch
                >
                    <Option value="id">id</Option>
                    <Option value="book_id">book_id</Option>
                    <Option value="name">name</Option>
                </Select>
                <Select
                    value={"" || undefined}
                    style={{ width: 120 }}
                    onChange={() => {

                    }}
                    placeholder="请选择"
                >
                    {
                        operationArr.map((text, index) => {
                            return (
                                <Option
                                    value={text}
                                    key={index}
                                >
                                    {text}
                                </Option>
                            )
                        })
                    }
                </Select>
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                />
            </div>
            <Table
                dataSource={records}
                columns={columns}
                size="small"
                scroll={{
                    x: columns.length * 180
                }}
                pagination={{
                    pageSize: 50,
                    size: "small"
                }}
                rowKey="dataIndex"
            />
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
