import React, { useState, useEffect, useContext, Fragment } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Table, Button, Divider, Popconfirm } from 'antd';
import moment from 'moment';
import ActionContext from '../../ActionContext';
import { getSchema } from '../../util';
import DetailModal from '../components/RowDetailModal';
import EditModal from './Edit';
import './index.less';

export default ({ database, tableName } ) => {
    const excuteActions = useContext(ActionContext);
    const [records, setRecords] = useState([]);
    const [columns, setColumns] = useState([]);
    const [detailItem, setDetailItem] = useState(null);
    const [editItem, setEditItem] = useState(null);

    const query = () => excuteActions.getTriggers(database, tableName).then(data => {
        setRecords(data);
        setColumns([
            ...getSchema(data).map((item, index, arr) => {
                const obj = {
                    title: item.text,
                    dataIndex: item.text,
                    key: item.dataIndex,
                    ellipsis: true,
                    width: 180,
                    render: ((text, record) => {
                        if (item.text === "gmt_create" || item.text === "gmt_modify") {
                            text = moment(text).format("YYYY-MM-DD HH:mm:ss");
                        }

                        return <span>{text}</span>;
                    })
                };

                if (obj.dataIndex === 'Trigger') {
                    obj.fixed = 'left';
                    obj.ellipsis = false;
                }

                return obj;
            }).sort(a => a.dataIndex === 'Trigger' ? -1 : 0),
            {
                title: "操作",
                dataIndex: "action",
                width: 130,
                fixed: "right",
                render: ((text, record) => (
                    <Fragment>
                        <a onClick={() => setDetailItem(record)}>
                            详情
                        </a>
                        <Divider type="vertical" />
                        <a onClick={() => setEditItem(record)}>
                            编辑
                        </a>
                        <Divider type="vertical" />
                        <Popconfirm
                            title="确认删除该触发器吗?"
                            onConfirm={() => onDrop(record)}
                        >
                            <a>删除</a>
                        </Popconfirm>
                    </Fragment>
                    
                ))
            }
        ]);
    });
    const onSave = values => {
        return excuteActions.createTrigger(
            database, tableName, values
        ).then(() => {
            // 更新(先创建再删除之前的trigger)
            if (!editItem.isNew) {
                excuteActions.dropTrigger(
                    database, editItem.Trigger
                ).then(() => query());
            } else {
                query();
            }
        });
    };
    const onDrop = record => {
        excuteActions.dropTrigger(
            database, record.Trigger
        ).then(() => query());
    };

    useEffect(() => {
        query();
    }, [database, tableName]);

    return (
        <div className="triggers-page">
            <div className="triggers-page-toolbar">
                <Button icon={<PlusOutlined />} onClick={() => setEditItem({ isNew: true })}>新建</Button>
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
            />
            <DetailModal
                visible={!!detailItem}
                detailItem={detailItem}
                onCancel={() => setDetailItem(null)}
            />
            <EditModal
                visible={!!editItem}
                record={editItem}
                onCancel={() => setEditItem(null)}
                onOk={onSave}
            />
        </div>
    );
}
