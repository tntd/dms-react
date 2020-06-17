import React, { useState, useEffect, useContext } from "react";
import { Table, Select, Input } from "antd";
import moment from "moment";
import ActionContext from '../../ActionContext';
import { getSchema } from '../../util';
import DetailModal from '../components/RowDetailModal';
import { operatorMap } from "./constant";
import './index.less';

const { Search } = Input;
const { Option } = Select;

export default props => {
    const { database, tableName } = props;
    const excuteActions = useContext(ActionContext);
    const [records, setRecords] = useState([]);
    const [columns, setColumns] = useState([]);
    const [detailItem, setDetailItem] = useState(null);

    useEffect(() => {
        excuteActions.getTableContent(database, tableName).then(data => {
            setRecords(data);
            setColumns([
                ...getSchema(data).map((item, index, arr) => {
                    const isFixed = index === 0 && arr.length > 5;
    
                    return {
                        title: item.text,
                        dataIndex: item.text,
                        key: item.dataIndex,
                        ellipsis: true,
                        fixed: isFixed ? 'left' : null,
                        width: 180,
                        className: isFixed ? 'fixed-left-column' : '',
                        render: text => {
                            if (['gmt_create', 'gmt_modify'].includes(item.text)) {
                                return moment(text).format('YYYY-MM-DD HH:mm:ss');
                            }
    
                            return  text;
                        }
                    };
                }),
                {
                    title: "操作",
                    dataIndex: "action",
                    width: 80,
                    fixed: "right",
                    render: ((text, record) => (
                        <a onClick={() => setDetailItem(record)}>
                            查看详情
                        </a>
                    ))
                }
            ]);
        });
    }, [database, tableName]);

    return (
        <div className="content-page">
            <div className='content-page-search'>
                <Select
                    value={"" || undefined}
                    style={{ width: 120 }}
                    onChange={() => {

                    }}
                    placeholder="请选择"
                    showSearch
                    className='search-field'
                >
                    <Option value="id">id</Option>
                    <Option value="book_id">book_id</Option>
                    <Option value="name">name</Option>
                </Select>
                <Select
                    value={"=" || undefined}
                    style={{ width: 120 }}
                    onChange={() => {

                    }}
                    placeholder="请选择"
                    className='search-operator'
                >
                    {
                        operatorMap['string'].map((item, index) => {
                            return (
                                <Option
                                    value={item.value}
                                    key={index}
                                >
                                    {item.label}
                                </Option>
                            )
                        })
                    }
                </Select>
                <Search
                    placeholder="请输入搜索值..."
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                    className='search-value'
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
                visible={!!detailItem}
                detailItem={detailItem}
                onCancel={() => setDetailItem(null)}
            />
        </div>
    );
}
