import createServices from "@/services/createServices";

export default createServices({
	getTableInfo: {
		url: "/admin/dms/table"
	},
	executeSql: {
		url: "/admin/dms/execute",
		method: "POST"
	},
	getDmsQuerys: {
		url: "/admin/dms/querys"
	},
	addDmsQuery: {
		url: "/admin/dms/query",
		method: "POST"
	},
	modifyDmsQuery: {
		url: "/admin/dms/query",
		method: "PUT"
	},
	deleteDmsQuery: {
		url: "/admin/dms/query",
		method: "DELETE"
	}
});
