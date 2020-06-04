import { isJSON } from "@tntd/utils";

export const saveToLocal = (field, value) => {
    // 缓存中是否存在currentApp
    let dmsInfoObjStr = localStorage.getItem("dmsInfo");
    if (dmsInfoObjStr && isJSON(dmsInfoObjStr)) {
        // 存在的currentApp是否是标准JSON
        const dmsInfoObj = JSON.parse(dmsInfoObjStr);

        dmsInfoObj[field] = value;
        localStorage.setItem("dmsInfo", JSON.stringify(dmsInfoObj));
    } else {
        let params = {};
        params[field] = value;
        localStorage.setItem("dmsInfo", JSON.stringify(params));
    }
};

export const getSchema = (dataSource) => {
    const schema = []
    Object.keys(dataSource[0]).forEach((key, index) => {
        schema.push({
            dataIndex: `COLUMN_${index}`,
            resizable: true,
            sortable: true,
            text: key,
        });
    });
    return schema;
}
