
export const safeParseJSON = (str, defaultObj) => {
    let result;

    try {
        result = JSON.parse(str);
    } catch (err) {
        console.warn('json parse error:', err);
        result = typeof defaultObj === 'undefined' ? str : defaultObj;
    }

    return result || defaultObj;
};

export const getStorageItem = (key, defaultVal) => safeParseJSON(localStorage.getItem(key), defaultVal);

export const setStorageItem = (key, value) => localStorage.setItem(
    key,
    value instanceof Object ? JSON.stringify(value) : value
);

export const saveToLocal = (field, value) => {
    // 缓存中是否存在currentApp
    const dmsInfo = getStorageItem('dmsInfo', {});

    setStorageItem('dmsInfo', {
        ...dmsInfo,
        [field]: value
    });
};

export const getSchema = (dataSource = []) => {
    const schema = [];
    if (dataSource && dataSource.length > 0) {
        Object.keys(dataSource[0]).forEach(key => {
            schema.push({
                dataIndex: key,
                resizable: true,
                sortable: true,
                text: key,
            });
        });
    }
    return schema;
};
