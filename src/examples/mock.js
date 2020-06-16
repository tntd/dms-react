const createTableSql = [
    {
        'Create Table': "CREATE TABLE `book` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '专辑唯一标识',\n  `owner_id` bigint(20) DEFAULT NULL COMMENT '用户uid',\n  `name` varchar(255) COLLATE utf8mb4_bin NOT NULL COMMENT '专辑名称',\n  `description` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '专辑描述',\n  `cover` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL COMMENT 'book封面',\n  `tag_id` int(11) DEFAULT NULL COMMENT '所属标签',\n  `type` varchar(32) COLLATE utf8mb4_bin DEFAULT 'book' COMMENT '知识库类型\\nbook\\nproject\\nprd',\n  `recycle_status` int(11) NOT NULL DEFAULT '1' COMMENT '项目状态：\n1、正常\n0、已删除',\n  `public` int(11) DEFAULT '0' COMMENT '知识库访问权限\n 0: 私有，默认只有自己可访问；1:公共知识库，所有人可访问',\n  `good_status` int(1) DEFAULT '0' COMMENT '精选状态 0: 非精选，1: 已推荐精选待审核待， 2:精选',\n  `is_finish` int(11) DEFAULT '0' COMMENT '是否完结：0还没有、1已完结',\n  `gmt_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',\n  `gmt_modify` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=2692 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin ROW_FORMAT=COMPACT COMMENT='知识广场-专辑'"
    }
];

export const databases = [
    {
        "Database": "information_schema"
    },
    {
        "Database": "sinan"
    },
    {
        "Database": "test"
    }
];

export const tables = [
    {
        "Tables_in_sinan": "article_template"
    },
    {
        "Tables_in_sinan": "article_version"
    },
    {
        "Tables_in_sinan": "auth_token"
    },
    {
        "Tables_in_sinan": "biz_line"
    },
    {
        "Tables_in_sinan": "book"
    },
    {
        "Tables_in_sinan": "book_article"
    },
    {
        "Tables_in_sinan": "book_catalog"
    },
    {
        "Tables_in_sinan": "book_recommend"
    },
    {
        "Tables_in_sinan": "book_tag"
    },
    {
        "Tables_in_sinan": "collaboration"
    },
    {
        "Tables_in_sinan": "comment"
    },
    {
        "Tables_in_sinan": "department"
    },
    {
        "Tables_in_sinan": "development_env"
    },
    {
        "Tables_in_sinan": "disk"
    },
    {
        "Tables_in_sinan": "disk_version"
    },
    {
        "Tables_in_sinan": "dms_query"
    },
    {
        "Tables_in_sinan": "env_info"
    },
    {
        "Tables_in_sinan": "faq_article"
    },
    {
        "Tables_in_sinan": "faq_group"
    },
    {
        "Tables_in_sinan": "favicon"
    },
    {
        "Tables_in_sinan": "favorite"
    },
    {
        "Tables_in_sinan": "feedback"
    },
    {
        "Tables_in_sinan": "feedback_vote"
    },
    {
        "Tables_in_sinan": "graph_group"
    },
    {
        "Tables_in_sinan": "graph_img"
    },
    {
        "Tables_in_sinan": "i18n_catalog"
    },
    {
        "Tables_in_sinan": "i18n_catalog_history"
    },
    {
        "Tables_in_sinan": "i18n_version"
    },
    {
        "Tables_in_sinan": "invite_code"
    },
    {
        "Tables_in_sinan": "log"
    },
    {
        "Tables_in_sinan": "mock_catalog"
    },
    {
        "Tables_in_sinan": "mock_document"
    },
    {
        "Tables_in_sinan": "mock_document_history"
    },
    {
        "Tables_in_sinan": "project"
    },
    {
        "Tables_in_sinan": "project_custom"
    },
    {
        "Tables_in_sinan": "project_prefix"
    },
    {
        "Tables_in_sinan": "project_stick"
    },
    {
        "Tables_in_sinan": "project_subitem"
    },
    {
        "Tables_in_sinan": "project_version"
    },
    {
        "Tables_in_sinan": "project_version_branch"
    },
    {
        "Tables_in_sinan": "project_version_player"
    },
    {
        "Tables_in_sinan": "project_version_update"
    },
    {
        "Tables_in_sinan": "share"
    },
    {
        "Tables_in_sinan": "shortcut"
    },
    {
        "Tables_in_sinan": "solution"
    },
    {
        "Tables_in_sinan": "solution_collaboration"
    },
    {
        "Tables_in_sinan": "solution_player"
    },
    {
        "Tables_in_sinan": "solution_version"
    },
    {
        "Tables_in_sinan": "solution_version_item"
    },
    {
        "Tables_in_sinan": "solution_version_link"
    },
    {
        "Tables_in_sinan": "swagger_history"
    },
    {
        "Tables_in_sinan": "third_data"
    },
    {
        "Tables_in_sinan": "user_info"
    },
    {
        "Tables_in_sinan": "user_job"
    },
    {
        "Tables_in_sinan": "user_relation"
    },
    {
        "Tables_in_sinan": "user_role"
    },
    {
        "Tables_in_sinan": "user_role_menu"
    },
    {
        "Tables_in_sinan": "user_role_power"
    },
    {
        "Tables_in_sinan": "user_team"
    },
    {
        "Tables_in_sinan": "xx"
    }
];

