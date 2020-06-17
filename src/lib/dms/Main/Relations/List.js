import React from 'react';
import { Table } from 'antd';
import { getSchema } from '../../util';

export default ({ relations }) => (
    <Table
        size="small"
        columns={
            getSchema(relations).map(item => ({
                title: item.text,
                dataIndex: item.dataIndex
            }))
        }
        dataSource={relations}
    />
);
