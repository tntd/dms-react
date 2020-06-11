import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sider from './Sider';
import Main from './Main';
import { saveToLocal, getStorageItem, setStorageItem } from './util';
import { initIDB } from "./indexDb";
import ActionContext from './ActionContext';
import excuteActions from './excuteActions';
import './index.less';

export default props => {
    const { action, title = '罗盘DMS' } = props;
    const [selectDatabase, setSelectDatabase] = useState(null);
    const [selectTable, setSelectTable] = useState(null);
    const [selectNav, setSelectNav] = useState(null);

    useEffect(() => {
        const dmsInfo = getStorageItem('dmsInfo');

        if (dmsInfo) {
            const { selectDatabase, selectTable, selectNav } = dmsInfo;

            setSelectDatabase(selectDatabase);
            setSelectTable(selectTable);
            setSelectNav(selectNav);
        } else {
            setStorageItem(
                'dmsInfo',
                { selectNav: 'home' }
            );
        }
    }, []);

    const onDatabaseChange = database => {
        saveToLocal('selectDatabase', database);
        setSelectDatabase(database);
    };
    const onTableChange = tableName => {
        saveToLocal('selectTable', tableName);
        setSelectTable(tableName);
    };

    return (
        <ActionContext.Provider value={excuteActions(action)}>
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
                        onDatabaseChange={onDatabaseChange}
                        onTableChange={onTableChange}
                    />
                    <Main
                        action={action}
                        selectNav={selectNav}
                        setSelectNav={setSelectNav}
                    />
                </div>
            </div>
        </ActionContext.Provider>
    );
};
