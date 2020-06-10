import React, { useEffect, useState, Fragment } from "react";
import { Input, Radio, message, Modal, Form } from "antd";
import { safeStorage, isJSON } from "@tntd/utils";

const FormItem = Form.Item;
const TextArea = Input.TextArea;

const formItemLayout = {
    labelCol: {
        span: 5
    },
    wrapperCol: {
        span: 17
    }
};

const AddCollectionModal = props => {
    const { visible, onCancel, afterClose, collectionItem, setAddCollectionItem, form } = props;
    const { title, scope, sql } = collectionItem;
    const { getFieldDecorator } = form;

    useEffect(() => {
        form.setFieldsValue({
            title, scope, sql
        });
    }, [title, scope, sql]);

    const onOk = () => {
        form.validateFields((err, values) => {
            const dmsInfoStr = safeStorage.getItem('dmsInfo', "{}");
            const dmsInfo = isJSON(dmsInfoStr) ? JSON.parse(dmsInfoStr) : {};
            console.log(dmsInfo);
            if (!err && dmsInfo.selectDatabase) {
                const params = {
                    title: values.title,
                    scope: values.scope,
                    sql: values.sql
                };
                if (values.scope !== 'all') {
                    params.scope = dmsInfo.selectDatabase;
                }
                console.log('params', params);
            }
        });
    }

    return (
        <Modal
            title="添加我的 SQL"
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
            afterClose={afterClose}
            width={650}
            className='dms-modal'
        >
            <Form.Item
                {...formItemLayout}
                label="标题"
            >
                {
                    getFieldDecorator('title', {
                        rules: [
                            {
                                required: true,
                                message: '请输入标题',
                            },
                        ],
                    })(
                        <Input placeholder="请输入标题" />
                    )
                }
            </Form.Item>
            <Form.Item
                {...formItemLayout}
                label="适用范围"
            >
                {
                    getFieldDecorator('scope', { initialValue: 'all' })(
                        <Radio.Group>
                            <Radio value="all">所有库</Radio>
                            <Radio value="current">当前库</Radio>
                        </Radio.Group>
                    )
                }
            </Form.Item>
            <Form.Item
                {...formItemLayout}
                label="SQL"
            >
                {
                    getFieldDecorator('sql', {
                        rules: [
                            {
                                required: true,
                                message: '请输入SQL语句！',
                            },
                        ],
                    })(
                        <TextArea
                            placeholder="请输入SQL语句！"
                            autoSize={{
                                minRows: 4,
                                maxRows: 8
                            }}
                        />
                    )
                }
            </Form.Item>
        </Modal>
    );
};

export default Form.create()(AddCollectionModal);
