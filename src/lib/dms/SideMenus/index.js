import { useState } from "react";
import { Select } from "antd";
import { saveToLocal } from "../util";
import "./index.less";

const { Option } = Select;

export default props => {
    const { databaseList, tableList, getTableList, selectDatabase, tableContentList, setTableContentList, selectTable, setSelectTable, getStructure, getCreateSql, action } = props;

    getTableContent = () => {
        const { dispatch, store } = this.props;
        const { selectDatabase, selectTable } = store;

        action({
            value: `select * from ${selectDatabase}.${selectTable} limit 499`
        }).then((data) => {
            setTableContentList(data || [])
        });
    }

    return (
        <div className="dms-aside">
            <div className="aside-header">
                <Select
                    style={{ width: "100%" }}
                    value={selectDatabase || undefined}
                    placeholder="请选择数据库"
                    onChange={(value) => {
                        getTableList(value);
                    }}
                >
                    {
                        databaseList.map((name, index) => {
                            return (
                                <Option
                                    value={name}
                                    key={index}
                                >
                                    {name}
                                </Option>
                            );
                        })
                    }
                </Select>

            </div>
            <div className="aside-body">
                <ul className="table-list">
                    {
                        tableList.map((name, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={async () => {
                                        // 缓存中是否存在currentApp
                                        saveToLocal("selectTable", name);

                                        setSelectTable(name);
                                        await getStructure(selectDatabase, name);
                                        await getCreateSql(selectDatabase, name);
                                        await this.getTableContent();
                                    }}
                                    className={selectTable === name ? "active" : ""}
                                >
                                    <i></i>{name}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}
