import { PureComponent } from "react";
import { connect } from "dva";
import { Button, Select, Icon, Dropdown, Menu, message } from "antd";
import { trim, get } from "lodash";

const { Option } = Select;

export default props => {
    const { store, dispatch } = props;
    const { querySqlInfo, querySqlInfo: { querySqlText } } = store;

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
                    querySqlInfo["loading"] = true;
                    dispatch({
                        type: "dms/updateState",
                        payload: {
                            querySqlInfo
                        }
                    });
                    // loading
                    dispatch({
                        type: "dms/executeSql",
                        payload: {
                            value: querySqlText
                        }
                    }).then((data) => {
                        if (data.error) {
                            dispatch({
                                type: "dms/updateState",
                                payload: {
                                    querySqlInfo: {
                                        loading: false,
                                        querySqlText,
                                        schema: [],
                                        content: [],
                                        resultTab: "message",
                                        errorInfo: get(data, "error.original")
                                    }
                                }
                            });
                        } else {
                            const { schema = [], content = [] } = data;
                            dispatch({
                                type: "dms/updateState",
                                payload: {
                                    querySqlInfo: {
                                        querySqlText,
                                        loading: false,
                                        schema,
                                        content,
                                        resultTab: "result",
                                        errorInfo: null
                                    }
                                }
                            });
                        }
                    }).catch((res) => {
                        dispatch({
                            type: "dms/updateState",
                            payload: {
                                querySqlInfo: {
                                    loading: false,
                                    querySqlText,
                                    schema: [],
                                    content: [],
                                    resultTab: "message",
                                    errorInfo: null
                                }
                            }
                        });
                    });
                }}
            >
                运行
				</Button>
            <Button
                icon="interaction"
            >
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
