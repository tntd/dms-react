import React, { useState, useEffect, useContext } from 'react';
import { Table } from 'antd';
import moment from 'moment';
import ActionContext from '../../ActionContext';
import { getSchema } from '../../util';
import DetailModal from '../components/RowDetailModal';
import './index.less';

export default ({ database, tableName } ) => {
    const excuteActions = useContext(ActionContext);
    const [records, setRecords] = useState([]);
    const [columns, setColumns] = useState([]);
    const [detailItem, setDetailItem] = useState(null);

    useEffect(() => {
        excuteActions.getTableContent(database, tableName).then(data => {
            setRecords(data);
            setColumns([
                ...getSchema(data).map((item, index, arr) => {
                    const isFixed = index === 0 && arr.length > 5;
    
                    return {
                        title: item.text,
                        dataIndex: item.text,
                        key: item.dataIndex,
                        ellipsis: true,
                        fixed: isFixed ? 'left' : null,
                        width: 180,
                        className: isFixed ? 'fixed-left-column' : '',
                        render: text => {
                            if (['gmt_create', 'gmt_modify'].includes(item.text)) {
                                return moment(text).format('YYYY-MM-DD HH:mm:ss');
                            }
    
                            return  text;
                        }
                    };
                }),
                {
                    title: "操作",
                    dataIndex: "action",
                    width: 80,
                    fixed: "right",
                    render: ((text, record) => (
                        <a onClick={() => setDetailItem(record)}>
                            查看详情
                        </a>
                    ))
                }
            ]);
        });
    }, [database, tableName]);

    return (
        <div className="content-page">
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
