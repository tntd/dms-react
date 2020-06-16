import React, { useEffect, useState, Fragment } from "react";
import { Input, Table, Divider, Modal } from "antd";
import { addData, getAllData } from "../../../indexDb";

export default props => {
    const { visible, onCancel, afterClose, schema, useSql } = props;
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
                        <a>编辑</a>
                        <Divider type='vitical' />
                        <a>删除</a>
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
