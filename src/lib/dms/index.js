import React, { useEffect, useState, Fragment } from "react";
import Page from "./SimplePage";
import HeaderContent from "./Header";
import SideMenus from "./SideMenus";
import MainContent from "./Main/index";
import { isJSON } from "@tntd/utils";
import { saveToLocal } from "./util";

import "./index.less";

const { Header, Content } = Page;
const { Sider, Main } = Content;


export default props => {
    const { action, title = '罗盘DMS' } = props;
    const [selectDatabase, setSelectDatabase] = useState(null);
    const [selectTable, setSelectTable] = useState(null);
    const [selectNav, setSelectNav] = useState(null);

    const [databaseList, setDatabaseList] = useState([]);
    const [tableList, setTableList] = useState([]);
    const [tableContentList, setTableContentList] = useState([]);
    const [createSql, setCreateSql] = useState([]);
    const [structure, setStructure] = useState([]);

    useEffect(() => {
        init();
        getDatabaseList();
    }, []);


    const init = () => {
        // 这里判断localStorage在缓存中的多种复杂情况
        if (localStorage.hasOwnProperty("dmsInfo")) {
            // 缓存中是否存在currentApp
            let dmsInfoObjStr = localStorage.getItem("dmsInfo");
            if (dmsInfoObjStr && isJSON(dmsInfoObjStr)) {
                // 存在的currentApp是否是标准JSON
                const dmsInfoObj = JSON.parse(dmsInfoObjStr) || {};

                setSelectDatabase(dmsInfoObj.selectDatabase);
                setSelectTable(dmsInfoObj.selectTable);
                setSelectNav(dmsInfoObj.selectNav);

                if (dmsInfoObj.selectDatabase) {
                    action({
                        value: `SHOW TABLES FROM ${dmsInfoObj.selectDatabase}`
                    }).then((res) => {
                        const { content = [] } = res;
                        let newList = content.map((item, index) => {
                            return item["Tables_in_" + dmsInfoObj.selectDatabase];
                        });

                        setTableList(newList)
                    });
                }
                if (dmsInfoObj.selectTable) {
                    // getStructure 获取结构
                    getStructure(dmsInfoObj.selectDatabase, dmsInfoObj.selectTable)

                    // getCreateSql 获取表的创建语句
                    getCreateSql(dmsInfoObj.selectDatabase, dmsInfoObj.selectTable)
                }
            }
        } else {
            localStorage.setItem("dmsInfo", JSON.stringify({
                selectNav: "home"
            }));
        }
    }

    const getStructure = (databaseName, tableName) => {
        action({
            value: `SHOW COLUMNS FROM ${databaseName}.${tableName}`
        }).then((data) => {
            setStructure(data);
        });
    }

    const getCreateSql = (databaseName, tableName) => {
        action({
            value: `SHOW CREATE TABLE ${databaseName}.${tableName}`
        }).then((data) => {
            setCreateSql(data);
        });
    }

    const getDatabaseList = () => {
        action({
            value: "SHOW DATABASES"
        }).then((data) => {
            let newList = data.map((item, index) => {
                return item["Database"];
            });
            setDatabaseList(newList)
        });
    }

    const getTableList = (databaseName) => {

        // 缓存中是否存在currentApp
        saveToLocal("selectDatabase", databaseName);
        setSelectDatabase(databaseName)

        // 获取表数据
        action({
            value: `SHOW TABLES FROM ${databaseName}`
        }).then((data) => {
            let newList = data.map((item, index) => {
                return item["Database"];
            });
            setDatabaseList(newList)
        });
    }

    return (
        <Page className="dms-page">
            <Header>
                <HeaderContent
                    action={action}
                    title={title}
                    selectNav={selectNav}
                    setSelectNav={setSelectNav}
                />
            </Header>
            <Content className="form-editor-wrap">
                <Sider width={220}>
                    <SideMenus
                        action={action}
                        databaseList={databaseList}
                        getTableList={getTableList}
                        tableList={tableList}
                        setTableContentList={setTableContentList}
                        selectDatabase={selectDatabase}
                        selectTable={selectTable}
                        setSelectTable={setSelectTable}
                        getStructure={getStructure}
                        getCreateSql={getCreateSql}
                    />
                </Sider>
                <Main>
                    <MainContent
                        action={action}
                        selectDatabase={selectDatabase}
                        selectTable={selectTable}
                        tableContentList={tableContentList}
                        createSql={createSql}
                        structure={structure}
                        selectNav={selectNav}
                        setSelectNav={setSelectNav}
                    />
                </Main>
            </Content>
        </Page>
    );
};
