import React, { useRef } from 'react';
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
const EditForm = ({ form, values, ...props }) => {
    const { getFieldDecorator } = form;
    const { Trigger, Timing, Event, Statement } = values || {};
    const SelectList = ({ options, ...rest }) => (
        <Select {...rest}>
            {
                options.map(option => (
                    <Option value={option} key={option}>{option}</Option>
                ))
            }
        </Select>
    );

    return (
        <Form {...formItemLayout} {...props} >
            <FormItem
                label="名称"
                name="Trigger"
                getFieldDecorator={getFieldDecorator}
            >
                {
                    getFieldDecorator('Trigger', {
                        initialValue: Trigger,
                        rules: [{ required: true }]
                    })(
                        <Input
                            placeholder="请输入触发器名称"
                        />
                    )
                }
            </FormItem>
            <FormItem
                label="执行时机"
                name="Timing"
            >
                {
                    getFieldDecorator('Timing', {
                        initialValue: Timing,
                        rules: [{ required: true }]
                    })(
                        <SelectList
                            placeholder="执行时机"
                            options={TimingList}
                        />
                    )
                }
            </FormItem>
            <FormItem
                label="事件"
                name="Event"
            >
                {
                    getFieldDecorator('Event', {
                        initialValue: Event,
                        rules: [{ required: true }]
                    })(
                        <SelectList
                            placeholder="事件"
                            options={EventList}
                        />
                    )
                }
            </FormItem>
            <FormItem
                label="执行sql"
                name="Statement"
            >
                {
                    getFieldDecorator('Statement', {
                        initialValue: Statement,
                        rules: [{ required: true }]
                    })(
                        <CodeField
                            placeholder="执行sql"
                        />
                    )
                }
            </FormItem>
        </Form>
    );
};
const WrappedEditForm = Form.create()(EditForm);

export default ({ visible, record, ...props }) => {
    record = record || {};
    const formRef = useRef(null);
    const onOk = () => {
        const form = formRef.current.getForm();

        form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                props.onOk(values).then(() => {
                    props.onCancel();
                });
            }
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
            <WrappedEditForm
                ref={formRef}
                values={record}
            />
        </Modal>
    );
};
