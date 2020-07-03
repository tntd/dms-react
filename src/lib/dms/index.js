import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sider from './Sider';
import Main from './Main';
import { saveToLocal, getStorageItem, setStorageItem } from './util';
import './indexDb';
import ActionContext from './ActionContext';
import getExcuteActions from './excuteActions';
import './index.less';

export default props => {
    const { action, title = '罗盘DMS', renderHome } = props;
    const dmsInfo = getStorageItem('dmsInfo');
    const [selectDatabase, setSelectDatabase] = useState(dmsInfo.selectDatabase);
    const [selectTable, setSelectTable] = useState(dmsInfo.selectTable);
    const [selectNav, setSelectNav] = useState(dmsInfo.selectNav);
    const [tables, setTables] = useState([]);
    const [columns, setColumns] = useState([]);
    const excuteActions = getExcuteActions(action);

    const onDatabaseChange = database => {
        saveToLocal('selectDatabase', database);
        setSelectDatabase(database);
    };
    const onTableChange = tableName => {
        saveToLocal('selectTable', tableName);
        setSelectTable(tableName);
    };

    useEffect(() => {
        if (selectDatabase) {
            excuteActions.getTablesByDatabase(selectDatabase).then(
                tables => setTables(tables)
            );
        }
    }, [selectDatabase]);

    useEffect(() => {
        excuteActions.getTableColumns(selectDatabase, selectTable).then(
            columns => setColumns(columns)
        );
    }, [selectTable]);

    return (
        <ActionContext.Provider value={excuteActions}>
            <div className="dms-page">
                <Header
                    action={action}
                    title={title}
                    selectNav={selectNav}
                    setSelectNav={setSelectNav}
                />
                <div className="dms-page-body form-editor-wrap">
                    <Sider
                        database={selectDatabase}
                        tableName={selectTable}
                        tables={tables}
                        onDatabaseChange={onDatabaseChange}
                        onTableChange={onTableChange}
                    />
                    <Main
                        action={action}
                        selectNav={selectNav}
                        selectDatabase={selectDatabase}
                        selectTable={selectTable}
                        setSelectNav={setSelectNav}
                        tables={tables}
                        columns={columns}
                        renderHome={renderHome}
                    />
                </div>
            </div>
        </ActionContext.Provider>
    );
};
