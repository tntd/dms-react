import React from 'react';
import { Table } from 'antd';
import './index.less';

export default props => {
    const { columns: dataSource } = props;
    const columns = [
        {
            title: '列名',
            dataIndex: 'Field',
            key: 'Field'
        },
        {
            title: '类型',
            dataIndex: 'Type',
            key: 'Type',
            width: 60,
        },
        {
            title: '长度',
            dataIndex: 'MaxLength',
            width: 60,
            key: 'MaxLength'
        },
        {
            title: '可空',
            dataIndex: 'Null',
            width: 60,
            key: 'Null'
        },
        {
            title: '主键',
            dataIndex: 'Key',
            width: 60,
            key: 'Key',
        },
        {
            title: '备注',
            dataIndex: 'Comment',
            key: 'Comment',
            width: 240,
            ellipsis: true
        },
        {
            title: 'Extra',
            dataIndex: 'Extra',
            key: 'Extra',
            width: 160,
            ellipsis: true
        }
    ];

    return (
        <div className="structure-page">
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                rowKey="Field"
                size="small"
            />
        </div>
    );
}