export const tableContent = [
    {
        "id": "012d3e0ce24a49a0a6f25ae31e39aad9",
        "owner_id": null,
        "name": "司南0.0.1",
        "description": null,
        "cover": null,
        "tag_id": null,
        "type": "project",
        "recycle_status": 1,
        "public": 0,
        "good_status": 0,
        "is_finish": 0,
        "gmt_create": "2019-11-14T05:06:28.000Z",
        "gmt_modify": "2019-11-14T05:06:28.000Z"
    },
    {
        "id": 15,
        "owner_id": null,
        "name": "苗壮1.0",
        "description": null,
        "cover": null,
        "tag_id": null,
        "type": "project",
        "recycle_status": 1,
        "public": 0,
        "good_status": 0,
        "is_finish": 0,
        "gmt_create": "2019-11-15T08:08:24.000Z",
        "gmt_modify": "2019-11-15T08:08:24.000Z"
    },
    {
        "id": 25,
        "owner_id": null,
        "name": "测试项目1.0.0",
        "description": null,
        "cover": null,
        "tag_id": null,
        "type": "project",
        "recycle_status": 1,
        "public": 0,
        "good_status": 0,
        "is_finish": 0,
        "gmt_create": "2019-11-18T01:43:35.000Z",
        "gmt_modify": "2019-11-18T01:43:35.000Z"
    },
    {
        "id": 35,
        "owner_id": 55,
        "name": "说透中台",
        "description": "从概念到落地一站通关",
        "cover": "https://sinanstg.tongdun.me/cdn/bucket/20200108202909459_timg (1).jpeg",
        "tag_id": 145,
        "type": "book",
        "recycle_status": 1,
        "public": 1,
        "good_status": 2,
        "is_finish": 1,
        "gmt_create": "2019-11-19T12:36:14.000Z",
        "gmt_modify": "2020-02-28T05:46:04.000Z"
    },
    {
        "id": 45,
        "owner_id": 55,
        "name": "浏览器工作原理与实践",
        "description": "参透了浏览器的工作原理，你就能解决80%的前端难题",
        "cover": "https://sinan.tongdun.me/cdn/bucket/20200108111829454_20191119203837305.jpeg",
        "tag_id": 75,
        "type": "book",
        "recycle_status": 1,
        "public": 1,
        "good_status": 2,
        "is_finish": 1,
        "gmt_create": "2019-11-19T12:38:39.000Z",
        "gmt_modify": "2020-02-28T05:46:39.000Z"
    },
    {
        "id": 55,
        "owner_id": 25,
        "name": "用npm script打造超溜的前端工作流",
        "description": "抛弃笨重的构建工具，拥抱轻巧而不失强大的 npm script，随小册赠送视频版教程。",
        "cover": "https://sinan.tongdun.me/cdn/bucket/20200115103939128_huojian.jpeg",
        "tag_id": 75,
        "type": "book",
        "recycle_status": 1,
        "public": 1,
        "good_status": 2,
        "is_finish": 1,
        "gmt_create": "2019-11-19T12:45:46.000Z",
        "gmt_modify": "2020-02-28T07:28:37.000Z"
    },
    {
        "id": 65,
        "owner_id": 55,
        "name": "优秀的前端团队是如何炼成的",
        "description": "技术栈基建规划如何有效落地，新人同学如何快速成长，枯燥机械式工作中如何突破天花板，帮助工程师更好把握自己职业脉络，做最优技术决策，实现体系化突破成长。",
        "cover": "https://sinan.tongdun.me/cdn/bucket/20200108110120534_20191119204728419.jpeg",
        "tag_id": 75,
        "type": "book",
        "recycle_status": 1,
        "public": 1,
        "good_status": 2,
        "is_finish": 0,
        "gmt_create": "2019-11-19T12:47:30.000Z",
        "gmt_modify": "2020-02-28T14:38:46.000Z"
    }
];

