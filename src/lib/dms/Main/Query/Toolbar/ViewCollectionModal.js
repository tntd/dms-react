import React, { useEffect, useState, Fragment } from "react";
import { Input, Table, Divider, Modal, message, Popconfirm } from "antd";
import { addData, deleteDataById, getAllData } from "../../../indexDb";

export default props => {
    const { visible, onCancel, afterClose, useSql } = props;
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        if (visible) {
            getAllData('sql_collection', (list) => {
                setDataSource(list);
            });
        }
    }, [visible]);

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
                        <a
                            onClick={() => {
                                useSql(record.sql);
                                onCancel();
                            }}
                        >
                            使用
                        </a>
                        <Divider type='vitical' />
                        <a
                            onClick={() => {
                                message.info("编辑sql");
                            }}
                        >
                            编辑
                        </a>
                        <Divider type='vitical' />
                        <Popconfirm
                            title="确认要删除当前SQl语句吗？"
                            onConfirm={() => {
                                message.info("删除sql action");
                            }}
                            onCancel={() => {
                                console.log('取消删除');
                            }}
                            okText="Yes"
                            cancelText="No"
                            placement="top"
                        >
                            <a>删除</a>
                        </Popconfirm>
                    </span>
                )
            }
        },
    ];

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
