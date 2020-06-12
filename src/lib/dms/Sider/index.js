import React, { useState, useEffect, useContext } from 'react';
import { Select } from 'antd';
import cn from 'classnames';
import ActionContext from '../ActionContext';
import './index.less';

const { Option } = Select;
const prefixCls = 'dms-page-sider'

export default props => {
    const {
        database,
        tableName,
        onDatabaseChange,
        onTableChange,
    } = props;
    const [databases, setDatabases] = useState([]);
    const [tables, setTables] = useState([]);
    const exucteActions = useContext(ActionContext);

    useEffect(() => {
        exucteActions.getDatabaseList().then(databases => {
            setDatabases(databases);
        });
    }, []);

    useEffect(() => {
        if (database) {
            exucteActions.getTablesByDatabase(database).then(
                data => setTables(data)
            );
        }
    }, [database]);

    return (
        <div className={prefixCls}>
            <div className={`${prefixCls}-header`}>
                <Select
                    style={{ width: "100%" }}
                    value={database}
                    placeholder="请选择数据库"
                    showSearch
                    onChange={onDatabaseChange}
                >
                    {
                        databases.map(name => (
                            <Option
                                value={name}
                                key={name}
                            >
                                {name}
                            </Option>
                        ))
                    }
                </Select>
            </div>
            <div className={`${prefixCls}-body`}>
                <ul className="table-list">
                    {
                        tables.map(name => (
                            <li
                                key={name}
                                onClick={() => onTableChange(name)}
                                className={cn({ active: tableName === name })}
                            >
                                <i></i>{name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
