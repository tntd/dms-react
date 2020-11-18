import React, { useState, useEffect, useContext, Fragment } from 'react';
import { Table, Select, Input } from 'antd';
import moment from 'moment';
import ActionContext from '../../ActionContext';
import DetailModal from '../components/RowDetailModal';
import { operatorMap, sqlTypeMap } from './constant';
import './index.less';

const { Search } = Input;
const { Option } = Select;

export default props => {
    const { action, database, tableName, columns: sqlColumns } = props;
    const excuteActions = useContext(ActionContext);
    const [records, setRecords] = useState([]);
    const [columns, setColumns] = useState([]);
    const [detailItem, setDetailItem] = useState(null);
    const [searchParams, setSearchParams] = useState({
        field: null,
        fieldType: 'VARCHAR',
        operator: '=',
        keyword: '',
        keyword2: '' // between时两个参数
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
        const baseSql = `select * from ${'`' + database + '`'}.${tableName}`;
        const { field, keyword, keyword2 } = searchParams;
        // 根据operator组装
        const operatorSqlMap = {
            '=': `${field} = '${keyword}'`,
            '!=': `${field} != '${keyword}'`,
            '>': `${field} > '${keyword}'`,
            '>=': `${field} >= '${keyword}'`,
            '<': `${field} < '${keyword}'`,
            '<=': `${field} <= '${keyword}'`,
            // 'contains': `contains(${field},'${keyword}')`,
            'contains': `${field} like '%${keyword}%'`,
            // 'not contain': `charindex(${field},'${keyword}')=0`,
            'not contain': `${field} not like '%${keyword}%'`,
            'start with': `${field} like '${keyword}%'`,
            'start not with': `${field} not like '${keyword}%'`,
            'end with': `${field} like '%${keyword}'`,
            'end not with': `${field} not like '%${keyword}'`,
            'is null': `${field} is null`,
            'is not null': `${field} is not null`,
            'between': `${field} between '${keyword}' and '${keyword2}'`,
            'in list': `${field} in (${keyword.split(',').map(item => `'${item}'`).join(',')})`,
            'not in list': `${field} not in (${keyword.split(',').map(item => `'${item}'`).join(',')})`,
            'is before': `${field} < '${keyword}'`,
            'is befter or equal to': `${field} <= '${keyword}'`,
            'is after': `${field} > '${keyword}'`,
            'is after or equal to': `${field} >= '${keyword}'`
        };
        const getWhereSql = ({ field, operator, keyword, keyword2 }) => {
            if (!field) {
                // message.warning('请选择列');
                return '';
            }
    
            if (!keyword || (operator === 'between' && !keyword2)) {
                // message.warning('请输入搜索项');
                return '';
            }

            return `where ${operatorSqlMap[operator]}`;
        };

        action(
            `${baseSql} ${getWhereSql(searchParams)}`
        ).then(data => setRecords(data));
    };

    const currentFieldType = searchParams.fieldType ? searchParams.fieldType.toUpperCase() : 'VARCHAR';

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
                        (operatorMap[sqlTypeMap[currentFieldType]] || []).map(
                            ({ label, value }) => (
                                <Option value={value} key={value}>
                                    {label}
                                </Option>
                            )
                        )
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
                {
                    searchParams.operator === 'between' && (
                        <Fragment>
                            <span>AND</span>
                            <Search
                                placeholder="请输入搜索值..."
                                value={searchParams.keyword2}
                                style={{ width: 200 }}
                                className='search-value'
                                onChange={e => {
                                    setSearchParams({
                                        ...searchParams,
                                        keyword2: e.target.value
                                    });
                                }}
                                onSearch={startSearch}
                            />
                        </Fragment>
                    )
                }
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
