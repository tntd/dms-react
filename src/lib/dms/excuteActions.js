const formatName = name => ('`' + name + '`');
const addQuote = name => `'${name}'`;

export const getDatabaseList = action => {
    return action('SHOW DATABASES').then(data => (data || []).map(item => item.Database));
};

export const getTablesByDatabase = (action, database) => {
    return action(`SHOW TABLES FROM ${formatName(database)}`).then(data => (data || []).map(item => item['Tables_in_' + database]));
};

export const getTableColumns = (action, database, tableName) => {
    return action(`select COLUMN_NAME as 'Field', DATA_TYPE as 'Type', CHARACTER_MAXIMUM_LENGTH as 'MaxLength', IS_NULLABLE as 'Null', COLUMN_KEY as 'Key', COLUMN_DEFAULT as 'Default', COLUMN_COMMENT as 'Comment', Extra from information_schema.COLUMNS where information_schema.COLUMNS.TABLE_SCHEMA = ${addQuote(database)} and information_schema.COLUMNS.TABLE_NAME = ${addQuote(tableName)}`);
    // return action(`SHOW COLUMNS FROM ${formatName(database)}.${formatName(tableName)}`);
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

export const getColumnsGroupByTable = (action, database) => {
    return action(`select TABLE_NAME as 'tablename', COLUMN_NAME as 'field', DATA_TYPE as 'type', CHARACTER_MAXIMUM_LENGTH as 'maxlength', IS_NULLABLE as 'null', COLUMN_KEY as 'key', COLUMN_DEFAULT as 'default', COLUMN_COMMENT as 'comment', Extra as 'extra'
        from information_schema.COLUMNS
        where information_schema.COLUMNS.TABLE_SCHEMA = ${addQuote(database)}
    `).then(
        columns => (columns || []).reduce((acc, columnInfo) => {
            acc[columnInfo.tablename] = acc[columnInfo.tablename] || []; 
            acc[columnInfo.tablename].push(columnInfo);

            return acc;
        }, {})
    );
};

export const getTriggers = (action, database, tableName) => {
    return action(`show triggers from ${formatName(database)}${tableName ? (' where `Table` = "' + tableName + '"') : ''}`);
};

export const createTrigger = (action, database, tableName, { Trigger, Timing, Event, Statement}) => {
    return action(`
        CREATE TRIGGER ${Trigger} ${Timing} ${Event}
        ON ${'`' + database + '`'}.${tableName}
        FOR EACH ROW
        ${Statement}
    `);
};

export const dropTrigger = (action, database, triggerName) => {
    return action(`DROP TRIGGER IF EXISTS ${formatName(database)}.${formatName(triggerName)}`);
};

export const getEntityRelations = (action, database, tableName) => {
    return action(`
        SELECT TABLE_NAME, COLUMN_NAME, REFERENCED_TABLE_NAME, REFERENCED_COLUMN_NAME
        FROM information_schema.KEY_COLUMN_USAGE
        WHERE
            CONSTRAINT_SCHEMA = '${database}' AND
            REFERENCED_TABLE_SCHEMA IS NOT NULL AND
            REFERENCED_TABLE_NAME IS NOT NULL AND
            REFERENCED_COLUMN_NAME IS NOT NULL
            ${tableName ? ('AND TABLE_NAME = ' + tableName) : ''}
    `);
};

export default action => ({
    getDatabaseList: getDatabaseList.bind(null, action),
    getTablesByDatabase: getTablesByDatabase.bind(null, action),
    getTableColumns: getTableColumns.bind(null, action),
    getColumnsGroupByTable: getColumnsGroupByTable.bind(null, action),
    getTableStatus: getTableStatus.bind(null, action),
    getCreateSql: getCreateSql.bind(null, action),
    getTableContent: getTableContent.bind(null, action),
    getColumnsByDatabase: getColumnsByDatabase.bind(null, action),
    getTriggers: getTriggers.bind(null, action),
    createTrigger: createTrigger.bind(null, action),
    dropTrigger: dropTrigger.bind(null, action),
    getEntityRelations: getEntityRelations.bind(null, action)
});
