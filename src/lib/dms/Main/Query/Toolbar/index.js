import React from "react";
import { Button, Icon, Dropdown, Menu, message } from "antd";
import { trim, get } from "lodash";
import { getSchema } from "../../../util";

export default props => {
    const { action, querySqlInfo, setQuerySqlInfo } = props;
    const { querySqlText } = querySqlInfo;

    const menu = (
        <Menu>
            <Menu.Item key="add">
                <Icon type="code" />
					添加我的SQL
			  </Menu.Item>
            <Menu.Item key="manage">
                <Icon type="code" />
					管理我的SQL
			  </Menu.Item>
        </Menu>
    );

    return (
        <div className="toolbar">
            <Button
                icon="rocket"
                onClick={() => {
                    if (!querySqlText || !(querySqlText && trim(querySqlText))) {
                        message.warning("请输入SQL语句");
                        return;
                    }

                    // 设置loading
                    setQuerySqlInfo({
                        ...querySqlInfo,
                        loading: true
                    })

                    action({
                        value: querySqlText
                    }).then((data) => {
                        if (data.error) {
                            setQuerySqlInfo({
                                loading: false,
                                querySqlText,
                                schema: [],
                                content: [],
                                resultTab: "message",
                                errorInfo: get(data, "error.original")
                            })
                        } else {
                            // 获取schema
                            const schema = getSchema(data);

                            setQuerySqlInfo({
                                querySqlText,
                                loading: false,
                                schema,
                                content: data,
                                resultTab: "result",
                                errorInfo: null
                            })
                        }
                    }).catch((res) => {
                        setQuerySqlInfo({
                            loading: false,
                            querySqlText,
                            schema: [],
                            content: [],
                            resultTab: "message",
                            errorInfo: null
                        })
                    });
                }}
            >
                运行
			</Button>
            <Button icon="interaction">
                格式化
			</Button>
            <Dropdown overlay={menu}>
                <Button>
                    我的SQL <Icon type="down" />
                </Button>
            </Dropdown>
        </div>
    );
}
