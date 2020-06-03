import service from "./service";
import { message } from "antd";
import CryptoJS from "crypto-js";
import { isJSON } from "@/utils";

export default {
	namespace: "dms",
	state: {
		querySqlInfo: {
			querySqlText: "",
			loading: false,
			schema: [],
			content: [],
			resultTab: "result",
			errorInfo: {}
		},
		currentTableContent: {
			loading: false,
			schema: [],
			content: []
		},
		databaseList: [],
		tableList: [],
		currentTableInfo: {
			baseInfo: {},
			columns: [],
			createSql: null
		},
		// 这里放置已经保存的sql语句，dms query
		dmsQueryInfo: {
			homeQueryList: [],
			userQueryList: []
		},
		dmsQuerySelectId: null,
		// position
		selectDatabase: null,
		selectTable: null,
		selectNav: null
	},
	effects: {
		*getTableInfo({ payload }, { call, put, select }) {
			const { baseInfo = {}, columns = [], createSql } = yield call(service.getTableInfo, payload);

			yield put({
				type: "updateState",
				payload: {
					currentTableInfo: {
						baseInfo,
						columns,
						createSql
					}
				}
			});
		},
		*executeSql({ payload }, { call, put, select }) {
			let { value, ...rest } = payload;
			value = encodeURIComponent(value);

			// Encrypt加密
			const ciphertext = CryptoJS.AES.encrypt(value, "OrF7l2hF81yhVEtxfYKUYxsPsxfM4fZm");

			// Decrypt
			// const bytes = CryptoJS.AES.decrypt(ciphertext.toString(), "OrF7l2hF81yhVEtxfYKUYxsPsxfM4fZm");
			// const plaintext = bytes.toString(CryptoJS.enc.Utf8);
			// console.log("ciphertext", ciphertext.toString());
			// console.log("解密", plaintext);

			const res = yield call(service.executeSql, {
				value: ciphertext.toString(),
				...rest
			});
			return res;
		},
		*getDmsQueryList({ payload }, { call, put, select }) {
			const { isSystem = false } = payload;
			const { dmsQueryInfo } = yield select(state => state.dms);

			const data = yield call(service.getDmsQuerys, payload);

			if (isSystem) {
				dmsQueryInfo["homeQueryList"] = data || [];
			} else {
				dmsQueryInfo["userQueryList"] = data || [];
			}

			yield put({
				type: "updateState",
				payload: {
					dmsQueryInfo
				}
			});
		},
		*addDmsQuery({ payload }, { call, put, select }) {
			const { isSystem = false } = payload;

			yield call(service.addDmsQuery, payload);

			yield put({
				type: "getDmsQueryList",
				payload: {
					isSystem
				}
			});
			message.success("添加成功");
		},
		*modifyDmsQuery({ payload }, { call, put, select }) {
			const { isSystem = false } = payload;

			yield call(service.modifyDmsQuery, payload);

			yield put({
				type: "getDmsQueryList",
				payload: {
					isSystem
				}
			});
			message.success("修改成功");
		},
		*deleteDmsQuery({ payload }, { call, put, select }) {
			const { isSystem = false, ...rest } = payload;

			yield call(service.deleteDmsQuery, rest);

			yield put({
				type: "getDmsQueryList",
				payload: {
					isSystem
				}
			});
			message.success("删除成功");
		}
	},
	reducers: {
		updateState(state, { payload }) {
			return {
				...state,
				...payload
			};
		}
	}
};
