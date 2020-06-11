import { message } from "antd";

let objectStore;
let db;

export const initIDB = (database = 'dms', callback) => {
    /**
     * 第一步是打开数据库
     * 这个方法接受两个参数
     * 第一个参数是数据库名。如果指定的数据库不存在，就会新建数据库。
     * 第二个参数是整数，表示数据库的版本。如果省略，打开已有数据库时，默认为当前版本；新建数据库时，默认为1。
     * 先判断一下，这张表格是否存在，如果不存在再新建。
     */
    // const request = window.indexedDB.open(database);
    return new Promise((resolve, reject) => {
        if (db) {
            resolve(db);
        }

        const request = window.indexedDB.open(database);
        // success 事件
        request.onsuccess = (event) => {
            db = request.result;
            console.log('request.result', db);
            // message.success('数据库打开成功');
            resolve(db);
        };
        // error 事件
        request.onerror = function (event) {
            console.error('数据库打开报错');
            reject(event);
        };

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
    });
};

const execute = (storeName, callback) => {
    if (db) {
        callback();
    } else {
        initIDB(callback);
    }
};

export const getObj = (storeName, mode = 'r') => {
    execute(() => {
        var tx = db.transaction(storeName, mode);
        return tx.objectStore(storeName);
    });
}

// 获取对象store
export const getObjectStore = async (storeName, mode = "readwrite") => {
    const db = await initIDB();

    var tx = db.transaction(storeName, mode);
    return tx.objectStore(storeName);
}

export const addData = async (storeName, data, callback) => {
    const store = await getObjectStore(storeName, 'readwrite');

    let req;
    try {
        req = store.add(data);
    } catch (e) {
        throw e;
    }

    req.onsuccess = (evt) => {
        console.log("插入成功");
        if (callback) {
            callback(true);
        }
    };
    req.onerror = () => {
        if (callback) {
            callback(false);
        }
        console.log("插入失败", this.error);
    };
}

export const deleteDataById = (storeName, id) => {
    let store = getObjectStore(storeName, 'readwrite');
    // let req = store.index(id);

    // var req = store.delete(id);
    store.get(id).onsuccess = (evt) => {
        let record = evt.target.result;
        console.log("record:", record);

        if (typeof record === 'undefined') {
            message.warning("No matching record found");
            return;
        }
        // req = store.delete(id);
        // req.onsuccess = (evt) => {
        //     message.success("删除成功");
        // };
        // req.onerror = (evt) => {
        //     console.error("deletePublication:", evt.target.errorCode);
        // };
    };
    store.onerror = (evt) => {
        console.error("deletePublication:", evt.target.errorCode);
    };
}

//根据存储空间的键找到对应数据
export const getDataByKey = (storename, key, callback) => {
    let store = db.transaction(storename, 'readwrite').objectStore(storename);
    let request = store.get(key);
    request.onerror = function () {
        console.error('getDataByKey error');
    };
    request.onsuccess = function (e) {
        let result = e.target.result;
        console.log('查找数据成功')
        console.log(result);
        if (callback) {
            callback(result);
        }
    };
}

// 获取全部数据 ，根据 storename
export const getAllData = async (storename, callback) => {
    const db = await initIDB();
    let store = db.transaction(storename, 'readwrite').objectStore(storename);
    let request = store.openCursor();
    let data = [];
    request.onerror = function () {
        console.error('getDataByKey error');
    };
    request.onsuccess = function (e) {
        let result = e.target.result;
        if (result && result !== null) {
            data.push(result.value);
            result.continue();
        } else {
            if (callback) {
                console.log('全部查找数据成功')
                callback(data);
            }
        }
    };
}
