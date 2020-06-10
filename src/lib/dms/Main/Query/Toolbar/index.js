import React, { useState, Fragment } from "react";
import { Button, Icon, Dropdown, Menu, message } from "antd";
import { trim, get } from "lodash";
import sqlFormatter from "sql-formatter";
import AddCollectionModal from './AddCollectionModal';
import { getSchema } from "../../../util";

const { SubMenu } = Menu;

export default props => {
    const { action, querySqlInfo, setQuerySqlInfo } = props;
    const { querySqlText } = querySqlInfo;
    const [addCollectionVisible, setAddCollectionVisible] = useState(false);
    const [addCollectionItem, setAddCollectionItem] = useState({
        title: null,
        scope: 'all',
        sql: null
    });


    const addCollection = () => {
        setAddCollectionVisible(true);
        setAddCollectionItem({
            ...addCollectionItem,
            sql: querySqlText
        })
    }

    const collectionManagement = () => {
        message.info("管理自定义列表");
    }

    const menu = (
        <Menu>
            <SubMenu
                popupClassName='dms-dropdown-submenu'
                title={
                    <Fragment>
                        <Icon type="star" />
				        选择
                    </Fragment>
                }
            >
                <Menu.Item>SQL语句1</Menu.Item>
                <Menu.Item>SQL语句2</Menu.Item>
            </SubMenu>
            <Menu.Item
                key="add"
                onClick={addCollection}
            >
                <Icon type="plus-square" />
				添加
			</Menu.Item>
            <Menu.Item
                key="manage"
                onClick={collectionManagement}
            >
                <Icon type="build" />
				管理
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
            <Button
                icon="interaction"
                onClick={() => {
                    const formatValue = sqlFormatter.format(querySqlText, {
                        language: "sql",
                    });

                    setQuerySqlInfo({
                        ...querySqlInfo,
                        querySqlText: formatValue
                    });
                }}
            >
                格式化
			</Button>
            <Dropdown
                overlay={menu}
                overlayClassName="dms-dropdown"
            >
                <Button>
                    我的SQL <Icon type="down" />
                </Button>
            </Dropdown>
            <AddCollectionModal
                visible={addCollectionVisible}
                collectionItem={addCollectionItem}
                setAddCollectionItem={setAddCollectionItem}
                onCancel={() => {
                    setAddCollectionVisible(false)
                }}
                afterClose={() => {
                    setAddCollectionItem({
                        title: null,
                        scope: 'all',
                        sql: null
                    })
                }}
            />
        </div>
    );
}
