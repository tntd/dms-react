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
        tables,
        onDatabaseChange,
        onTableChange,
    } = props;
    const [databases, setDatabases] = useState([]);
    const exucteActions = useContext(ActionContext);

    useEffect(() => {
        exucteActions.getDatabaseList().then(databases => {
            setDatabases(databases);

            if (!database && (databases && databases[0])) {
                onDatabaseChange(databases[0]);
            }
        });
    }, []);

    useEffect(() => {
        if (tables && tables.length && !tables.includes(tableName)) {
            onTableChange(tables[0]);
        }
    }, [tables]);

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
                                title={name}
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
