import React, { useState, useEffect, useContext } from "react";
import { Table, Select, Input, message } from "antd";
import moment from "moment";
import ActionContext from '../../ActionContext';
import DetailModal from '../components/RowDetailModal';
import { operatorMap } from "./constant";
import './index.less';

const { Search } = Input;
const { Option } = Select;

export default props => {
    const { database, tableName, columns: sqlColumns } = props;
    const excuteActions = useContext(ActionContext);
    const [records, setRecords] = useState([]);
    const [columns, setColumns] = useState([]);
    const [detailItem, setDetailItem] = useState(null);
    const [searchParams, setSearchParams] = useState({
        field: null,
        fieldType: 'string',
        operator: '=',
        keyword: ''
    });

    useEffect(() => {
        excuteActions.getTableContent(database, tableName).then(data => {
            setRecords(data);
            setColumns([
                ...(sqlColumns || []).map(({ Field: columnKey }, index, arr) => {
                    const isFixed = index === 0 && arr.length > 5;

                    return {
                        title: columnKey,
                        dataIndex: columnKey,
                        key: columnKey,
                        ellipsis: true,
                        fixed: isFixed ? 'left' : null,
                        width: 180,
                        className: isFixed ? 'fixed-left-column' : '',
                        render: text => {
                            if (['gmt_create', 'gmt_modify'].includes(columnKey)) {
                                return moment(text).format('YYYY-MM-DD HH:mm:ss');
                            }

                            return text;
                        }
                    };
                }),
                {
                    title: '操作',
                    dataIndex: 'action',
                    width: 80,
                    fixed: 'right',
                    render: ((text, record) => (
                        <a onClick={() => setDetailItem(record)}>
                            查看详情
                        </a>
                    ))
                }
            ]);
        });
    }, [database, tableName, sqlColumns]);

    const startSearch = () => {
        console.log('searchParams', searchParams);
        let baseSql = `select * from ${database}.${tableName} `;
        let whereSql = '';
        let { field, operator = '=', keyword } = searchParams;

        if (!field) {
            message.warning('请选择列');
            return;
        }
        if (!keyword) {
            message.warning('请输入搜索项');
            return;
        }
        // 根据operator组装
        if (operator === '=') {
            whereSql = `where ${field} = ${keyword}`;
        } else if (operator === '!=') {
            whereSql = `where ${field} != ${keyword}`;
        } else if (operator === '>') {
            whereSql = `where ${field} > ${keyword}`;
        } else if (operator === '>=') {
            whereSql = `where ${field} >= ${keyword}`;
        } else if (operator === '<') {
            whereSql = `where ${field} < ${keyword}`;
        } else if (operator === '<=') {
            whereSql = `where ${field} <= ${keyword}`;
        } else if (operator === 'contains') {
            // 第二个参数是一个单词，要用单引号括起来。
            whereSql = `where contains(${field},'${keyword}')`;
        } else if (operator === 'not contain') {
            // 第二个参数是一个单词，要用单引号括起来。
            whereSql = `where charindex(${field},'${keyword}')=0`;
        } else if (operator === 'start with') {
            // 开始以
            whereSql = `where ${field} like '${keyword}%'`;
        } else if (operator === 'start not with') {
            // 开始不是以
            whereSql = `where ${field} not like '${keyword}%'`;
        } else if (operator === 'end with') {
            // 结束以
            whereSql = `where ${field} like '%${keyword}'`;
        } else if (operator === 'end not with') {
            // 结束不是以
            whereSql = `where ${field} not like '%${keyword}'`;
        } else if (operator === 'is null') {
            whereSql = `where ${field} is null`;
        } else if (operator === 'is not null') {
            whereSql = `where ${field} is not null`;
        } else if (operator === 'between') {
            // 这里有两个参数
            whereSql = `where ${field} is empty`;
        } else if (operator === 'in list') {
            whereSql = `where ${field} in (${keyword})`;
        } else if (operator === 'not in list') {
            whereSql = `where ${field} not in (${keyword})`;
        } else if (operator === 'is before') {
            whereSql = `where ${field} < ${keyword}`;
        } else if (operator === 'is befter or equal to') {
            whereSql = `where ${field} <= ${keyword}`;
        } else if (operator === 'is after') {
            whereSql = `where ${field} > ${keyword}`;
        } else if (operator === 'is after or equal to') {
            whereSql = `where ${field} >= ${keyword}`;
        }
        console.log('sql', baseSql + whereSql);
        message.info(baseSql + whereSql);
    }

    return (
        <div className="content-page">
            <div className='content-page-search'>
                <Select
                    value={searchParams.field || undefined}
                    style={{ width: 120 }}
                    onChange={(value) => {
                        const selectObj = sqlColumns.find(item => item.Field === value);

                        setSearchParams({
                            ...searchParams,
                            field: value,
                            fieldType: selectObj.Type || 'string'
                        })
                    }}
                    placeholder="请选择"
                    showSearch
                    className='search-field'
                >
                    {
                        sqlColumns.map(({ Field }, index) => (
                            <Option value={Field} key={Field}>
                                {Field}
                            </Option>
                        ))
                    }
                </Select>
                <Select
                    value={searchParams.operator || undefined}
                    style={{ width: 120 }}
                    onChange={(value) => {
                        setSearchParams({
                            ...searchParams,
                            operator: value
                        });
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
                    value={searchParams.keyword || undefined}
                    style={{ width: 200 }}
                    className='search-value'
                    onChange={(e) => {
                        console.log(e.target.value)
                        setSearchParams({
                            ...searchParams,
                            keyword: e.target.value
                        });
                    }}
                    onSearch={startSearch}
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
