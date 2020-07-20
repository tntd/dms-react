import React from 'react';
import { Modal, Form, Input, Select } from 'antd';
import CodeField from '../components/CodeMirror';
import { TimingList, EventList } from './constant';

const FormItem = Form.Item;
const { Option } = Select;

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 }
    }
};
const SelectList = ({ options, ...rest }) => (
    <Select {...rest}>
        {
            options.map(option => (
                <Option value={option} key={option}>{option}</Option>
            ))
        }
    </Select>
);

export default ({ visible, record, ...props }) => {
    record = record || {};
    const { Trigger, Timing, Event, Statement } = record || {};
    const [form] = Form.useForm();
    const onOk = () => {
        form.validateFields().then(values => {
            props.onOk(values).then(() => {
                props.onCancel();
            });
        });
    };

    return (
        <Modal
            className="dms-modal"
            title={record.isNew ? '新建' : '编辑'}
            visible={visible}
            destroyOnClose
            {...props}
            onOk={onOk}
        >
            <Form
                {...formItemLayout}
                form={form}
                initialValues={{
                    Trigger, Timing, Event, Statement
                }}
            >
                <FormItem
                    required
                    label="名称"
                    name="Trigger"
                    rules={[{ required: true }]}
                >
                    <Input placeholder="请输入触发器名称" />
                </FormItem>
                <FormItem
                    required
                    label="执行时机"
                    name="Timing"
                    rules={[{ required: true }]}
                >
                    <SelectList
                        placeholder="执行时机"
                        options={TimingList}
                    />
                </FormItem>
                <FormItem
                    required
                    label="事件"
                    name="Event"
                    rules={[{ required: true }]}
                >
                    <SelectList
                        placeholder="事件"
                        options={EventList}
                    />
                </FormItem>
                <FormItem
                    required
                    label="执行sql"
                    name="Statement"
                    rules={[{ required: true }]}
                >
                    <CodeField placeholder="执行sql" />
                </FormItem>
            </Form>
        </Modal>
    );
};
