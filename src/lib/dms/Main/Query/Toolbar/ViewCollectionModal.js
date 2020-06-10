import React, { useEffect, useState, Fragment } from "react";
import { Input, Table, Divider, Modal } from "antd";

export default props => {
    const { visible, onCancel, afterClose, schema, detailItem } = props;

    let dataSource = [
        {
            id: 1,
            title: 'test',
            sql: 'test',
            scope: 'all',
        },
        {
            id: 2,
            title: '测试的',
            sql: 'SELECT * FROM user_info WHERE uid=666666',
            scope: 'all',
        },
        {
            id: 3,
            title: 'test',
            sql: 'SELECT * FROM user_info WHERE uid=666666',
            scope: 'sinan',
        }
    ];

    const columns = [
        {
            title: "标题",
            dataIndex: "title",
            key: "title",
            width: 140,
            ellipsis: true
        },
        {
            title: "SQL",
            dataIndex: "sql",
            key: "sql",
            ellipsis: true
        },
        {
            title: "使用范围",
            dataIndex: "scope",
            key: "scope",
            width: 100,
            render: (text) => {
                return text === 'all' ? "所有库" : text
            }
        },
        {
            title: "操作",
            width: 160,
            render: (record) => {
                return (
                    <span>
                        <a>使用</a>
                        <Divider type='vitical' />
                        <a>编辑</a>
                        <Divider type='vitical' />
                        <a>删除</a>
                    </span>
                )
            }
        },
    ];
    console.log('schema', schema)

    return (
        <div className="hook-modal">
            <Modal
                title="常用SQL"
                visible={visible}
                onCancel={onCancel}
                afterClose={afterClose}
                footer={null}
                width={850}
                className='dms-modal'
            >
                <Table
                    className='border-table'
                    rowKey="id"
                    size='small'
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                />
            </Modal>
        </div>
    );
};