export const tableInfo = [{
    "Name": "book",
    "Engine": "InnoDB",
    "Version": 10,
    "Row_format": "Compact",
    "Rows": 368,
    "Avg_row_length": 222,
    "Data_length": 81920,
    "Max_data_length": 0,
    "Index_length": 0,
    "Data_free": 0,
    "Auto_increment": 3955,
    "Create_time": "2020-02-28T03:27:39.000Z",
    "Update_time": "2020-06-03T07:05:55.000Z",
    "Check_time": null,
    "Collation": "utf8mb4_bin",
    "Checksum": null,
    "Create_options": "row_format=COMPACT",
    "Comment": "知识广场-专辑"
}];

export const tableColumns = [
    {
        "Field": "id",
        "Type": "bigint(20)",
        "Null": "NO",
        "Key": "PRI",
        "Default": null,
        "Extra": "auto_increment"
    },
    {
        "Field": "owner_id",
        "Type": "bigint(20)",
        "Null": "YES",
        "Key": "",
        "Default": null,
        "Extra": ""
    },
    {
        "Field": "name",
        "Type": "varchar(255)",
        "Null": "NO",
        "Key": "",
        "Default": null,
        "Extra": ""
    },
    {
        "Field": "description",
        "Type": "varchar(255)",
        "Null": "YES",
        "Key": "",
        "Default": null,
        "Extra": ""
    },
    {
        "Field": "cover",
        "Type": "varchar(255)",
        "Null": "YES",
        "Key": "",
        "Default": null,
        "Extra": ""
    },
    {
        "Field": "tag_id",
        "Type": "int(11)",
        "Null": "YES",
        "Key": "",
        "Default": null,
        "Extra": ""
    },
    {
        "Field": "type",
        "Type": "varchar(32)",
        "Null": "YES",
        "Key": "",
        "Default": "book",
        "Extra": ""
    },
    {
        "Field": "recycle_status",
        "Type": "int(11)",
        "Null": "NO",
        "Key": "",
        "Default": "1",
        "Extra": ""
    },
    {
        "Field": "public",
        "Type": "int(11)",
        "Null": "YES",
        "Key": "",
        "Default": "0",
        "Extra": ""
    },
    {
        "Field": "good_status",
        "Type": "int(1)",
        "Null": "YES",
        "Key": "",
        "Default": "0",
        "Extra": ""
    },
    {
        "Field": "is_finish",
        "Type": "int(11)",
        "Null": "YES",
        "Key": "",
        "Default": "0",
        "Extra": ""
    },
    {
        "Field": "gmt_create",
        "Type": "timestamp",
        "Null": "NO",
        "Key": "",
        "Default": "CURRENT_TIMESTAMP",
        "Extra": ""
    },
    {
        "Field": "gmt_modify",
        "Type": "timestamp",
        "Null": "NO",
        "Key": "",
        "Default": "CURRENT_TIMESTAMP",
        "Extra": "on update CURRENT_TIMESTAMP"
    }
];

