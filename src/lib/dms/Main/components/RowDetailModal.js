import React from 'react';
import { Table, Modal } from 'antd';

export default ({ detailItem, ...modalProps }) => {
    detailItem = detailItem || {};

    const dataSource = Object.keys(detailItem).map(key => ({
        key,
        value: detailItem[key]
    }));

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

    return (
        <Modal
            title="单行详情"
            footer={null}
            width={800}
            destroyOnClose
            className="dms-modal"
            {...modalProps}
        >
            <Table
                className='border-table'
                rowKey="key"
                size='small'
                dataSource={dataSource}
                columns={columns}
                pagination={false}
            />
        </Modal>
    );
};
