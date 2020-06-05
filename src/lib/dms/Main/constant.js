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
            },
            {
                title: "表/索引",
                key: "group-1-2",
                children: [
                    {
                        title: "alter table",
                        key: "group-1-2-0",
                        content: "ALTER [ONLINE | OFFLINE] [IGNORE] TABLE tbl_name\n    alter_specification [, alter_specification] ...\n\nalter_specification:\n    table_option ...\n  | ADD [COLUMN] col_name column_definition\n        [FIRST | AFTER col_name ]\n  | ADD [COLUMN] (col_name column_definition,...)\n  | ADD {INDEX|KEY} [index_name]\n        [index_type] (index_col_name,...) [index_option] ...\n  | ADD [CONSTRAINT [symbol]] PRIMARY KEY\n        [index_type] (index_col_name,...) [index_option] ...\n  | ADD [CONSTRAINT [symbol]]\n        UNIQUE [INDEX|KEY] [index_name]\n        [index_type] (index_col_name,...) [index_option] ...\n  | ADD FULLTEXT [INDEX|KEY] [index_name]\n        (index_col_name,...) [index_option] ...\n  | ADD SPATIAL [INDEX|KEY] [index_name]\n        (index_col_name,...) [index_option] ...\n  | ADD [CONSTRAINT [symbol]]\n        FOREIGN KEY [index_name] (index_col_name,...)\n        reference_definition\n  | ALTER [COLUMN] col_name {SET DEFAULT literal | DROP DEFAULT}\n  | CHANGE [COLUMN] old_col_name new_col_name column_definition\n        [FIRST|AFTER col_name]\n  | MODIFY [COLUMN] col_name column_definition\n        [FIRST | AFTER col_name]\n  | DROP [COLUMN] col_name\n  | DROP PRIMARY KEY\n  | DROP {INDEX|KEY} index_name\n  | DROP FOREIGN KEY fk_symbol\n  | DISABLE KEYS\n  | ENABLE KEYS\n  | RENAME [TO] new_tbl_name\n  | ORDER BY col_name [, col_name] ...\n  | CONVERT TO CHARACTER SET charset_name [COLLATE collation_name]\n  | [DEFAULT] CHARACTER SET [=] charset_name [COLLATE [=] collation_name]\n  | DISCARD TABLESPACE\n  | IMPORT TABLESPACE\n  | partition_options\n  | ADD PARTITION (partition_definition)\n  | DROP PARTITION partition_names\n  | COALESCE PARTITION number\n  | REORGANIZE PARTITION partition_names INTO (partition_definitions)\n  | ANALYZE PARTITION partition_names\n  | CHECK PARTITION partition_names\n  | OPTIMIZE PARTITION partition_names\n  | REBUILD PARTITION partition_names\n  | REPAIR PARTITION partition_names\n  | REMOVE PARTITIONING\n\nindex_col_name:\n    col_name [(length)] [ASC | DESC]\n\nindex_type:\n    USING {BTREE | HASH | RTREE}\n\nindex_option:\n    KEY_BLOCK_SIZE [=] value\n  | index_type\n  | WITH PARSER parser_name\n  | COMMENT 'string'\n"
                    },
                    {
                        title: "create index",
                        key: "group-1-2-1",
                        content: "CREATE [UNIQUE|FULLTEXT|SPATIAL] INDEX index_name\n    [USING index_type]\n    ON tbl_name (index_col_name,...)\n \nindex_col_name:\n    col_name [(length)] [ASC | DESC]"
                    },
                    {
                        title: "create table",
                        key: "group-1-2-2",
                        content: "CREATE TABLE tbl_name\n(\ncol_name data_type NOT NULL DEFAULT default_value AUTO_INCREMENT COMMENT 'string',\n...\nKEY index_name index_type (index_col_name,...),\n...\nPRIMARY KEY(index_col_name,...),\nUNIQUE KEY(index_col_name,...)\n) ENGINE=engine_name CHARACTER SET=charset_name COMMENT='string'"
                    },
                    {
                        title: "create table like",
                        key: "group-1-2-3",
                        content: "CREATE [TEMPORARY] TABLE [IF NOT EXISTS] tbl_name LIKE old_tbl_name;"
                    },
                    {
                        title: "drop index",
                        key: "group-1-2-4",
                        content: "DROP INDEX index_name ON tbl_name"
                    },
                    {
                        title: "drop table",
                        key: "group-1-2-5",
                        content: "DROP [TEMPORARY] TABLE [IF EXISTS]\n    tbl_name [, tbl_name] ...\n    [RESTRICT | CASCADE]"
                    },
                    {
                        title: "rename table",
                        key: "group-1-2-6",
                        content: "RENAME TABLE tbl_name TO new_tbl_name"
                    },
                    {
                        title: "truncate table",
                        key: "group-1-2-7",
                        content: "TRUNCATE [TABLE] tbl_name"
                    }
                ]
            },
            {
                title: "视图",
                key: "group-1-3",
                children: [
                    {
                        title: "alter view",
                        key: "group-1-3-0",
                        content: "ALTER\n    [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}]\n    [DEFINER = { user | CURRENT_USER }]\n    [SQL SECURITY { DEFINER | INVOKER }]\n    VIEW view_name [(column_list)]\n    AS select_statement\n    [WITH [CASCADED | LOCAL] CHECK OPTION]"
                    },
                    {
                        title: "create view",
                        key: "group-1-3-1",
                        content: "CREATE [OR REPLACE] [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}]\n    VIEW view_name [(column_list)]\n    AS select_statement\n    [WITH [CASCADED | LOCAL] CHECK OPTION]"
                    },
                    {
                        title: "drop view",
                        key: "group-1-3-2",
                        content: "DROP VIEW [IF EXISTS]\n    view_name [, view_name] ...\n    [RESTRICT | CASCADE]"
                    }
                ]
            },
            {
                title: "函数/存储过程",
                key: "group-1-4",
                children: [
                    {
                        title: "alter function",
                        key: "group-1-4-0",
                        content: "ALTER FUNCTION sp_name [characteristic ...]\n \ncharacteristic:\n    { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }\n  | SQL SECURITY { DEFINER | INVOKER }\n  | COMMENT 'string'"
                    },
                    {
                        title: "alter procedure",
                        key: "group-1-4-1",
                        content: "ALTER PROCEDURE sp_name [characteristic ...]\n \ncharacteristic:\n    { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }\n  | SQL SECURITY { DEFINER | INVOKER }\n  | COMMENT 'string'"
                    },
                    {
                        title: "call function",
                        key: "group-1-4-2",
                        content: "CALL sp_name([parameter[,...]])"
                    },
                    {
                        title: "create function",
                        key: "group-1-4-3",
                        content: "CREATE FUNCTION sp_name ([func_parameter[,...]])\n    RETURNS type\n    [characteristic ...]\n routine_body\n\ncharacteristic:\n    LANGUAGE SQL\n  | [NOT] DETERMINISTIC\n  | { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }\n  | SQL SECURITY { DEFINER | INVOKER }\n  | COMMENT 'string'"
                    },
                    {
                        title: "create procedure",
                        key: "group-1-4-4",
                        content: "CREATE PROCEDURE sp_name ([proc_parameter[,...]])\n    [characteristic ...]\n routine_body\ncharacteristic:\n    LANGUAGE SQL\n  | [NOT] DETERMINISTIC\n  | { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }\n  | SQL SECURITY { DEFINER | INVOKER }\n  | COMMENT 'string'"
                    },
                    {
                        title: "drop function",
                        key: "group-1-4-5",
                        content: "DROP FUNCTION [IF EXISTS] sp_name"
                    },
                    {
                        title: "drop procedure",
                        key: "group-1-4-6",
                        content: "DROP PROCEDURE [IF EXISTS] sp_name"
                    },
                ]
            },
            {
                title: "触发器",
                key: "group-1-5",
                children: [
                    {
                        title: "create trigger",
                        key: "group-1-5-0",
                        content: "CREATE\n    [DEFINER = { user | CURRENT_USER }]\n    TRIGGER trigger_name\n    trigger_time trigger_event\n    ON tbl_name FOR EACH ROW\n    trigger_body\n\ntrigger_time: { BEFORE | AFTER }\n\ntrigger_event: { INSERT | UPDATE | DELETE }"
                    },
                    {
                        title: "drop trigger",
                        key: "group-1-5-1",
                        content: "DROP TRIGGER [IF EXISTS] [schema_name.]trigger_name"
                    }
                ]
            },
            {
                title: "事件",
                key: "group-1-6",
                children: [
                    {
                        title: "alter event",
                        key: "group-1-6-0",
                        content: "ALTER\n    [DEFINER = { user | CURRENT_USER }]\n    EVENT event_name\n    [ON SCHEDULE schedule]\n    [ON COMPLETION [NOT] PRESERVE]\n    [RENAME TO new_event_name]\n    [ENABLE | DISABLE | DISABLE ON SLAVE]\n    [COMMENT 'comment']\n    [DO event_body]"
                    },
                    {
                        title: "create event",
                        key: "group-1-6-1",
                        content: "CREATE\n    [DEFINER = { user | CURRENT_USER }]\n    EVENT\n    [IF NOT EXISTS]\n    event_name\n    ON SCHEDULE schedule\n    [ON COMPLETION [NOT] PRESERVE]\n    [ENABLE | DISABLE | DISABLE ON SLAVE]\n    [COMMENT 'comment']\n    DO event_body;\n\nschedule:\n    AT timestamp [+ INTERVAL interval] ...\n  | EVERY interval\n    [STARTS timestamp [+ INTERVAL interval] ...]\n    [ENDS timestamp [+ INTERVAL interval] ...]\n\ninterval:\n    quantity {YEAR | QUARTER | MONTH | DAY | HOUR | MINUTE |\n              WEEK | SECOND | YEAR_MONTH | DAY_HOUR | DAY_MINUTE |\n              DAY_SECOND | HOUR_MINUTE | HOUR_SECOND | MINUTE_SECOND}"
                    },
                    {
                        title: "drop event",
                        key: "group-1-6-2",
                        content: "DROP EVENT [IF EXISTS] event_name"
                    }
                ]
            },
            {
                title: "权限",
                key: "group-1-7",
                children: [
                    {
                        title: "create user",
                        key: "group-1-7-0",
                        content: "CREATE USER user [IDENTIFIED BY [PASSWORD] 'password']"
                    },
                    {
                        title: "drop user",
                        key: "group-1-7-1",
                        content: "DROP USER user [, user] ..."
                    },
                    {
                        title: "flush privileges",
                        key: "group-1-7-2",
                        content: "FLUSH PRIVILEGES"
                    },
                    {
                        title: "grant",
                        key: "group-1-7-3",
                        content: "    GRANT priv_type,...\n    ON [object_type] {tbl_name | * | *.* | db_name.*}\n    TO user [IDENTIFIED BY [PASSWORD] 'password']\n        [, user [IDENTIFIED BY [PASSWORD] 'password']] ...\n    [WITH with_option]"
                    },
                    {
                        title: "rename user",
                        key: "group-1-7-4",
                        content: "RENAME USER old_user TO new_user\n    [, old_user TO new_user] ..."
                    },
                    {
                        title: "revoke",
                        key: "group-1-7-5",
                        content: "REVOKE priv_type, ...\n    ON [object_type] {tbl_name | * | *.* | db_name.*}\n    FROM user [, user] ..."
                    },
                    {
                        title: "revoke all",
                        key: "group-1-7-6",
                        content: "REVOKE ALL PRIVILEGES, GRANT OPTION FROM user [, user] ..."
                    },
                    {
                        title: "set password",
                        key: "group-1-7-7",
                        content: "SET PASSWORD = PASSWORD('some password')"
                    },
                    {
                        title: "set user password",
                        key: "group-1-7-8",
                        content: "SET PASSWORD FOR user = PASSWORD('some password')"
                    },
                ]
            },
            {
                title: "其他",
                key: "group-1-8",
                children: [
                    {
                        title: "analyze table",
                        key: "group-1-8-0",
                        content: "ANALYZE [LOCAL | NO_WRITE_TO_BINLOG] TABLE tbl_name [, tbl_name] ..."
                    },
                    {
                        title: "check table",
                        key: "group-1-8-1",
                        content: "CHECK TABLE tbl_name [, tbl_name] ... [option] ...\n \noption = {QUICK | FAST | MEDIUM | EXTENDED | CHANGED}"
                    },
                    {
                        title: "checksum table",
                        key: "group-1-8-2",
                        content: "CHECKSUM TABLE tbl_name [, tbl_name] ... [ QUICK | EXTENDED ]"
                    },
                    {
                        title: "full create table",
                        key: "group-1-8-3",
                        content: "CREATE [TEMPORARY] TABLE [IF NOT EXISTS] tbl_name\n    (create_definition,...)\n    [table_option] ...\n    [partition_options]\n\nCREATE [TEMPORARY] TABLE [IF NOT EXISTS] tbl_name\n    [(create_definition,...)]\n    [table_option] ...\n    [partition_options]\n    select_statement\n\nCREATE [TEMPORARY] TABLE [IF NOT EXISTS] tbl_name\n    { LIKE old_tbl_name | (LIKE old_tbl_name) }\n\ncreate_definition:\n    col_name column_definition\n  | [CONSTRAINT [symbol]] PRIMARY KEY [index_type] (index_col_name,...)\n      [index_option] ...\n  | {INDEX|KEY} [index_name] [index_type] (index_col_name,...)\n      [index_option] ...\n  | [CONSTRAINT [symbol]] UNIQUE [INDEX|KEY]\n      [index_name] [index_type] (index_col_name,...)\n      [index_option] ...\n  | {FULLTEXT|SPATIAL} [INDEX|KEY] [index_name] (index_col_name,...)\n      [index_option] ...\n  | [CONSTRAINT [symbol]] FOREIGN KEY\n      [index_name] (index_col_name,...) reference_definition\n  | CHECK (expr)\n\ncolumn_definition:\n    data_type [NOT NULL | NULL] [DEFAULT default_value]\n      [AUTO_INCREMENT] [UNIQUE [KEY] | [PRIMARY] KEY]\n      [COMMENT 'string'] [reference_definition]\n      [COLUMN_FORMAT {FIXED|DYNAMIC|DEFAULT}]\n      [STORAGE {DISK|MEMORY|DEFAULT}]\n\ndata_type:\n    BIT[(length)]\n  | TINYINT[(length)] [UNSIGNED] [ZEROFILL]\n  | SMALLINT[(length)] [UNSIGNED] [ZEROFILL]\n  | MEDIUMINT[(length)] [UNSIGNED] [ZEROFILL]\n  | INT[(length)] [UNSIGNED] [ZEROFILL]\n  | INTEGER[(length)] [UNSIGNED] [ZEROFILL]\n  | BIGINT[(length)] [UNSIGNED] [ZEROFILL]\n  | REAL[(length,decimals)] [UNSIGNED] [ZEROFILL]\n  | DOUBLE[(length,decimals)] [UNSIGNED] [ZEROFILL]\n  | FLOAT[(length,decimals)] [UNSIGNED] [ZEROFILL]\n  | DECIMAL[(length[,decimals])] [UNSIGNED] [ZEROFILL]\n  | NUMERIC[(length[,decimals])] [UNSIGNED] [ZEROFILL]\n  | DATE\n  | TIME\n  | TIMESTAMP\n  | DATETIME\n  | YEAR\n  | CHAR[(length)]\n      [CHARACTER SET charset_name] [COLLATE collation_name]\n  | VARCHAR(length)\n      [CHARACTER SET charset_name] [COLLATE collation_name]\n  | BINARY[(length)]\n  | VARBINARY(length)\n  | TINYBLOB\n  | BLOB\n  | MEDIUMBLOB\n  | LONGBLOB\n  | TINYTEXT [BINARY]\n      [CHARACTER SET charset_name] [COLLATE collation_name]\n  | TEXT [BINARY]\n      [CHARACTER SET charset_name] [COLLATE collation_name]\n  | MEDIUMTEXT [BINARY]\n      [CHARACTER SET charset_name] [COLLATE collation_name]\n  | LONGTEXT [BINARY]\n      [CHARACTER SET charset_name] [COLLATE collation_name]\n  | ENUM(value1,value2,value3,...)\n      [CHARACTER SET charset_name] [COLLATE collation_name]\n  | SET(value1,value2,value3,...)\n      [CHARACTER SET charset_name] [COLLATE collation_name]\n  | spatial_type\n\nindex_col_name:\n    col_name [(length)] [ASC | DESC]\n\nindex_type:\n    USING {BTREE | HASH | RTREE}\n\nindex_option:\n    KEY_BLOCK_SIZE [=] value\n  | index_type\n  | WITH PARSER parser_name\n\nreference_definition:\n    REFERENCES tbl_name (index_col_name,...)\n      [MATCH FULL | MATCH PARTIAL | MATCH SIMPLE]\n      [ON DELETE reference_option]\n      [ON UPDATE reference_option]\n\nreference_option:\n    RESTRICT | CASCADE | SET NULL | NO ACTION\n\ntable_option:\n    ENGINE [=] engine_name\n  | AUTO_INCREMENT [=] value\n  | AVG_ROW_LENGTH [=] value\n  | [DEFAULT] CHARACTER SET [=] charset_name\n  | CHECKSUM [=] {0 | 1}\n  | [DEFAULT] COLLATE [=] collation_name\n  | COMMENT [=] 'string'\n  | CONNECTION [=] 'connect_string'\n  | DATA DIRECTORY [=] 'absolute path to directory'\n  | DELAY_KEY_WRITE [=] {0 | 1}\n  | INDEX DIRECTORY [=] 'absolute path to directory'\n  | INSERT_METHOD [=] { NO | FIRST | LAST }\n  | KEY_BLOCK_SIZE [=] value\n  | MAX_ROWS [=] value\n  | MIN_ROWS [=] value\n  | PACK_KEYS [=] {0 | 1 | DEFAULT}\n  | PASSWORD [=] 'string'\n  | ROW_FORMAT [=] {DEFAULT|DYNAMIC|FIXED|COMPRESSED|REDUNDANT|COMPACT}\n  | TABLESPACE tablespace_name [STORAGE {DISK|MEMORY|DEFAULT}]\n  | UNION [=] (tbl_name[,tbl_name]...)\n\npartition_options:\n    PARTITION BY\n        { [LINEAR] HASH(expr)\n        | [LINEAR] KEY(column_list)\n        | RANGE(expr)\n        | LIST(expr) }\n    [PARTITIONS num]\n    [SUBPARTITION BY\n        { [LINEAR] HASH(expr)\n        | [LINEAR] KEY(column_list) }\n      [SUBPARTITIONS num]\n    ]\n    [(partition_definition [, partition_definition] ...)]\n\npartition_definition:\n    PARTITION partition_name\n        [VALUES {LESS THAN {(expr) | MAXVALUE} | IN (value_list)}]\n        [[STORAGE] ENGINE [=] engine_name]\n        [COMMENT [=] 'comment_text' ]\n        [DATA DIRECTORY [=] 'data_dir']\n        [INDEX DIRECTORY [=] 'index_dir']\n        [MAX_ROWS [=] max_number_of_rows]\n        [MIN_ROWS [=] min_number_of_rows]\n        [TABLESPACE [=] tablespace_name]\n        [NODEGROUP [=] node_group_id]\n        [(subpartition_definition [, subpartition_definition] ...)]\n\nsubpartition_definition:\n    SUBPARTITION logical_name\n        [[STORAGE] ENGINE [=] engine_name]\n        [COMMENT [=] 'comment_text' ]\n        [DATA DIRECTORY [=] 'data_dir']\n        [INDEX DIRECTORY [=] 'index_dir']\n        [MAX_ROWS [=] max_number_of_rows]\n        [MIN_ROWS [=] min_number_of_rows]\n        [TABLESPACE [=] tablespace_name]\n        [NODEGROUP [=] node_group_id]\n\nselect_statement:\n    [IGNORE | REPLACE] [AS] SELECT ...   (Some legal select statement)"
                    },
                    {
                        title: "full delete",
                        key: "group-1-8-4",
                        content: "DELETE [LOW_PRIORITY] [QUICK] [IGNORE] FROM tbl_name\n    [WHERE where_condition]\n    [ORDER BY ...]\n    [LIMIT row_count]\n\nDELETE [LOW_PRIORITY] [QUICK] [IGNORE]\n    tbl_name[.*] [, tbl_name[.*]] ...\n    FROM table_references\n    [WHERE where_condition]\n\nDELETE [LOW_PRIORITY] [QUICK] [IGNORE]\n    FROM tbl_name[.*] [, tbl_name[.*]] ...\n    USING table_references\n    [WHERE where_condition]"
                    },
                    {
                        title: "full insert",
                        key: "group-1-8-5",
                        content: "INSERT [LOW_PRIORITY | DELAYED | HIGH_PRIORITY] [IGNORE]\n    [INTO] tbl_name [(col_name,...)]\n    {VALUES | VALUE} ({expr | DEFAULT},...),(...),...\n    [ ON DUPLICATE KEY UPDATE\n      col_name=expr\n        [, col_name=expr] ... ]\n\nINSERT [LOW_PRIORITY | DELAYED | HIGH_PRIORITY] [IGNORE]\n    [INTO] tbl_name\n    SET col_name={expr | DEFAULT}, ...\n    [ ON DUPLICATE KEY UPDATE\n      col_name=expr\n        [, col_name=expr] ... ]\n\nINSERT [LOW_PRIORITY | HIGH_PRIORITY] [IGNORE]\n    [INTO] tbl_name [(col_name,...)]\n    SELECT ...\n    [ ON DUPLICATE KEY UPDATE\n      col_name=expr\n        [, col_name=expr] ... ]"
                    },
                    {
                        title: "full replace",
                        key: "group-1-8-6",
                        content: "REPLACE [LOW_PRIORITY | DELAYED]\n    [INTO] tbl_name [(col_name,...)]\n    {VALUES | VALUE} ({expr | DEFAULT},...),(...),...\n\nREPLACE [LOW_PRIORITY | DELAYED]\n    [INTO] tbl_name\n    SET col_name={expr | DEFAULT}, ...\n\nREPLACE [LOW_PRIORITY | DELAYED]\n    [INTO] tbl_name [(col_name,...)]\n    SELECT ..."
                    },
                    {
                        title: "full update",
                        key: "group-1-8-7",
                        content: "UPDATE [LOW_PRIORITY] [IGNORE] tbl_name\n    SET col_name1={expr1|DEFAULT} [, col_name2={expr2|DEFAULT}] ...\n    [WHERE where_condition]\n    [ORDER BY ...]\n    [LIMIT row_count]\n\nUPDATE [LOW_PRIORITY] [IGNORE] table_references\n    SET col_name1={expr1|DEFAULT} [, col_name2={expr2|DEFAULT}] ...\n    [WHERE where_condition]"
                    },
                    {
                        title: "kill thread",
                        key: "group-1-8-8",
                        content: "KILL [CONNECTION | QUERY] thread_id"
                    },
                    {
                        title: "optimize table",
                        key: "group-1-8-9",
                        content: "OPTIMIZE [LOCAL | NO_WRITE_TO_BINLOG] TABLE tbl_name [, tbl_name] ..."
                    },
                    {
                        title: "repair table",
                        key: "group-1-8-10",
                        content: "REPAIR [LOCAL | NO_WRITE_TO_BINLOG] TABLE\n    tbl_name [, tbl_name] ... [QUICK] [EXTENDED] [USE_FRM]"
                    },
                    {
                        title: "set variable",
                        key: "group-1-8-11",
                        content: "SET variable_assignment [, variable_assignment] ...\n \nvariable_assignment:\n      user_var_name = expr\n    | [GLOBAL | SESSION] system_var_name = expr\n    | @@[global. | session.]system_var_name = expr"
                    },
                    {
                        title: "full select",
                        key: "group-1-8-12",
                        content: "SELECT\n    [ALL | DISTINCT | DISTINCTROW ]\n      [HIGH_PRIORITY]\n      [STRAIGHT_JOIN]\n      [SQL_SMALL_RESULT] [SQL_BIG_RESULT] [SQL_BUFFER_RESULT]\n      [SQL_CACHE | SQL_NO_CACHE] [SQL_CALC_FOUND_ROWS]\n    select_expr, ...\n    [FROM table_references\n    [WHERE where_condition]\n    [GROUP BY {col_name | expr | position}\n      [ASC | DESC], ... [WITH ROLLUP]]\n    [HAVING where_condition]\n    [ORDER BY {col_name | expr | position}\n      [ASC | DESC], ...]\n    [LIMIT {[offset,] row_count | row_count OFFSET offset}]\n    [PROCEDURE procedure_name(argument_list)]\n    [INTO OUTFILE 'file_name' export_options\n      | INTO DUMPFILE 'file_name'\n      | INTO var_name [, var_name]]\n    [FOR UPDATE | LOCK IN SHARE MODE]]"
                    },
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
                children: [
                    {
                        title: "ascii",
                        key: "group-2-0-0",
                        content: "ascii(str)"
                    },
                    {
                        title: "bin",
                        key: "group-2-0-1",
                        content: "bin(n)"
                    },
                    {
                        title: "bit_length",
                        key: "group-2-0-2",
                        content: "bit_length(str)"
                    },
                    {
                        title: "char",
                        key: "group-2-0-3",
                        content: "char(n,... [using charset])"
                    },
                    {
                        title: "character_length",
                        key: "group-2-0-4",
                        content: "character_length(str)"
                    },
                    {
                        title: "char_length",
                        key: "group-2-0-5",
                        content: "char_length(str)"
                    },
                    {
                        title: "compress",
                        key: "group-2-0-6",
                        content: "compress(string_to_compress)"
                    },
                    {
                        title: "concat_ws",
                        key: "group-2-0-7",
                        content: "concat_ws(separator,str1,str2,...)"
                    },
                    {
                        title: "conv",
                        key: "group-2-0-8",
                        content: "conv(n,from_base,to_base)"
                    },
                    {
                        title: "elt",
                        key: "group-2-0-9",
                        content: "elt(n,str1,str2,str3,...)"
                    },
                    {
                        title: "export_set",
                        key: "group-2-0-10",
                        content: "export_set(bits,on,off[,separator[,number_of_bits]])"
                    },
                    {
                        title: "field",
                        key: "group-2-0-11",
                        content: "field(str,str1,str2,str3,...)"
                    },
                    {
                        title: "find_in_set",
                        key: "group-2-0-12",
                        content: "find_in_set(str,strlist)"
                    },
                    {
                        title: "hex",
                        key: "group-2-0-13",
                        content: "hex(n_or_s)"
                    },
                    {
                        title: "insert",
                        key: "group-2-0-14",
                        content: "insert(str,pos,len,newstr)"
                    },
                    {
                        title: "instr",
                        key: "group-2-0-15",
                        content: "instr(str,substr)"
                    },
                    {
                        title: "lcase",
                        key: "group-2-0-16",
                        content: "lcase(str)"
                    },
                    {
                        title: "left",
                        key: "group-2-0-17",
                        content: "left(str,len)"
                    },
                    {
                        title: "length",
                        key: "group-2-0-18",
                        content: "length(str)"
                    },
                    {
                        title: "load_file",
                        key: "group-2-0-19",
                        content: "load_file(file_name)"
                    },
                    {
                        title: "locate",
                        key: "group-2-0-20",
                        content: "locate(substr,str) , locate(substr,str,pos)"
                    },
                    {
                        title: "lower",
                        key: "group-2-0-21",
                        content: "lower(str)"
                    },
                    {
                        title: "lpad",
                        key: "group-2-0-22",
                        content: "lpad(str,len,padstr)"
                    },
                    {
                        title: "ltrim",
                        key: "group-2-0-23",
                        content: "ltrim(str)"
                    },
                    {
                        title: "make_set",
                        key: "group-2-0-24",
                        content: "make_set(bits,str1,str2,...)"
                    },
                    {
                        title: "mid",
                        key: "group-2-0-25",
                        content: "mid(str,pos,len)"
                    },
                    {
                        title: "oct",
                        key: "group-2-0-26",
                        content: "oct(n)"
                    },
                    {
                        title: "octet_length",
                        key: "group-2-0-27",
                        content: "octet_length(str)"
                    },
                    {
                        title: "ord",
                        key: "group-2-0-28",
                        content: "ord(str)"
                    },
                    {
                        title: "position",
                        key: "group-2-0-29",
                        content: "position(substr in str)"
                    },
                    {
                        title: "quote",
                        key: "group-2-0-30",
                        content: "quote(str)"
                    },
                    {
                        title: "repeat",
                        key: "group-2-0-31",
                        content: "repeat(str,count)"
                    },
                    {
                        title: "replace",
                        key: "group-2-0-32",
                        content: "replace(str,from_str,to_str)"
                    },
                    {
                        title: "reverse",
                        key: "group-2-0-33",
                        content: "reverse(str)"
                    },
                    {
                        title: "right",
                        key: "group-2-0-34",
                        content: "right(str,len)"
                    },
                    {
                        title: "rpad",
                        key: "group-2-0-35",
                        content: "rpad(str,len,padstr)"
                    },
                    {
                        title: "rtrim",
                        key: "group-2-0-36",
                        content: "rtrim(str)"
                    },
                    {
                        title: "soundex",
                        key: "group-2-0-37",
                        content: "soundex(str)"
                    },
                    {
                        title: "space",
                        key: "group-2-0-38",
                        content: "space(n)"
                    },
                    {
                        title: "strcmp",
                        key: "group-2-0-39",
                        content: "strcmp(expr1,expr2)"
                    },
                    {
                        title: "substring",
                        key: "group-2-0-40",
                        content: "substring(str,pos) , substring(str from pos) substring(str,pos,len) , substring(str from pos for len)"
                    },
                    {
                        title: "substring_index",
                        key: "group-2-0-41",
                        content: "substring_index(str,delim,count)"
                    },
                    {
                        title: "trim",
                        key: "group-2-0-42",
                        content: "trim([{both | leading | trailing} [remstr] from] str) trim(remstr from] str)"
                    },
                    {
                        title: "ucase",
                        key: "group-2-0-43",
                        content: "ucase(str)"
                    },
                    {
                        title: "uncompress",
                        key: "group-2-0-44",
                        content: "uncompress(string_to_uncompress)"
                    },
                    {
                        title: "uncompressed_length",
                        key: "group-2-0-45",
                        content: "uncompressed_length(compressed_string)"
                    },
                    {
                        title: "unhex",
                        key: "group-2-0-46",
                        content: "unhex(str)"
                    },
                    {
                        title: "upper",
                        key: "group-2-0-47",
                        content: "upper(str)"
                    },
                ]
            },
            {
                title: "数值型",
                key: "group-2-1",
                children: [
                    {
                        title: "abs",
                        key: "group-2-1-0",
                        content: "abs(x)"
                    },
                    {
                        title: "acos",
                        key: "group-2-1-1",
                        content: "acos(x)"
                    },
                    {
                        title: "asin",
                        key: "group-2-1-2",
                        content: "asin(x)"
                    },
                    {
                        title: "atan",
                        key: "group-2-1-3",
                        content: "atan(x)"
                    },
                    {
                        title: "atan2",
                        key: "group-2-1-4",
                        content: "atan2(y,x)"
                    },
                    {
                        title: "ceiling",
                        key: "group-2-1-5",
                        content: "ceiling(x) ceil(x)"
                    },
                    {
                        title: "cos",
                        key: "group-2-1-6",
                        content: "cos(x)"
                    },
                    {
                        title: "cot",
                        key: "group-2-1-7",
                        content: "cot(x)"
                    },
                    {
                        title: "crc32",
                        key: "group-2-1-8",
                        content: "crc32(expr)"
                    },
                    {
                        title: "degrees",
                        key: "group-2-1-9",
                        content: "degrees(x)"
                    },
                    {
                        title: "div",
                        key: "group-2-1-10",
                        content: "div"
                    },
                    {
                        title: "exp",
                        key: "group-2-1-11",
                        content: "exp(x)"
                    },
                    {
                        title: "floor",
                        key: "group-2-1-12",
                        content: "floor(x)"
                    },
                    {
                        title: "log10",
                        key: "group-2-1-13",
                        content: "log10(x)"
                    },
                    {
                        title: "log2",
                        key: "group-2-1-14",
                        content: "log2(x)"
                    },
                    {
                        title: "mod",
                        key: "group-2-1-15",
                        content: "mod(n,m) , n % m n mod m"
                    },
                    {
                        title: "pi",
                        key: "group-2-1-16",
                        content: "pi()"
                    },
                    {
                        title: "pow",
                        key: "group-2-1-17",
                        content: "pow(x,y) , power(x,y)"
                    },
                    {
                        title: "radians",
                        key: "group-2-1-18",
                        content: "radians(x)"
                    },
                    {
                        title: "rand",
                        key: "group-2-1-19",
                        content: "rand() rand(n)"
                    },
                    {
                        title: "round",
                        key: "group-2-1-20",
                        content: "round(x) round(x,d)"
                    },
                    {
                        title: "sign",
                        key: "group-2-1-21",
                        content: "sign(x)"
                    },
                    {
                        title: "sin",
                        key: "group-2-1-22",
                        content: "sin(x)"
                    },
                    {
                        title: "sqrt",
                        key: "group-2-1-23",
                        content: "sqrt(x)"
                    },
                    {
                        title: "tan",
                        key: "group-2-1-24",
                        content: "tan(x)"
                    },
                ]
            },
            {
                title: "日期型",
                key: "group-2-2",
                children: [
                    {
                        title: "adddate",
                        key: "group-2-2-0",
                        content: "adddate(date,interval expr type)\nadddate(expr,days)"
                    },
                    {
                        title: "addtime",
                        key: "group-2-2-1",
                        content: "addtime(expr,expr2)"
                    },
                    {
                        title: "convert_tz",
                        key: "group-2-2-2",
                        content: "convert_tz(dt,from_tz,to_tz)"
                    },
                    {
                        title: "curdate",
                        key: "group-2-2-3",
                        content: "curdate()"
                    },
                    {
                        title: "current_date",
                        key: "group-2-2-4",
                        content: "current_date()"
                    },
                    {
                        title: "current_time",
                        key: "group-2-2-5",
                        content: "current_time()"
                    },
                    {
                        title: "current_timestamp",
                        key: "group-2-2-6",
                        content: "current_timestamp()"
                    },
                    {
                        title: "curtime",
                        key: "group-2-2-7",
                        content: "curtime()"
                    },
                    {
                        title: "date",
                        key: "group-2-2-8",
                        content: "date(expr)"
                    },
                    {
                        title: "datediff",
                        key: "group-2-2-9",
                        content: "datediff(expr,expr2)"
                    },
                    {
                        title: "date_add",
                        key: "group-2-2-10",
                        content: "date_add(date,interval expr type) "
                    },
                    {
                        title: "date_format",
                        key: "group-2-2-11",
                        content: "date_format(date,format)"
                    },
                    {
                        title: "date_add",
                        key: "group-2-2-12",
                        content: "date_add(date,interval expr type)"
                    },
                    {
                        title: "day",
                        key: "group-2-2-13",
                        content: "day(date)"
                    },
                    {
                        title: "dayname",
                        key: "group-2-2-14",
                        content: "dayname(date)"
                    },
                    {
                        title: "dayofmonth",
                        key: "group-2-2-15",
                        content: "dayofmonth(date)"
                    },
                    {
                        title: "dayofweek",
                        key: "group-2-2-16",
                        content: "dayofweek(date)"
                    },
                    {
                        title: "dayofyear",
                        key: "group-2-2-17",
                        content: "dayofyear(date)"
                    },
                    {
                        title: "extract",
                        key: "group-2-2-18",
                        content: "extract(type from date)"
                    },
                    {
                        title: "from_days",
                        key: "group-2-2-19",
                        content: "from_days(n)"
                    },
                    {
                        title: "from_unixtime",
                        key: "group-2-2-20",
                        content: "from_unixtime(unix_timestamp)\nfrom_unixtime(unix_timestamp,format)"
                    },
                    {
                        title: "get_format",
                        key: "group-2-2-21",
                        content: "get_format(date|time|datetime, 'eur'|'usa'|'jis'|'iso'|'internal')"
                    },
                    {
                        title: "hour",
                        key: "group-2-2-22",
                        content: "hour(time)"
                    },
                    {
                        title: "last_day",
                        key: "group-2-2-23",
                        content: "last_day(date)"
                    },
                    {
                        title: "ln",
                        key: "group-2-2-24",
                        content: "ln(x)"
                    },
                    {
                        title: "localtime",
                        key: "group-2-2-25",
                        content: "localtime()"
                    },
                    {
                        title: "localtimestamp",
                        key: "group-2-2-26",
                        content: "localtimestamp()"
                    },
                    {
                        title: "log",
                        key: "group-2-2-27",
                        content: "log(x) log(b,x)"
                    },
                    {
                        title: "makedate",
                        key: "group-2-2-28",
                        content: "makedate(year,dayofyear)"
                    },
                    {
                        title: "maketime",
                        key: "group-2-2-29",
                        content: "maketime(hour,minute,second)"
                    },
                    {
                        title: "microsecond",
                        key: "group-2-2-30",
                        content: "microsecond(expr)"
                    },
                    {
                        title: "minute",
                        key: "group-2-2-31",
                        content: "minute(time)"
                    },
                    {
                        title: "month",
                        key: "group-2-2-32",
                        content: "month(date)"
                    },
                    {
                        title: "monthname",
                        key: "group-2-2-33",
                        content: "monthname(date)"
                    },
                    {
                        title: "now",
                        key: "group-2-2-34",
                        content: "now()"
                    },
                    {
                        title: "period_add",
                        key: "group-2-2-35",
                        content: "period_add(p,n)"
                    },
                    {
                        title: "period_diff",
                        key: "group-2-2-36",
                        content: "period_diff(p1,p2)"
                    },
                    {
                        title: "quarter",
                        key: "group-2-2-37",
                        content: "quarter(date)"
                    },
                    {
                        title: "second",
                        key: "group-2-2-38",
                        content: "second(time)"
                    },
                    {
                        title: "sec_to_time",
                        key: "group-2-2-39",
                        content: "sec_to_time(seconds)"
                    },
                    {
                        title: "str_to_date",
                        key: "group-2-2-40",
                        content: "str_to_date(str,format)"
                    },
                    {
                        title: "subdate",
                        key: "group-2-2-41",
                        content: "subdate(date,interval expr type) subdate(expr,days)"
                    },
                    {
                        title: "subtime(expr,expr2)",
                        key: "group-2-2-42",
                        content: "c(expr,expr2)"
                    },
                    {
                        title: "sysdate",
                        key: "group-2-2-43",
                        content: "sysdate()"
                    },
                    {
                        title: "time",
                        key: "group-2-2-44",
                        content: "time(expr)"
                    },
                    {
                        title: "timediff",
                        key: "group-2-2-45",
                        content: "timediff(expr,expr2)"
                    },
                    {
                        title: "timestampadd",
                        key: "group-2-2-46",
                        content: "timestampadd(interval,int_expr,datetime_expr)"
                    },
                    {
                        title: "time_format",
                        key: "group-2-2-47",
                        content: "time_format(time,format)"
                    },
                    {
                        title: "time_to_sec",
                        key: "group-2-2-48",
                        content: "time_to_sec(time)"
                    },
                    {
                        title: "to_days",
                        key: "group-2-2-49",
                        content: "to_days(date)"
                    },
                    {
                        title: "truncate",
                        key: "group-2-2-50",
                        content: "truncate(x,d)"
                    },
                    {
                        title: "unix_timestamp",
                        key: "group-2-2-51",
                        content: "unix_timestamp()\nunix_timestamp(date)"
                    },
                    {
                        title: "utc_date",
                        key: "group-2-2-52",
                        content: "utc_date()"
                    },
                    {
                        title: "utc_time",
                        key: "group-2-2-53",
                        content: "utc_time()"
                    },
                    {
                        title: "utc_timestamp",
                        key: "group-2-2-54",
                        content: "utc_timestamp()"
                    },
                    {
                        title: "week",
                        key: "group-2-2-55",
                        content: "week(date[,mode])"
                    },
                    {
                        title: "weekday",
                        key: "group-2-2-56",
                        content: "weekday(date)"
                    },
                    {
                        title: "weekofyear",
                        key: "group-2-2-57",
                        content: "weekofyear(date)"
                    },
                    {
                        title: "year",
                        key: "group-2-2-58",
                        content: "year(date)"
                    },
                    {
                        title: "yearweek",
                        key: "group-2-2-59",
                        content: "yearweek(date),\nyearweek(date,start)"
                    }
                ]
            },
            {
                title: "统计函数",
                key: "group-2-3",
                children: [
                    {
                        title: "avg",
                        key: "group-2-3-0",
                        content: "avg([distinct] expr)"
                    },
                    {
                        title: "bit_and",
                        key: "group-2-3-1",
                        content: "bit_and(expr)"
                    },
                    {
                        title: "bit_or",
                        key: "group-2-3-2",
                        content: "bit_or(expr)"
                    },
                    {
                        title: "bit_xor",
                        key: "group-2-3-3",
                        content: "bit_xor(expr)"
                    },
                    {
                        title: "count",
                        key: "group-2-3-4",
                        content: "count(distinct expr,[expr...])"
                    },
                    {
                        title: "group_concat",
                        key: "group-2-3-5",
                        content: "group_concat(expr)"
                    },
                    {
                        title: "min",
                        key: "group-2-3-6",
                        content: "min([distinct] expr), max([distinct] expr)"
                    },
                    {
                        title: "std",
                        key: "group-2-3-7",
                        content: "std(expr) stddev(expr)"
                    },
                    {
                        title: "stddev_pop",
                        key: "group-2-3-8",
                        content: "stddev_pop(expr)"
                    },
                    {
                        title: "stddev_samp",
                        key: "group-2-3-9",
                        content: "stddev_samp(expr)"
                    },
                    {
                        title: "sum",
                        key: "group-2-3-10",
                        content: "sum([distinct] expr)"
                    },
                    {
                        title: "variance",
                        key: "group-2-3-11",
                        content: "variance(expr)"
                    },
                    {
                        title: "var_pop",
                        key: "group-2-3-12",
                        content: "var_pop(expr)"
                    },
                    {
                        title: "var_samp",
                        key: "group-2-3-13",
                        content: "var_samp(expr)"
                    }
                ]
            },
            // {
            //     title: "其他",
            //     key: "group-2-4",
            //     children: []
            // }
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
