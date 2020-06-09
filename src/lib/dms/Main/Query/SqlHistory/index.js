import React, { useEffect, useState, Fragment } from "react";
import { Table, Tooltip, message, Modal } from "antd";
import moment from 'moment';

export default props => {
    const { pageSize, total, currentPage, querySqlInfo, setQuerySqlInfo } = props;
    const { querySqlText } = querySqlInfo;
    const [tableLoading, setTableLoading] = useState(false);

    const dataSource = [
        {
            id: 1,
            database: 'sinan',
            sql: 'select * from user_info',
            status: 1,
            lines: 100,
            executeTs: 50,
            createdTs: 1591582486000
        },
        {
            id: 2,
            database: 'sinan',
            sql: 'select * from book where id=2',
            status: 0,
            lines: 0,
            executeTs: 40,
            createdTs: 1591582489000
        },
    ];

    const columns = [
        {
            title: "执行时间",
            dataIndex: "createdTs",
            key: "执行时间",
            width: 120,
            ellipsis: true,
            render: (text) => {
                return text ? moment(text).fromNow() : "-"
            }
        },
        {
            title: "数据库/schema",
            dataIndex: "database",
            key: "database",
            width: 160
        },
        {
            title: "SQL(点击SQL粘贴至上方)",
            dataIndex: "sql",
            key: "sql",
            render: (text) => {
                return (
                    <Tooltip
                        title='点击添加'
                        placement='left'
                    >
                        <a
                            onClick={() => {
                                let newText = querySqlText;
                                if (newText) {
                                    newText = querySqlText + `\n${text}`;
                                } else {
                                    newText = text;
                                }

                                localStorage.setItem('querySqlText', querySqlInfo.querySqlText);
                                setQuerySqlInfo({
                                    ...querySqlInfo,
                                    querySqlText: newText
                                });
                            }}
                        >
                            {text}
                        </a>
                    </Tooltip>
                )
            }
        },
        {
            title: "状态",
            dataIndex: "status",
            key: "status",
            width: 100,
            render: (text) => {
                return text === 1 ? '成功' : '失败'
            }
        },
        {
            title: "行数",
            dataIndex: "lines",
            width: 100,
            key: "lines"
        },
        {
            title: "耗时(ms)",
            dataIndex: "executeTs",
            key: "executeTs",
            width: 120
        },
        {
            title: "操作",
            key: "action",
            width: 100,
            render: (text, record) => (
                <a>删除</a>
            )
        }
    ];

    return (
        <div className="hook-modal">
            <Table
                className='border-table'
                rowKey="id"
                dataSource={dataSource}
                columns={columns}
                loading={tableLoading}
                size='small'
                pagination={{
                    pageSize,
                    total,
                    current: currentPage,
                    showTotal: total => `共${total}条`,
                    onChange: () => { },
                    onShowSizeChange: () => { },
                    showQuickJumper: true,
                    showSizeChanger: true
                }}
            />
        </div>
    );
};
