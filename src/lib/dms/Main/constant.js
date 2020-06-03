export const sqlTemplateList = [
	{
		title: "SQL",
		key: "group-1",
		children: [
			{
				title: "常用SQL",
				key: "group-1-0",
				children: [
					{
						title: "select",
						key: "group-1-0-0",
						content: "SELECT col_name,...\n  FROM table_name\n WHERE where_condition\n GROUP BY col_name,... \nHAVING where_condition\n ORDER BY col_name,...\n LIMIT offset,row_count"
					},
					{
						title: "insert",
						key: "group-1-0-1",
						content: "INSERT INTO table_name(col_name,...) values(expr,...)"
					},
					{
						title: "update",
						key: "group-1-0-2",
						content: "UPDATE table_name SET col_name=expr,... WHERE where_condition"
					},
					{
						title: "delete",
						key: "group-1-0-3",
						content: "DELETE FROM table_name WHERE where_condition "
					},
					{
						title: "replace",
						key: "group-1-0-4",
						content: "REPLACE INTO table_name(col_name,...) values(expr,...)"
					}
				]
			},
			{
				title: "Show",
				key: "group-1-1",
				children: [
					{
						title: "show character set",
						key: "group-1-1-1",
						content: "SHOW CHARACTER SET [LIKE 'pattern']"
					},
					{
						title: "show collation",
						key: "group-1-1-2",
						content: "SHOW COLLATION [LIKE 'pattern']"
					},
					{
						title: "show column",
						key: "group-1-1-3",
						content: "SHOW [FULL] COLUMNS FROM tbl_name [FROM db_name] [LIKE 'pattern']"
					},
					{
						title: "show create database",
						key: "group-1-1-4",
						content: "SHOW CREATE DATABASE db_name"
					},
					{
						title: "show databases",
						key: "group-1-1-5",
						content: "SHOW DATABASES [LIKE 'pattern']"
					},
					{
						title: "show engine",
						key: "group-1-1-6",
						content: "show engine"
					},
					{
						title: "show engines",
						key: "group-1-1-7",
						content: "SHOW ENGINES"
					},
					{
						title: "show errors",
						key: "group-1-1-8",
						content: "SHOW ERRORS [LIMIT [offset,] row_count]"
					},
					{
						title: "show grants",
						key: "group-1-1-9",
						content: "SHOW GRANTS FOR user"
					},
					{
						title: "show index",
						key: "group-1-1-10",
						content: "SHOW INDEX FROM tbl_name [FROM db_name]"
					},
					{
						title: "show innodb status",
						key: "group-1-1-11",
						content: "SHOW INNODB STATUS"
					},
					{
						title: "show master logs",
						key: "group-1-1-12",
						content: "SHOW MASTER LOGS"
					},
					{
						title: "show master status",
						key: "group-1-1-13",
						content: "SHOW MASTER STATUS"
					},
					{
						title: "show privileger",
						key: "group-1-1-14",
						content: "SHOW PRIVILEGES"
					},
					{
						title: "show processlist",
						key: "group-1-1-15",
						content: "SHOW [FULL] PROCESSLIST"
					},
					{
						title: "show slave hosts",
						key: "group-1-1-16",
						content: "SHOW SLAVE HOSTS"
					},
					{
						title: "show slave status",
						key: "group-1-1-17",
						content: "SHOW SLAVE STATUS"
					},
					{
						title: "show status",
						key: "group-1-1-18",
						content: "SHOW [GLOBAL | SESSION] STATUS [LIKE 'pattern']"
					},
					{
						title: "show table status",
						key: "group-1-1-19",
						content: "SHOW TABLE STATUS [FROM db_name] [LIKE 'pattern']"
					},
					{
						title: "show tables",
						key: "group-1-1-20",
						content: "SHOW [OPEN] TABLES [FROM db_name] [LIKE 'pattern']"
					},
					{
						title: "show triggers",
						key: "group-1-1-21",
						content: "SHOW TRIGGERS"
					},
					{
						title: "show variables",
						key: "group-1-1-22",
						content: "SHOW [GLOBAL | SESSION] VARIABLES [LIKE 'pattern']"
					},
					{
						title: "show warnings",
						key: "group-1-1-23",
						content: "SHOW WARNINGS [LIMIT [offset,] row_count]"
					},
					{
						title: "show create table",
						key: "group-1-1-24",
						content: "SHOW CREATE TABLE tbl_name"
					}
				]
			}
		]
	},
	{
		title: "函数",
		key: "group-2",
		children: [
			{
				title: "字符型",
				key: "group-2-0",
				children: []
			},
			{
				title: "数值型",
				key: "group-2-1",
				children: []
			},
			{
				title: "日期型",
				key: "group-2-2",
				children: []
			},
			{
				title: "统计函数",
				key: "group-2-3",
				children: []
			},
			{
				title: "其他",
				key: "group-2-4",
				children: []
			}
		]
	}
];

export const showStatusMapList = [
	{
		name: "Aborted_clients",
		title: "终止的客户数",
		type: "string"
	},
	{
		name: "Aborted_connects",
		title: "终止的连接数",
		type: "string"
	},
	{
		name: "Bytes_received",
		title: "接收字节数",
		type: "byte"
	},
	{
		name: "Bytes_sent",
		title: "发送字节数",
		type: "byte"
	},
	{
		name: "Com_admin_commands",
		title: "管理员命令执行数量",
		type: "string"
	},
	{
		name: "Com_alter_table",
		title: "alter table执行数量",
		type: "string"
	},
	{
		name: "Com_alter_tablespace",
		title: "alter tablespace执行数量",
		type: "string"
	},
	{
		name: "Com_alter_user",
		title: "alter user执行数量",
		type: "string"
	},
	{
		name: "Com_commit",
		title: "commit执行数量",
		type: "string"
	},
	{
		name: "Com_create_db",
		title: "create db执行数量",
		type: "string"
	},
	{
		name: "Com_delete",
		title: "delete执行数量",
		type: "string"
	}
];