export const allColumns = [
    {
        "table_name": "bifrost_custom_tree",
        "column_name": "gmt_create"
    },
    {
        "table_name": "bifrost_custom_tree",
        "column_name": "gmt_modified"
    },
    {
        "table_name": "bifrost_custom_tree",
        "column_name": "uuid"
    },
    {
        "table_name": "bifrost_custom_tree",
        "column_name": "code"
    },
    {
        "table_name": "bifrost_custom_tree",
        "column_name": "name"
    },
    {
        "table_name": "bifrost_custom_tree",
        "column_name": "type"
    },
    {
        "table_name": "bifrost_custom_tree",
        "column_name": "flag"
    },
    {
        "table_name": "bifrost_custom_tree",
        "column_name": "sort_no"
    },
    {
        "table_name": "bifrost_custom_tree",
        "column_name": "parent_uuid"
    },
    {
        "table_name": "bifrost_custom_tree",
        "column_name": "create_by"
    },
    {
        "table_name": "bifrost_custom_tree",
        "column_name": "update_by"
    },
    {
        "table_name": "bifrost_custom_tree",
        "column_name": "en_name"
    },
    {
        "table_name": "bifrost_custom_tree",
        "column_name": "icon"
    },
    {
        "table_name": "bifrost_custom_tree",
        "column_name": "path"
    },
    {
        "table_name": "bifrost_custom_tree",
        "column_name": "des"
    },
    {
        "table_name": "bifrost_custom_tree",
        "column_name": "lang_env"
    },
    {
        "table_name": "bifrost_custom_tree",
        "column_name": "responsible_person"
    },
    {
        "table_name": "bifrost_custom_tree",
        "column_name": "menus"
    },
    {
        "table_name": "bifrost_custom_tree",
        "column_name": "apply_fields"
    },
    {
        "table_name": "bifrost_custom_tree_menu_ref",
        "column_name": "gmt_create"
    },
    {
        "table_name": "bifrost_custom_tree_menu_ref",
        "column_name": "gmt_modified"
    },
    {
        "table_name": "bifrost_custom_tree_menu_ref",
        "column_name": "create_by"
    },
    {
        "table_name": "bifrost_custom_tree_menu_ref",
        "column_name": "update_by"
    },
    {
        "table_name": "bifrost_custom_tree_menu_ref",
        "column_name": "custom_tree_uuid"
    },
    {
        "table_name": "bifrost_custom_tree_menu_ref",
        "column_name": "menu_uuid"
    },
    {
        "table_name": "bifrost_custom_tree_menu_ref",
        "column_name": "sort_no"
    },
    {
        "table_name": "bifrost_function",
        "column_name": "gmt_create"
    },
    {
        "table_name": "bifrost_function",
        "column_name": "gmt_modified"
    },
    {
        "table_name": "bifrost_function",
        "column_name": "uuid"
    },
    {
        "table_name": "bifrost_function",
        "column_name": "code"
    },
    {
        "table_name": "bifrost_function",
        "column_name": "name"
    },
    {
        "table_name": "bifrost_function",
        "column_name": "sort_no"
    },
    {
        "table_name": "bifrost_function",
        "column_name": "menu_uuid"
    },
    {
        "table_name": "bifrost_function",
        "column_name": "create_by"
    },
    {
        "table_name": "bifrost_function",
        "column_name": "update_by"
    },
    {
        "table_name": "bifrost_function",
        "column_name": "en_name"
    },
    {
        "table_name": "bifrost_function",
        "column_name": "method"
    },
    {
        "table_name": "bifrost_function",
        "column_name": "path"
    },
    {
        "table_name": "bifrost_license",
        "column_name": "uuid"
    },
    {
        "table_name": "bifrost_license",
        "column_name": "solution_info_uuid"
    },
    {
        "table_name": "bifrost_license",
        "column_name": "license"
    },
    {
        "table_name": "bifrost_license",
        "column_name": "app_code"
    },
    {
        "table_name": "bifrost_license",
        "column_name": "expiration"
    },
    {
        "table_name": "bifrost_license",
        "column_name": "app_name"
    },
    {
        "table_name": "bifrost_license",
        "column_name": "left_date"
    },
    {
        "table_name": "bifrost_license",
        "column_name": "status"
    },
    {
        "table_name": "bifrost_license",
        "column_name": "type"
    },
    {
        "table_name": "bifrost_license",
        "column_name": "app_num"
    },
    {
        "table_name": "bifrost_license",
        "column_name": "public_key"
    },
    {
        "table_name": "bifrost_license",
        "column_name": "private_key"
    },
    {
        "table_name": "bifrost_license",
        "column_name": "gmt_create"
    },
    {
        "table_name": "bifrost_license",
        "column_name": "gmt_modify"
    },
    {
        "table_name": "bifrost_license",
        "column_name": "gmt_modified"
    },
    {
        "table_name": "bifrost_license_history",
        "column_name": "id"
    },
    {
        "table_name": "bifrost_license_history",
        "column_name": "license"
    },
    {
        "table_name": "bifrost_license_history",
        "column_name": "snapshot"
    },
    {
        "table_name": "bifrost_license_history",
        "column_name": "timestamp"
    },
    {
        "table_name": "bifrost_license_history",
        "column_name": "secret_key"
    },
    {
        "table_name": "bifrost_license_history",
        "column_name": "secret_pwd"
    },
    {
        "table_name": "bifrost_license_history",
        "column_name": "gmt_create"
    },
    {
        "table_name": "bifrost_license_history",
        "column_name": "gmt_modified"
    },
    {
        "table_name": "bifrost_license_history",
        "column_name": "gmt_modify"
    },
    {
        "table_name": "bifrost_menu",
        "column_name": "uuid"
    },
    {
        "table_name": "bifrost_menu",
        "column_name": "parent_uuid"
    },
    {
        "table_name": "bifrost_menu",
        "column_name": "code"
    },
    {
        "table_name": "bifrost_menu",
        "column_name": "level"
    },
    {
        "table_name": "bifrost_menu",
        "column_name": "type"
    },
    {
        "table_name": "bifrost_menu",
        "column_name": "path"
    },
    {
        "table_name": "bifrost_menu",
        "column_name": "icon"
    },
    {
        "table_name": "bifrost_menu",
        "column_name": "name"
    },
    {
        "table_name": "bifrost_menu",
        "column_name": "en_name"
    },
    {
        "table_name": "bifrost_menu",
        "column_name": "target"
    },
    {
        "table_name": "bifrost_menu",
        "column_name": "sort_no"
    },
    {
        "table_name": "bifrost_menu",
        "column_name": "version"
    },
    {
        "table_name": "bifrost_menu",
        "column_name": "create_by"
    },
    {
        "table_name": "bifrost_menu",
        "column_name": "update_by"
    },
    {
        "table_name": "bifrost_menu",
        "column_name": "gmt_create"
    },
    {
        "table_name": "bifrost_menu",
        "column_name": "gmt_modify"
    },
    {
        "table_name": "bifrost_menu",
        "column_name": "gmt_modified"
    },
    {
        "table_name": "bifrost_org",
        "column_name": "uuid"
    },
    {
        "table_name": "bifrost_org",
        "column_name": "parent_uuid"
    },
    {
        "table_name": "bifrost_org",
        "column_name": "code"
    },
    {
        "table_name": "bifrost_org",
        "column_name": "level"
    },
    {
        "table_name": "bifrost_org",
        "column_name": "name"
    },
    {
        "table_name": "bifrost_org",
        "column_name": "create_by"
    },
    {
        "table_name": "bifrost_org",
        "column_name": "update_by"
    },
    {
        "table_name": "bifrost_org",
        "column_name": "gmt_create"
    },
    {
        "table_name": "bifrost_org",
        "column_name": "gmt_modify"
    },
    {
        "table_name": "bifrost_org",
        "column_name": "gmt_modified"
    },
    {
        "table_name": "bifrost_org_menu_function",
        "column_name": "uuid"
    },
    {
        "table_name": "bifrost_org_menu_function",
        "column_name": "custom_tree_uuid"
    },
    {
        "table_name": "bifrost_org_menu_function",
        "column_name": "org_uuid"
    },
    {
        "table_name": "bifrost_org_menu_function",
        "column_name": "menu_uuid"
    },
    {
        "table_name": "bifrost_org_menu_function",
        "column_name": "function_uuid"
    },
    {
        "table_name": "bifrost_org_menu_function",
        "column_name": "create_by"
    },
    {
        "table_name": "bifrost_org_menu_function",
        "column_name": "update_by"
    },
    {
        "table_name": "bifrost_org_menu_function",
        "column_name": "gmt_create"
    },
    {
        "table_name": "bifrost_org_menu_function",
        "column_name": "gmt_modify"
    },
    {
        "table_name": "bifrost_org_menu_function",
        "column_name": "gmt_modified"
    },
    {
        "table_name": "bifrost_product",
        "column_name": "id"
    },
    {
        "table_name": "bifrost_product",
        "column_name": "product_code"
    },
    {
        "table_name": "bifrost_product",
        "column_name": "product_name"
    },
    {
        "table_name": "bifrost_product",
        "column_name": "sort"
    },
    {
        "table_name": "bifrost_product",
        "column_name": "status"
    },
    {
        "table_name": "bifrost_product",
        "column_name": "created_by"
    },
    {
        "table_name": "bifrost_product",
        "column_name": "updated_by"
    },
    {
        "table_name": "bifrost_product",
        "column_name": "gmt_create"
    },
    {
        "table_name": "bifrost_product",
        "column_name": "gmt_modify"
    },
    {
        "table_name": "bifrost_product_system",
        "column_name": "id"
    },
    {
        "table_name": "bifrost_product_system",
        "column_name": "product_id"
    },
    {
        "table_name": "bifrost_product_system",
        "column_name": "menu_uuid"
    },
    {
        "table_name": "bifrost_product_system",
        "column_name": "status"
    },
    {
        "table_name": "bifrost_product_system",
        "column_name": "created_by"
    },
    {
        "table_name": "bifrost_product_system",
        "column_name": "updated_by"
    },
    {
        "table_name": "bifrost_product_system",
        "column_name": "gmt_create"
    },
    {
        "table_name": "bifrost_product_system",
        "column_name": "gmt_modify"
    },
    {
        "table_name": "bifrost_role",
        "column_name": "uuid"
    },
    {
        "table_name": "bifrost_role",
        "column_name": "org_uuid"
    },
    {
        "table_name": "bifrost_role",
        "column_name": "code"
    },
    {
        "table_name": "bifrost_role",
        "column_name": "name"
    },
    {
        "table_name": "bifrost_role",
        "column_name": "type"
    },
    {
        "table_name": "bifrost_role",
        "column_name": "create_by"
    },
    {
        "table_name": "bifrost_role",
        "column_name": "update_by"
    },
    {
        "table_name": "bifrost_role",
        "column_name": "gmt_create"
    },
    {
        "table_name": "bifrost_role",
        "column_name": "gmt_modify"
    },
    {
        "table_name": "bifrost_role",
        "column_name": "gmt_modified"
    },
    {
        "table_name": "bifrost_role_menu_function",
        "column_name": "uuid"
    },
    {
        "table_name": "bifrost_role_menu_function",
        "column_name": "custom_tree_uuid"
    },
    {
        "table_name": "bifrost_role_menu_function",
        "column_name": "role_uuid"
    },
    {
        "table_name": "bifrost_role_menu_function",
        "column_name": "menu_uuid"
    },
    {
        "table_name": "bifrost_role_menu_function",
        "column_name": "function_uuid"
    },
    {
        "table_name": "bifrost_role_menu_function",
        "column_name": "create_by"
    },
    {
        "table_name": "bifrost_role_menu_function",
        "column_name": "update_by"
    },
    {
        "table_name": "bifrost_role_menu_function",
        "column_name": "gmt_create"
    },
    {
        "table_name": "bifrost_role_menu_function",
        "column_name": "gmt_modify"
    },
    {
        "table_name": "bifrost_role_menu_function",
        "column_name": "gmt_modified"
    },
    {
        "table_name": "bifrost_solution",
        "column_name": "uuid"
    },
    {
        "table_name": "bifrost_solution",
        "column_name": "code"
    },
    {
        "table_name": "bifrost_solution",
        "column_name": "name"
    },
    {
        "table_name": "bifrost_solution",
        "column_name": "en_name"
    },
    {
        "table_name": "bifrost_solution",
        "column_name": "icon"
    },
    {
        "table_name": "bifrost_solution",
        "column_name": "path"
    },
    {
        "table_name": "bifrost_solution",
        "column_name": "type"
    },
    {
        "table_name": "bifrost_solution",
        "column_name": "flag"
    },
    {
        "table_name": "bifrost_solution",
        "column_name": "sort_no"
    },
    {
        "table_name": "bifrost_solution",
        "column_name": "parent_uuid"
    },
    {
        "table_name": "bifrost_solution",
        "column_name": "des"
    },
    {
        "table_name": "bifrost_solution",
        "column_name": "lang_env"
    },
    {
        "table_name": "bifrost_solution",
        "column_name": "responsible_person"
    },
    {
        "table_name": "bifrost_solution",
        "column_name": "menus"
    },
    {
        "table_name": "bifrost_solution",
        "column_name": "apply_fields"
    },
    {
        "table_name": "bifrost_solution",
        "column_name": "create_by"
    },
    {
        "table_name": "bifrost_solution",
        "column_name": "update_by"
    },
    {
        "table_name": "bifrost_solution",
        "column_name": "gmt_create"
    },
    {
        "table_name": "bifrost_solution",
        "column_name": "gmt_modify"
    },
    {
        "table_name": "bifrost_solution",
        "column_name": "product_id"
    },
    {
        "table_name": "bifrost_solution",
        "column_name": "display_type"
    },
    {
        "table_name": "bifrost_solution",
        "column_name": "env_type"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "uuid"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "org_uuid"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "role_uuids"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "account"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "user_name"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "pwd"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "avatar"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "expiration"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "gender"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "app_name"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "status"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "lang"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "theme"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "layout"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "simplified"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "phone"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "role_type"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "sign"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "create_by"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "update_by"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "gmt_create"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "gmt_modify"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "gmt_modified"
    },
    {
        "table_name": "bifrost_user_copy1",
        "column_name": "gmt_create"
    },
    {
        "table_name": "bifrost_user_copy1",
        "column_name": "gmt_modify"
    },
    {
        "table_name": "bifrost_user_copy1",
        "column_name": "gmt_modified"
    },
    {
        "table_name": "bifrost_user_copy1",
        "column_name": "uuid"
    },
    {
        "table_name": "bifrost_user_copy1",
        "column_name": "account"
    },
    {
        "table_name": "bifrost_user_copy1",
        "column_name": "user_name"
    },
    {
        "table_name": "bifrost_user_copy1",
        "column_name": "pwd"
    },
    {
        "table_name": "bifrost_user_copy1",
        "column_name": "org_uuid"
    },
    {
        "table_name": "bifrost_user_copy1",
        "column_name": "role_uuids"
    },
    {
        "table_name": "bifrost_user_copy1",
        "column_name": "avatar"
    },
    {
        "table_name": "bifrost_user_copy1",
        "column_name": "expiration"
    },
    {
        "table_name": "bifrost_user_copy1",
        "column_name": "gender"
    },
    {
        "table_name": "bifrost_user_copy1",
        "column_name": "app_name"
    },
    {
        "table_name": "bifrost_user_copy1",
        "column_name": "status"
    },
    {
        "table_name": "bifrost_user_copy1",
        "column_name": "create_by"
    },
    {
        "table_name": "bifrost_user_copy1",
        "column_name": "update_by"
    },
    {
        "table_name": "bifrost_user_copy1",
        "column_name": "lang"
    },
    {
        "table_name": "bifrost_user_copy1",
        "column_name": "theme"
    },
    {
        "table_name": "bifrost_user_copy1",
        "column_name": "layout"
    },
    {
        "table_name": "bifrost_user_copy1",
        "column_name": "simplified"
    },
    {
        "table_name": "bifrost_user_copy1",
        "column_name": "phone"
    },
    {
        "table_name": "bifrost_user_copy1",
        "column_name": "sign"
    },
    {
        "table_name": "bifrost_user_history",
        "column_name": "uuid"
    },
    {
        "table_name": "bifrost_user_history",
        "column_name": "gmt_create"
    },
    {
        "table_name": "bifrost_user_history",
        "column_name": "gmt_modify"
    },
    {
        "table_name": "bifrost_user_history",
        "column_name": "gmt_modified"
    },
    {
        "table_name": "bifrost_user_history",
        "column_name": "account"
    },
    {
        "table_name": "bifrost_user_history",
        "column_name": "login_time"
    },
    {
        "table_name": "bifrost_user_history",
        "column_name": "ip_addr"
    },
    {
        "table_name": "bifrost_user_operation_history",
        "column_name": "uuid"
    },
    {
        "table_name": "bifrost_user_operation_history",
        "column_name": "menu_uuid"
    },
    {
        "table_name": "bifrost_user_operation_history",
        "column_name": "function_uuid"
    },
    {
        "table_name": "bifrost_user_operation_history",
        "column_name": "account"
    },
    {
        "table_name": "bifrost_user_operation_history",
        "column_name": "operation_time"
    },
    {
        "table_name": "bifrost_user_operation_history",
        "column_name": "operation_param"
    },
    {
        "table_name": "bifrost_user_operation_history",
        "column_name": "gmt_create"
    },
    {
        "table_name": "bifrost_user_operation_history",
        "column_name": "gmt_modify"
    },
    {
        "table_name": "bifrost_user_operation_history",
        "column_name": "gmt_modified"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "uuid"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "solution_uuid"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "dingding_sequence"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "apply_type"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "apply_status"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "apply_user"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "check_user"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "custom_code"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "custom_name"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "project_code"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "project_name"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "project_en_name"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "env"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "env_type"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "license_day"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "license_endtime"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "delay"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "app_limit"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "product_limit"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "other_limit"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "mac_address"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "ip_address"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "hard_sequence"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "remark"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "permanent_reason"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "mac_reason"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "apply_field_values"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "create_time"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "update_time"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "gmt_create"
    },
    {
        "table_name": "license_solution_info",
        "column_name": "gmt_modify"
    }
];

export default sql => {
    console.log('sql...', sql);
    if (/^SHOW DATABASES/i.test(sql)) {
        return databases;
    }

    if (/^SHOW TABLES FROM/i.test(sql)) {
        return tables;
    }

    if (/^SHOW COLUMNS FROM/i.test(sql)) {
        return tableColumns;
    }

    if (/^select \* from/i.test(sql)) {
        return tableContent;
    }

    if (/^SHOW TABLE STATUS FROM/i.test(sql)) {
        return tableInfo;
    }

    if (/^SHOW CREATE TABLE/i.test(sql)) {
        return createTableSql;
    }

    if (/^select table_name, COLUMN_NAME from information_schema.COLUMNS/i.test(sql)) {
        return allColumns;
    }
    
    return databases;
};
