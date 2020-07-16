import React, { useState, Fragment } from "react";
import { Button, Icon, Dropdown, Menu, message } from "antd";
import { get } from "lodash";
import sqlFormatter from "sql-formatter";
import AddCollectionModal from './AddCollectionModal';
import ViewCollectionModal from './ViewCollectionModal';
import { safeStorage, isJSON } from "@tntd/utils";
import moment from 'moment';
import { addData } from "../../../indexDb";
import { getSchema, splitSqlBySemicolon } from "../../../util";

const { SubMenu } = Menu;

export default props => {
    const { action, querySqlInfo, setQuerySqlInfo, getSqlHistoryList, sqlCollectionList, sqlEditorRef } = props;
    const { querySqlText } = querySqlInfo;
    const [addCollectionVisible, setAddCollectionVisible] = useState(false);
    const [addCollectionItem, setAddCollectionItem] = useState({
        title: null,
        scope: 'all',
        sql: null
    });

    const dmsInfoStr = safeStorage.getItem('dmsInfo', "{}");
    const dmsInfo = isJSON(dmsInfoStr) ? JSON.parse(dmsInfoStr) : {};

    const [viewCollectionVisible, setViewCollectionVisible] = useState(false);

    const addCollection = () => {
        setAddCollectionVisible(true);
        setAddCollectionItem({
            ...addCollectionItem,
            sql: querySqlText
        });
    }

    const collectionManagement = () => {
        setViewCollectionVisible(true);
    }

    const addSqlToQuery = (sqlText) => {
        let newText = querySqlText;
        if (newText) {
            newText = querySqlText + `\n${sqlText}`;
        } else {
            newText = sqlText;
        }

        localStorage.setItem('querySqlText', newText);
        setQuerySqlInfo({
            ...querySqlInfo,
            querySqlText: newText
        });
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
                {
                    (sqlCollectionList || []).map((item, index) => {
                        return (
                            <Menu.Item
                                key={index}
                                onClick={() => {
                                    addSqlToQuery(item.sql);
                                }}
                            >
                                {item.title}
                            </Menu.Item>
                        )
                    })
                }
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

    const onExecute = () => {
        const { editBox: codeInstance } = sqlEditorRef.current || {};
        const executeSql = codeInstance.doc.getSelection() || querySqlText;

        if (!executeSql || !executeSql.trim()) {
            message.warning('请输入SQL语句');
            return;
        }

        // 设置loading
        setQuerySqlInfo({
            ...querySqlInfo,
            loading: true
        });

        action(executeSql, {
            sqls: splitSqlBySemicolon(executeSql)
        }).then(data => {
            const indexDbParams = {
                database: dmsInfo.selectDatabase,
                sql: executeSql,
                status: 1,
                total: data instanceof Array ? data.length : Object.keys(data).length,
                execute_ts: 50,
                created_ts: moment().format("YYYY-MM-DD HH:mm:ss")
            };

            if (data.error) {
                setQuerySqlInfo({
                    loading: false,
                    querySqlText,
                    schema: [],
                    content: [],
                    resultTab: "message",
                    errorInfo: get(data, "error.original")
                });
                indexDbParams.status = 0;
                indexDbParams.errorInfo = get(data, "error.original");
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
                });
            }
            // 将记录放到indexDB
            addData("sql_history", indexDbParams);
            // 获取所有数据
            getSqlHistoryList();
        }).catch(err => {
            console.log('errr', err);
            setQuerySqlInfo({
                loading: false,
                querySqlText,
                schema: [],
                content: [],
                resultTab: "message",
                errorInfo: null
            });
            addData("sql_history", {
                database: dmsInfo.selectDatabase,
                sql: executeSql,
                status: 0,
                total: 0,
                execute_ts: 50,
                created_ts: moment().format("YYYY-MM-DD HH:mm:ss")
            });
            throw err;
        });
    };

    return (
        <div className="toolbar">
            <Button icon="rocket" onClick={onExecute}>
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
            <ViewCollectionModal
                visible={viewCollectionVisible}
                useSql={(sql) => {
                    addSqlToQuery(sql);
                }}
                onCancel={() => {
                    setViewCollectionVisible(false);
                }}
                afterClose={() => {

                }}
            />
        </div>
    );
}
