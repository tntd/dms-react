export const getDatabaseList = action => {
    return action({
        value: "SHOW DATABASES"
    }).then(data => (data || []).map(item => item.Database));
};

export const getTablesByDatabase = (action, database) => {
    return action({
        value: `SHOW TABLES FROM ${database}`
    }).then(data => (data || []).map(item => item['Tables_in_' + database]));
};

export const getTableColumns = (action, database, tableName) => {
    return action({
        value: `SHOW COLUMNS FROM ${database}.${tableName}`
    });
};

export const getTableStatus = (action, database, tableName) => {
    return action({
        value: `SHOW TABLE STATUS FROM ${database} LIKE "${tableName}"`
    }).then(data => data && data[0]);
};

export const getCreateSql = (action, database, tableName) => {
    return action({
        value: `SHOW CREATE TABLE ${database}.${tableName}`
    }).then(data => data && data[0]['Create Table']);
};

export const getTableContent = (action, databaseName, tableName) => {
    return action({
        value: `select * from ${databaseName}.${tableName} limit 499`
    }).then(data => data || []);
};

export default action => ({
    getDatabaseList: getDatabaseList.bind(null, action),
    getTablesByDatabase: getTablesByDatabase.bind(null, action),
    getTableColumns: getTableColumns.bind(null, action),
    getTableStatus: getTableStatus.bind(null, action),
    getCreateSql: getCreateSql.bind(null, action),
    getTableContent: getTableContent.bind(null, action)
});
