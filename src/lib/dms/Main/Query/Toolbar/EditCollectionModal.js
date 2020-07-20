import React, { useEffect } from 'react';
import { Form, Input, Radio, message, Modal } from 'antd';
import { getStorageItem } from '../../../util';
import { addData } from '../../../indexDb';

const TextArea = Input.TextArea;

const formItemLayout = {
    labelCol: {
        span: 5
    },
    wrapperCol: {
        span: 17
    }
};

export default props => {
    const { visible, onCancel, collectionItem } = props;
    const { title, scope = 'all', sql } = collectionItem || {};
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({
            title, scope, sql
        });
    }, [title, scope, sql]);

    const onOk = () => {
        form.validateFields().then(values => {
            const dmsInfo = getStorageItem('dmsInfo', {});

            if (dmsInfo.selectDatabase) {
                const params = {
                    title: values.title,
                    scope: values.scope,
                    sql: values.sql
                };

                if (values.scope !== 'all') {
                    params.scope = dmsInfo.selectDatabase;
                }

                // 将记录放到indexDB
                addData('sql_collection', params, (success) => {
                    if (success) {
                        message.success('添加成功');
                        props.onOk && props.onOk();
                        onCancel();
                    }
                });
            }
        });
    }

    return (
        <Modal
            title="添加我的 SQL"
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
            destroyOnClose
            width={650}
        >
            <Form
                {...formItemLayout}
                form={form}
                initialValues={{
                    title,
                    scope,
                    sql
                }}
            >
                <Form.Item
                    name="title"
                    label="标题"
                    rules={[ { required: true } ]}
                >
                    <Input placeholder="请输入标题" />
                </Form.Item>
                <Form.Item
                    name="scope"
                    label="适用范围"
                    rules={[ { required: true } ]}
                >
                    <Radio.Group>
                        <Radio value="all">所有库</Radio>
                        <Radio value="current">当前库</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    name="sql"
                    label="SQL"
                    rules={[ { required: true } ]}
                >
                    <TextArea
                        placeholder="请输入SQL语句！"
                        autoSize={{
                            minRows: 4,
                            maxRows: 8
                        }}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};
