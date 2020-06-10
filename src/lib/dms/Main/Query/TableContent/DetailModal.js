import React, { useEffect, useState, Fragment } from "react";
import { Input, Table, message, Modal } from "antd";

export default props => {
    const { visible, onCancel, afterClose, schema, detailItem } = props;

    let dataSource = [];
    (schema || []).forEach(element => {
        dataSource.push({
            key: element.text,
            value: detailItem[element.text]
        })
    });

    const columns = [
        {
            title: "字段名",
            dataIndex: "key",
            key: "key",
            width: 200,
            ellipsis: true
        },
        {
            title: "值",
            dataIndex: "value",
            key: "value",
            ellipsis: true
        },
    ];
    console.log('schema', schema)

    return (
        <div className="hook-modal">
            <Modal
                title="单行详情"
                visible={visible}
                onCancel={onCancel}
                afterClose={afterClose}
                footer={null}
                width={800}
                className='dms-modal'
            >
                <Table
                    className='border-table'
                    rowKey="key"
                    size='small'
                    dataSource={dataSource}
                    columns={columns}
                    scroll={{ x: 1900 }}
                    pagination={false}
                />
            </Modal>
        </div>
    );
};
