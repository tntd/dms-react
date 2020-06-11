import { message } from "antd";

// 我们的客户数据看起来像这样。
const sqlHistoryData = [
    {
        id: 1,
        database: 'sinan',
        sql: 'select * from user_info',
        status: 1,
        total: 99,
        execute_ts: 50,
        created_ts: 1577808000
    },
    {
        id: 2,
        database: 'sinan',
        sql: 'select * from book',
        status: 1,
        total: 99,
        execute_ts: 50,
        created_ts: 1577808000
    },
];

let objectStore;
var db;

export const initIDB = (database) => {
    /**
     * 第一步是打开数据库
     * 这个方法接受两个参数
     * 第一个参数是数据库名。如果指定的数据库不存在，就会新建数据库。
     * 第二个参数是整数，表示数据库的版本。如果省略，打开已有数据库时，默认为当前版本；新建数据库时，默认为1。
     * 先判断一下，这张表格是否存在，如果不存在再新建。
     */
    const request = window.indexedDB.open(database);

    // success 事件
    request.onsuccess = (event) => {
        db = request.result;
        console.log('request.result', db);
        message.success('数据库打开成功');
    };
    // error 事件
    request.onerror = function (event) {
        message.warning('数据库打开报错');
    };

    // db.onerror = function (event) {
    //     // Generic error handler for all errors targeted at this database's
    //     // requests!
    //     console.log("Database error: " + event.target.errorCode);
    // };

    /**
     * 新建表
     * 数据库新建成功以后，新增一张叫做person的表格， { autoIncrement: true }主键设置为自增，{ keyPath: 'id' }主键设置为id。
     * 先判断一下，这张表格是否存在，如果不存在再新建。
     */
    request.onupgradeneeded = (event) => {
        db = event.target.result;
        if (!db.objectStoreNames.contains('sql_history')) {
            objectStore = db.createObjectStore('sql_history', { keyPath: 'id', autoIncrement: true });
            // 新建对象仓库以后，下一步可以新建索引。
            objectStore.createIndex('database', 'database', { unique: false });
            objectStore.createIndex('sql', 'sql', { unique: false });
        }
        if (!db.objectStoreNames.contains('sql_collection')) {
            objectStore = db.createObjectStore('sql_collection', { keyPath: 'id', autoIncrement: true });
            // 新建对象仓库以后，下一步可以新建索引。
            objectStore.createIndex('title', 'title', { unique: false });
            objectStore.createIndex('scope', 'scope', { unique: false });
        }
    }
};

// 获取对象store
export const getObjectStore = (storeName, mode = "readwrite") => {
    var tx = db.transaction(storeName, mode);
    return tx.objectStore(storeName);
}

export const addData = (storeName, data) => {
    const store = getObjectStore(storeName, 'readwrite');

    let req;
    try {
        req = store.add(data);
    } catch (e) {
        throw e;
    }

    req.onsuccess = function (evt) {
        message.success("插入成功");
    };
    req.onerror = function () {
        message.warning("插入失败", this.error);
    };
}

export const deleteDataById = (storeName, id) => {
    let store = getObjectStore(storeName, 'readwrite');
    let req = store.get(id);

    req.onsuccess = (evt) => {
        let record = evt.target.result;
        console.log("record:", record);

        if (typeof record === 'undefined') {
            message.warning("No matching record found");
            return;
        }
        req = store.delete(id);
        req.onsuccess = (evt) => {
            message.success("删除成功");
        };
        req.onerror = (evt) => {
            console.error("deletePublication:", evt.target.errorCode);
        };
    };
    req.onerror = (evt) => {
        console.error("deletePublication:", evt.target.errorCode);
    };
}
