const formatName = name => ('`' + name + '`');

export const getDatabaseList = action => {
    return action('SHOW DATABASES').then(data => (data || []).map(item => item.Database));
};

export const getTablesByDatabase = (action, database) => {
    return action(`SHOW TABLES FROM ${formatName(database)}`).then(data => (data || []).map(item => item['Tables_in_' + database]));
};

export const getTableColumns = (action, database, tableName) => {
    return action(`SHOW COLUMNS FROM ${formatName(database)}.${formatName(tableName)}`);
};

export const getTableStatus = (action, database, tableName) => {
    return action(`SHOW TABLE STATUS FROM ${formatName(database)} LIKE "${tableName}"`).then(data => data && data[0]);
};

export const getCreateSql = (action, database, tableName) => {
    return action(`SHOW CREATE TABLE ${formatName(database)}.${formatName(tableName)}`).then(data => data && data[0]['Create Table']);
};

export const getTableContent = (action, database, tableName) => {
    return action(`select * from ${formatName(database)}.${formatName(tableName)} limit 499`).then(data => data || []);
};

export const getColumnsByDatabase = (action, database) => {
    return action(`select table_name, COLUMN_NAME from information_schema.COLUMNS where TABLE_SCHEMA = '${database}'`);
};

export const getTriggers = (action, database, tableName) => {
    return action(`show triggers from ${formatName(database)}${tableName ? (' where `Table` = ' + tableName) : ''}`);
};

export const createTrigger = (action, database, tableName, { Trigger, Timing, Event, Statement}) => {
    return action(`
        CREATE TRIGGER ${Trigger} ${Timing} ${Event}
        ON ${'`' + database + '`'}.${tableName}
        FOR EACH ROW
        BEGIN
            ${Statement}
        END;
    `);
};

export const dropTrigger = (action, database, triggerName) => {
    return action(`DROP TRIGGER IF EXISTS ${formatName(database)}.${formatName(triggerName)}`);
};

export default action => ({
    getDatabaseList: getDatabaseList.bind(null, action),
    getTablesByDatabase: getTablesByDatabase.bind(null, action),
    getTableColumns: getTableColumns.bind(null, action),
    getTableStatus: getTableStatus.bind(null, action),
    getCreateSql: getCreateSql.bind(null, action),
    getTableContent: getTableContent.bind(null, action),
    getColumnsByDatabase: getColumnsByDatabase.bind(null, action),
    getTriggers: getTriggers.bind(null, action),
    createTrigger: createTrigger.bind(null, action),
    dropTrigger: dropTrigger.bind(null, action)
});
