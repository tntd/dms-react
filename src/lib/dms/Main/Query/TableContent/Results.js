import React from 'react';
import { Table, Tabs } from 'antd';
import moment from 'moment';
import { getSchema } from "../../../util";

const { TabPane } = Tabs;

export default ({ data, setDetailModalVisible, setDetailItem }) => {
    data = data instanceof Array ? [ data ] : Object.entries(data).map(
        ([key, value]) => ({
            key,
            value
        })
    );

    const ResultItem = ({ value }) => {
        if (value instanceof Array) {
            // 获取schema
            const schema = getSchema(value);
            const columns = schema.map((item, index, arr) => ({
                title: item.text,
                dataIndex: item.text,
                key: item.dataIndex,
                ellipsis: true,
                fixed: index === 0 && arr.length > 5 ? 'left' : '',
                width: 180,
                render: (text, record) => {
                    if (['gmt_create', 'gmt_modify'].includes(item.text)) {
                        text = moment(text).format("YYYY-MM-DD HH:mm:ss");
                    }
        
                    return text;
                }
            }));

            if (columns.length) {
                columns.push({
                    title: "操作",
                    dataIndex: "action ",
                    width: 80,
                    fixed: "right",
                    render: ((text, record) => (
                        <span>
                            <a
                                onClick={() => {
                                    setDetailModalVisible(true);
                                    setDetailItem(record);
                                }}
                            >
                                查看详情
                            </a>
                        </span>
                    ))
                })
            };

            return (
                <Table
                    dataSource={value}
                    columns={columns}
                    size="small"
                    scroll={{
                        x: schema.length * 180 + 120
                    }}
                    pagination={{
                        pageSize: 50
                    }}
                    rowKey="dataIndex"
                />
            );
        }

        return (
            <pre>
                {
                    value instanceof Object ? JSON.stringify(value, null, 4) : value
                }
            </pre>
        );
    };

    if (data.length === 1) {
        return <ResultItem value={data[0]} />;
    }

    return (
        <Tabs defaultActiveKey={data[0].key} size="small">
            {
                data.map(({ key, value }) => (
                    <TabPane tab={key} key={key}>
                        <ResultItem value={value} />
                    </TabPane>
                ))
            }
        </Tabs>
    );
};
