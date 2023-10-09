const createTableSql = [
    {
        'Create Table': "CREATE TABLE `book` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '专辑唯一标识',\n  `owner_id` bigint(20) DEFAULT NULL COMMENT '用户uid',\n  `name` varchar(255) COLLATE utf8mb4_bin NOT NULL COMMENT '专辑名称',\n  `description` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '专辑描述',\n  `cover` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL COMMENT 'book封面',\n  `tag_id` int(11) DEFAULT NULL COMMENT '所属标签',\n  `type` varchar(32) COLLATE utf8mb4_bin DEFAULT 'book' COMMENT '知识库类型\\nbook\\nproject\\nprd',\n  `recycle_status` int(11) NOT NULL DEFAULT '1' COMMENT '项目状态：\n1、正常\n0、已删除',\n  `public` int(11) DEFAULT '0' COMMENT '知识库访问权限\n 0: 私有，默认只有自己可访问；1:公共知识库，所有人可访问',\n  `good_status` int(1) DEFAULT '0' COMMENT '精选状态 0: 非精选，1: 已推荐精选待审核待， 2:精选',\n  `is_finish` int(11) DEFAULT '0' COMMENT '是否完结：0还没有、1已完结',\n  `gmt_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',\n  `gmt_modify` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=2692 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin ROW_FORMAT=COMPACT COMMENT='知识广场-专辑'"
    }
];

export const databases = [
    {
        "Database": "sinan"
    },
    {
        "Database": "information_schema"
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
        "name": "TNT 1.0.0",
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
        "Type": "bigint",
        "Null": "NO",
        "MaxLength": null,
        "Key": "PRI",
        "Default": null,
        "Comment": "专辑唯一标识",
        "Extra": "auto_increment"
    },
    {
        "Field": "owner_id",
        "Type": "bigint",
        "Null": "YES",
        "MaxLength": null,
        "Key": "",
        "Default": null,
        "Comment": "用户uid",
        "Extra": ""
    },
    {
        "Field": "name",
        "Type": "varchar",
        "Null": "NO",
        "MaxLength": 255,
        "Key": "",
        "Default": null,
        "Comment": "专辑名称",
        "Extra": ""
    },
    {
        "Field": "description",
        "Type": "varchar",
        "Null": "YES",
        "MaxLength": 255,
        "Key": "",
        "Default": null,
        "Comment": "专辑描述",
        "Extra": ""
    },
    {
        "Field": "cover",
        "Type": "varchar",
        "Null": "YES",
        "MaxLength": 255,
        "Key": "",
        "Default": null,
        "Comment": "book封面",
        "Extra": ""
    },
    {
        "Field": "tag_id",
        "Type": "int",
        "Null": "YES",
        "MaxLength": null,
        "Key": "",
        "Default": null,
        "Comment": "所属标签",
        "Extra": ""
    },
    {
        "Field": "type",
        "Type": "varchar",
        "Null": "YES",
        "MaxLength": 32,
        "Key": "",
        "Default": "book",
        "Comment": "知识库类型\\nbook\\nproject\\nprd",
        "Extra": ""
    },
    {
        "Field": "recycle_status",
        "Type": "int",
        "Null": "NO",
        "MaxLength": null,
        "Key": "",
        "Default": "1",
        "Comment": "项目状态：\n1、正常\n0、已删除",
        "Extra": ""
    },
    {
        "Field": "public",
        "Type": "int",
        "Null": "YES",
        "MaxLength": null,
        "Key": "",
        "Default": "0",
        "Comment": "知识库访问权限\n 0: 私有，默认只有自己可访问；1:公共知识库，所有人可访问",
        "Extra": ""
    },
    {
        "Field": "good_status",
        "Type": "int",
        "Null": "YES",
        "MaxLength": null,
        "Key": "",
        "Default": "0",
        "Comment": "精选状态 0: 非精选，1: 已推荐精选待审核待， 2:精选",
        "Extra": ""
    },
    {
        "Field": "is_finish",
        "Type": "int",
        "Null": "YES",
        "MaxLength": null,
        "Key": "",
        "Default": "0",
        "Comment": "是否完结：0还没有、1已完结",
        "Extra": ""
    },
    {
        "Field": "gmt_create",
        "Type": "timestamp",
        "Null": "NO",
        "MaxLength": null,
        "Key": "",
        "Default": "CURRENT_TIMESTAMP",
        "Comment": "",
        "Extra": ""
    },
    {
        "Field": "gmt_modify",
        "Type": "timestamp",
        "Null": "NO",
        "MaxLength": null,
        "Key": "",
        "Default": "CURRENT_TIMESTAMP",
        "Comment": "",
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

export const databaseColumns = [
    {
        "tablename": "bifrost_custom_tree",
        "field": "gmt_create",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "0000-00-00 00:00:00",
        "comment": "创建时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree",
        "field": "gmt_modified",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "0000-00-00 00:00:00",
        "comment": "最后修改时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree",
        "field": "uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "PRI",
        "comment": "主键",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree",
        "field": "code",
        "type": "varchar",
        "maxlength": 128,
        "null": "NO",
        "key": "MUL",
        "comment": "自定义分组标志",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree",
        "field": "name",
        "type": "varchar",
        "maxlength": 128,
        "null": "YES",
        "key": "",
        "comment": "名称",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree",
        "field": "type",
        "type": "int",
        "null": "NO",
        "key": "",
        "default": "0",
        "comment": "类型，枚举值:0:未知、1:solution、2:group",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree",
        "field": "flag",
        "type": "int",
        "null": "YES",
        "key": "",
        "default": "0",
        "comment": "开关,0:关;1:开",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree",
        "field": "sort_no",
        "type": "int",
        "null": "YES",
        "key": "MUL",
        "comment": "分组排序，ASC",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree",
        "field": "parent_uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "YES",
        "key": "",
        "comment": "上级uuid",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree",
        "field": "create_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "创建用户账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree",
        "field": "update_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "修改用户账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree",
        "field": "en_name",
        "type": "varchar",
        "maxlength": 64,
        "null": "YES",
        "key": "",
        "comment": "英文名称",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree",
        "field": "icon",
        "type": "varchar",
        "maxlength": 512,
        "null": "YES",
        "key": "",
        "comment": "图标",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree",
        "field": "path",
        "type": "varchar",
        "maxlength": 255,
        "null": "YES",
        "key": "",
        "comment": "跳转路径",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree",
        "field": "des",
        "type": "varchar",
        "maxlength": 1000,
        "null": "YES",
        "key": "",
        "comment": "解决方案描述",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree",
        "field": "lang_env",
        "type": "varchar",
        "maxlength": 128,
        "null": "YES",
        "key": "",
        "comment": "语言环境，多种语言切换用“,”隔开：cn,en",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree",
        "field": "responsible_person",
        "type": "varchar",
        "maxlength": 100,
        "null": "YES",
        "key": "",
        "comment": "应用负责人",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree",
        "field": "menus",
        "type": "varchar",
        "maxlength": 1000,
        "null": "YES",
        "key": "",
        "comment": "当前解决方案使用到的菜单列表版本",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree",
        "field": "apply_fields",
        "type": "varchar",
        "maxlength": 1024,
        "null": "YES",
        "key": "",
        "comment": "申请字段",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree_menu_ref",
        "field": "gmt_create",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "0000-00-00 00:00:00",
        "comment": "创建时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree_menu_ref",
        "field": "gmt_modified",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "0000-00-00 00:00:00",
        "comment": "最后修改时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree_menu_ref",
        "field": "create_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "创建用户账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree_menu_ref",
        "field": "update_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "修改用户账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree_menu_ref",
        "field": "custom_tree_uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "PRI",
        "comment": "",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree_menu_ref",
        "field": "menu_uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "PRI",
        "comment": "",
        "extra": ""
    },
    {
        "tablename": "bifrost_custom_tree_menu_ref",
        "field": "sort_no",
        "type": "int",
        "null": "YES",
        "key": "MUL",
        "comment": "菜单排序，ASC",
        "extra": ""
    },
    {
        "tablename": "bifrost_function",
        "field": "gmt_create",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "0000-00-00 00:00:00",
        "comment": "创建时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_function",
        "field": "gmt_modified",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "0000-00-00 00:00:00",
        "comment": "最后修改时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_function",
        "field": "uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "PRI",
        "comment": "主键 唯一",
        "extra": ""
    },
    {
        "tablename": "bifrost_function",
        "field": "code",
        "type": "varchar",
        "maxlength": 128,
        "null": "YES",
        "key": "",
        "comment": "功能标志",
        "extra": ""
    },
    {
        "tablename": "bifrost_function",
        "field": "name",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "功能名称",
        "extra": ""
    },
    {
        "tablename": "bifrost_function",
        "field": "sort_no",
        "type": "int",
        "null": "YES",
        "key": "",
        "default": "0",
        "comment": "排序",
        "extra": ""
    },
    {
        "tablename": "bifrost_function",
        "field": "menu_uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "MUL",
        "comment": "菜单标志",
        "extra": ""
    },
    {
        "tablename": "bifrost_function",
        "field": "create_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "创建用户账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_function",
        "field": "update_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "修改用户账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_function",
        "field": "en_name",
        "type": "varchar",
        "maxlength": 64,
        "null": "YES",
        "key": "",
        "comment": "英文名称",
        "extra": ""
    },
    {
        "tablename": "bifrost_function",
        "field": "method",
        "type": "varchar",
        "maxlength": 16,
        "null": "YES",
        "key": "",
        "comment": "功能method",
        "extra": ""
    },
    {
        "tablename": "bifrost_function",
        "field": "path",
        "type": "varchar",
        "maxlength": 255,
        "null": "YES",
        "key": "",
        "comment": "功能路径",
        "extra": ""
    },
    {
        "tablename": "bifrost_license",
        "field": "uuid",
        "type": "varchar",
        "maxlength": 64,
        "null": "NO",
        "key": "PRI",
        "comment": "uuid",
        "extra": ""
    },
    {
        "tablename": "bifrost_license",
        "field": "solution_info_uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "",
        "comment": "solution_info_uuid",
        "extra": ""
    },
    {
        "tablename": "bifrost_license",
        "field": "license",
        "type": "varchar",
        "maxlength": 15000,
        "null": "NO",
        "key": "",
        "default": "",
        "comment": "license",
        "extra": ""
    },
    {
        "tablename": "bifrost_license",
        "field": "app_code",
        "type": "varchar",
        "maxlength": 64,
        "null": "NO",
        "key": "",
        "default": "",
        "comment": "project_code",
        "extra": ""
    },
    {
        "tablename": "bifrost_license",
        "field": "expiration",
        "type": "datetime",
        "null": "NO",
        "key": "",
        "comment": "过期时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_license",
        "field": "app_name",
        "type": "varchar",
        "maxlength": 64,
        "null": "YES",
        "key": "",
        "comment": "project_name",
        "extra": ""
    },
    {
        "tablename": "bifrost_license",
        "field": "left_date",
        "type": "int",
        "null": "NO",
        "key": "",
        "default": "0",
        "comment": "剩余天数",
        "extra": ""
    },
    {
        "tablename": "bifrost_license",
        "field": "status",
        "type": "tinyint",
        "null": "NO",
        "key": "",
        "default": "0",
        "comment": "状态，0：正常；1过期；",
        "extra": ""
    },
    {
        "tablename": "bifrost_license",
        "field": "type",
        "type": "tinyint",
        "null": "NO",
        "key": "",
        "default": "0",
        "comment": "类型，0：普通类型",
        "extra": ""
    },
    {
        "tablename": "bifrost_license",
        "field": "app_num",
        "type": "int",
        "null": "NO",
        "key": "",
        "default": "0",
        "comment": "应用最大个数",
        "extra": ""
    },
    {
        "tablename": "bifrost_license",
        "field": "public_key",
        "type": "varchar",
        "maxlength": 1024,
        "null": "NO",
        "key": "",
        "default": "",
        "comment": "公钥",
        "extra": ""
    },
    {
        "tablename": "bifrost_license",
        "field": "private_key",
        "type": "varchar",
        "maxlength": 1024,
        "null": "NO",
        "key": "",
        "default": "",
        "comment": "私钥",
        "extra": ""
    },
    {
        "tablename": "bifrost_license",
        "field": "gmt_create",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "创建时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_license",
        "field": "gmt_modify",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "最后修改时间",
        "extra": "on update CURRENT_TIMESTAMP"
    },
    {
        "tablename": "bifrost_license",
        "field": "gmt_modified",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "最后修改时间",
        "extra": "on update CURRENT_TIMESTAMP"
    },
    {
        "tablename": "bifrost_license_history",
        "field": "id",
        "type": "bigint",
        "null": "NO",
        "key": "PRI",
        "comment": "id",
        "extra": "auto_increment"
    },
    {
        "tablename": "bifrost_license_history",
        "field": "license",
        "type": "varchar",
        "maxlength": 128,
        "null": "NO",
        "key": "MUL",
        "comment": "主键",
        "extra": ""
    },
    {
        "tablename": "bifrost_license_history",
        "field": "snapshot",
        "type": "varchar",
        "maxlength": 255,
        "null": "NO",
        "key": "",
        "comment": "加密快照，防止恶意串改license",
        "extra": ""
    },
    {
        "tablename": "bifrost_license_history",
        "field": "timestamp",
        "type": "varchar",
        "maxlength": 64,
        "null": "NO",
        "key": "",
        "comment": "时间戳，防止恶意串改系统时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_license_history",
        "field": "secret_key",
        "type": "varchar",
        "maxlength": 64,
        "null": "NO",
        "key": "",
        "comment": "加密秘钥",
        "extra": ""
    },
    {
        "tablename": "bifrost_license_history",
        "field": "secret_pwd",
        "type": "varchar",
        "maxlength": 64,
        "null": "NO",
        "key": "",
        "comment": "加密密码",
        "extra": ""
    },
    {
        "tablename": "bifrost_license_history",
        "field": "gmt_create",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "创建时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_license_history",
        "field": "gmt_modified",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "最后修改时间",
        "extra": "on update CURRENT_TIMESTAMP"
    },
    {
        "tablename": "bifrost_license_history",
        "field": "gmt_modify",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "最后修改时间",
        "extra": "on update CURRENT_TIMESTAMP"
    },
    {
        "tablename": "bifrost_menu",
        "field": "uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "PRI",
        "comment": "主键",
        "extra": ""
    },
    {
        "tablename": "bifrost_menu",
        "field": "parent_uuid",
        "type": "char",
        "maxlength": 32,
        "null": "YES",
        "key": "MUL",
        "comment": "上级菜单标志",
        "extra": ""
    },
    {
        "tablename": "bifrost_menu",
        "field": "code",
        "type": "varchar",
        "maxlength": 128,
        "null": "NO",
        "key": "",
        "comment": "菜单标志 唯一 预留license",
        "extra": ""
    },
    {
        "tablename": "bifrost_menu",
        "field": "level",
        "type": "int",
        "null": "NO",
        "key": "",
        "default": "1",
        "comment": "级别",
        "extra": ""
    },
    {
        "tablename": "bifrost_menu",
        "field": "type",
        "type": "varchar",
        "maxlength": 2,
        "null": "YES",
        "key": "",
        "default": "0",
        "comment": "类型，枚举：0:未知、1:project、2:group、3:menu",
        "extra": ""
    },
    {
        "tablename": "bifrost_menu",
        "field": "path",
        "type": "varchar",
        "maxlength": 255,
        "null": "YES",
        "key": "",
        "comment": "请求路径",
        "extra": ""
    },
    {
        "tablename": "bifrost_menu",
        "field": "icon",
        "type": "varchar",
        "maxlength": 255,
        "null": "YES",
        "key": "",
        "comment": "图标码",
        "extra": ""
    },
    {
        "tablename": "bifrost_menu",
        "field": "name",
        "type": "varchar",
        "maxlength": 40,
        "null": "YES",
        "key": "",
        "comment": "名称",
        "extra": ""
    },
    {
        "tablename": "bifrost_menu",
        "field": "en_name",
        "type": "varchar",
        "maxlength": 64,
        "null": "YES",
        "key": "",
        "comment": "英文名称",
        "extra": ""
    },
    {
        "tablename": "bifrost_menu",
        "field": "target",
        "type": "varchar",
        "maxlength": 16,
        "null": "YES",
        "key": "",
        "default": "_self",
        "comment": "菜单链接打开方式：_blank、_self、_parent、_top\t",
        "extra": ""
    },
    {
        "tablename": "bifrost_menu",
        "field": "sort_no",
        "type": "int",
        "null": "YES",
        "key": "",
        "default": "0",
        "comment": "排序",
        "extra": ""
    },
    {
        "tablename": "bifrost_menu",
        "field": "version",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "功能的版本  level1 有效",
        "extra": ""
    },
    {
        "tablename": "bifrost_menu",
        "field": "create_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "",
        "extra": ""
    },
    {
        "tablename": "bifrost_menu",
        "field": "update_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "",
        "extra": ""
    },
    {
        "tablename": "bifrost_menu",
        "field": "gmt_create",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "0000-00-00 00:00:00",
        "comment": "创建时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_menu",
        "field": "gmt_modify",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "0000-00-00 00:00:00",
        "comment": "修改时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_menu",
        "field": "gmt_modified",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "0000-00-00 00:00:00",
        "comment": "最后修改时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_org",
        "field": "uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "PRI",
        "comment": "id",
        "extra": ""
    },
    {
        "tablename": "bifrost_org",
        "field": "parent_uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "YES",
        "key": "",
        "comment": "上级机构uuid 可为null",
        "extra": ""
    },
    {
        "tablename": "bifrost_org",
        "field": "code",
        "type": "varchar",
        "maxlength": 128,
        "null": "NO",
        "key": "UNI",
        "comment": "机构号唯一",
        "extra": ""
    },
    {
        "tablename": "bifrost_org",
        "field": "level",
        "type": "int",
        "null": "NO",
        "key": "",
        "default": "1",
        "comment": "机构级别：1、2、3",
        "extra": ""
    },
    {
        "tablename": "bifrost_org",
        "field": "name",
        "type": "varchar",
        "maxlength": 80,
        "null": "YES",
        "key": "",
        "comment": "机构名称",
        "extra": ""
    },
    {
        "tablename": "bifrost_org",
        "field": "create_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "创建用户账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_org",
        "field": "update_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "修改用户账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_org",
        "field": "gmt_create",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "创建时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_org",
        "field": "gmt_modify",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "最后修改时间modify",
        "extra": "on update CURRENT_TIMESTAMP"
    },
    {
        "tablename": "bifrost_org",
        "field": "gmt_modified",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "最后修改时间",
        "extra": "on update CURRENT_TIMESTAMP"
    },
    {
        "tablename": "bifrost_org_menu_function",
        "field": "uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "PRI",
        "comment": "Ora主键",
        "extra": ""
    },
    {
        "tablename": "bifrost_org_menu_function",
        "field": "custom_tree_uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "MUL",
        "comment": "customTreeUuid",
        "extra": ""
    },
    {
        "tablename": "bifrost_org_menu_function",
        "field": "org_uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "",
        "comment": "机构号",
        "extra": ""
    },
    {
        "tablename": "bifrost_org_menu_function",
        "field": "menu_uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "",
        "comment": "可用菜单uuid",
        "extra": ""
    },
    {
        "tablename": "bifrost_org_menu_function",
        "field": "function_uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "YES",
        "key": "",
        "comment": "可用功能uuid",
        "extra": ""
    },
    {
        "tablename": "bifrost_org_menu_function",
        "field": "create_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "创建用户账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_org_menu_function",
        "field": "update_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "修改用户账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_org_menu_function",
        "field": "gmt_create",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "创建时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_org_menu_function",
        "field": "gmt_modify",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "最后修改时间modify",
        "extra": "on update CURRENT_TIMESTAMP"
    },
    {
        "tablename": "bifrost_org_menu_function",
        "field": "gmt_modified",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "最后修改时间",
        "extra": "on update CURRENT_TIMESTAMP"
    },
    {
        "tablename": "bifrost_product",
        "field": "id",
        "type": "int",
        "null": "NO",
        "key": "PRI",
        "comment": "主键，id 自增",
        "extra": "auto_increment"
    },
    {
        "tablename": "bifrost_product",
        "field": "product_code",
        "type": "varchar",
        "maxlength": 20,
        "null": "YES",
        "key": "",
        "comment": "产品标识",
        "extra": ""
    },
    {
        "tablename": "bifrost_product",
        "field": "product_name",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "产品名称",
        "extra": ""
    },
    {
        "tablename": "bifrost_product",
        "field": "sort",
        "type": "int",
        "null": "YES",
        "key": "",
        "comment": "排序，按降序排列",
        "extra": ""
    },
    {
        "tablename": "bifrost_product",
        "field": "status",
        "type": "int",
        "null": "YES",
        "key": "",
        "comment": "0、停用，1、可用",
        "extra": ""
    },
    {
        "tablename": "bifrost_product",
        "field": "created_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "创建者",
        "extra": ""
    },
    {
        "tablename": "bifrost_product",
        "field": "updated_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "修改者",
        "extra": ""
    },
    {
        "tablename": "bifrost_product",
        "field": "gmt_create",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "创建时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_product",
        "field": "gmt_modify",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "修改时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_product_system",
        "field": "id",
        "type": "int",
        "null": "NO",
        "key": "PRI",
        "comment": "主键，id 自增",
        "extra": "auto_increment"
    },
    {
        "tablename": "bifrost_product_system",
        "field": "product_id",
        "type": "int",
        "null": "YES",
        "key": "",
        "comment": "产品id",
        "extra": ""
    },
    {
        "tablename": "bifrost_product_system",
        "field": "menu_uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "YES",
        "key": "",
        "comment": "菜单uuid",
        "extra": ""
    },
    {
        "tablename": "bifrost_product_system",
        "field": "status",
        "type": "int",
        "null": "YES",
        "key": "",
        "comment": "0、停用，1、可用",
        "extra": ""
    },
    {
        "tablename": "bifrost_product_system",
        "field": "created_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "创建者",
        "extra": ""
    },
    {
        "tablename": "bifrost_product_system",
        "field": "updated_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "修改者",
        "extra": ""
    },
    {
        "tablename": "bifrost_product_system",
        "field": "gmt_create",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "创建时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_product_system",
        "field": "gmt_modify",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "更新时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_role",
        "field": "uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "PRI",
        "comment": "主键",
        "extra": ""
    },
    {
        "tablename": "bifrost_role",
        "field": "org_uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "",
        "comment": "所属机构",
        "extra": ""
    },
    {
        "tablename": "bifrost_role",
        "field": "code",
        "type": "varchar",
        "maxlength": 128,
        "null": "NO",
        "key": "",
        "comment": "角色标志 唯一",
        "extra": ""
    },
    {
        "tablename": "bifrost_role",
        "field": "name",
        "type": "varchar",
        "maxlength": 40,
        "null": "NO",
        "key": "",
        "comment": "角色名称",
        "extra": ""
    },
    {
        "tablename": "bifrost_role",
        "field": "type",
        "type": "varchar",
        "maxlength": 10,
        "null": "NO",
        "key": "",
        "default": "default",
        "comment": "角色类型 同机构下层次",
        "extra": ""
    },
    {
        "tablename": "bifrost_role",
        "field": "create_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "创建用户账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_role",
        "field": "update_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "修改用户账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_role",
        "field": "gmt_create",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "创建时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_role",
        "field": "gmt_modify",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "最后修改时间modify",
        "extra": "on update CURRENT_TIMESTAMP"
    },
    {
        "tablename": "bifrost_role",
        "field": "gmt_modified",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "最后修改时间",
        "extra": "on update CURRENT_TIMESTAMP"
    },
    {
        "tablename": "bifrost_role_menu_function",
        "field": "uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "PRI",
        "comment": "Ora主键",
        "extra": ""
    },
    {
        "tablename": "bifrost_role_menu_function",
        "field": "custom_tree_uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "",
        "comment": "customtree的uuid",
        "extra": ""
    },
    {
        "tablename": "bifrost_role_menu_function",
        "field": "role_uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "MUL",
        "comment": "角色",
        "extra": ""
    },
    {
        "tablename": "bifrost_role_menu_function",
        "field": "menu_uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "YES",
        "key": "",
        "comment": "可用菜单m1",
        "extra": ""
    },
    {
        "tablename": "bifrost_role_menu_function",
        "field": "function_uuid",
        "type": "text",
        "maxlength": 65535,
        "null": "YES",
        "key": "",
        "comment": "可用功能uuid1",
        "extra": ""
    },
    {
        "tablename": "bifrost_role_menu_function",
        "field": "create_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "创建用户账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_role_menu_function",
        "field": "update_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "修改用户账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_role_menu_function",
        "field": "gmt_create",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "创建时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_role_menu_function",
        "field": "gmt_modify",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "最后修改时间modify",
        "extra": "on update CURRENT_TIMESTAMP"
    },
    {
        "tablename": "bifrost_role_menu_function",
        "field": "gmt_modified",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "最后修改时间",
        "extra": "on update CURRENT_TIMESTAMP"
    },
    {
        "tablename": "bifrost_solution",
        "field": "uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "PRI",
        "comment": "主键",
        "extra": ""
    },
    {
        "tablename": "bifrost_solution",
        "field": "code",
        "type": "varchar",
        "maxlength": 128,
        "null": "NO",
        "key": "MUL",
        "comment": "自定义分组标志",
        "extra": ""
    },
    {
        "tablename": "bifrost_solution",
        "field": "name",
        "type": "varchar",
        "maxlength": 128,
        "null": "YES",
        "key": "",
        "comment": "名称",
        "extra": ""
    },
    {
        "tablename": "bifrost_solution",
        "field": "en_name",
        "type": "varchar",
        "maxlength": 64,
        "null": "YES",
        "key": "",
        "comment": "英文名称",
        "extra": ""
    },
    {
        "tablename": "bifrost_solution",
        "field": "icon",
        "type": "varchar",
        "maxlength": 512,
        "null": "YES",
        "key": "",
        "comment": "图标",
        "extra": ""
    },
    {
        "tablename": "bifrost_solution",
        "field": "logo",
        "type": "longtext",
        "maxlength": 4294967295,
        "null": "YES",
        "key": "",
        "comment": "新的logo 字段",
        "extra": ""
    },
    {
        "tablename": "bifrost_solution",
        "field": "path",
        "type": "varchar",
        "maxlength": 255,
        "null": "YES",
        "key": "",
        "comment": "跳转路径",
        "extra": ""
    },
    {
        "tablename": "bifrost_solution",
        "field": "type",
        "type": "int",
        "null": "YES",
        "key": "",
        "default": "0",
        "comment": "类型，枚举值:0:未知、1:solution、2:group",
        "extra": ""
    },
    {
        "tablename": "bifrost_solution",
        "field": "flag",
        "type": "int",
        "null": "YES",
        "key": "",
        "default": "0",
        "comment": "开关,0:关;1:开",
        "extra": ""
    },
    {
        "tablename": "bifrost_solution",
        "field": "sort_no",
        "type": "int",
        "null": "YES",
        "key": "MUL",
        "comment": "分组排序，ASC",
        "extra": ""
    },
    {
        "tablename": "bifrost_solution",
        "field": "parent_uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "YES",
        "key": "",
        "comment": "上级uuid",
        "extra": ""
    },
    {
        "tablename": "bifrost_solution",
        "field": "des",
        "type": "varchar",
        "maxlength": 1000,
        "null": "YES",
        "key": "",
        "comment": "解决方案描述",
        "extra": ""
    },
    {
        "tablename": "bifrost_solution",
        "field": "lang_env",
        "type": "varchar",
        "maxlength": 128,
        "null": "YES",
        "key": "",
        "comment": "语言环境，多种语言切换用“,”隔开：cn,en",
        "extra": ""
    },
    {
        "tablename": "bifrost_solution",
        "field": "responsible_person",
        "type": "varchar",
        "maxlength": 100,
        "null": "YES",
        "key": "",
        "comment": "应用负责人",
        "extra": ""
    },
    {
        "tablename": "bifrost_solution",
        "field": "menus",
        "type": "varchar",
        "maxlength": 1000,
        "null": "YES",
        "key": "",
        "comment": "当前解决方案使用到的菜单列表版本",
        "extra": ""
    },
    {
        "tablename": "bifrost_solution",
        "field": "apply_fields",
        "type": "varchar",
        "maxlength": 1024,
        "null": "YES",
        "key": "",
        "comment": "申请字段",
        "extra": ""
    },
    {
        "tablename": "bifrost_solution",
        "field": "create_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "创建用户账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_solution",
        "field": "update_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "修改用户账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_solution",
        "field": "gmt_create",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "创建时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_solution",
        "field": "gmt_modify",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "最后修改时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_solution",
        "field": "product_id",
        "type": "int",
        "null": "YES",
        "key": "",
        "comment": "产品分类Id",
        "extra": ""
    },
    {
        "tablename": "bifrost_solution",
        "field": "env_type",
        "type": "int",
        "null": "YES",
        "key": "",
        "comment": "1、正式发布，2、POC，3、内部使用\n",
        "extra": ""
    },
    {
        "tablename": "bifrost_solution",
        "field": "extend_map",
        "type": "varchar",
        "maxlength": 1024,
        "null": "YES",
        "key": "",
        "comment": "前端显示扩展字段",
        "extra": ""
    },
    {
        "tablename": "bifrost_user",
        "field": "uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "PRI",
        "comment": "主键",
        "extra": ""
    },
    {
        "tablename": "bifrost_user",
        "field": "org_uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "YES",
        "key": "",
        "comment": "机构号",
        "extra": ""
    },
    {
        "tablename": "bifrost_user",
        "field": "role_uuids",
        "type": "varchar",
        "maxlength": 1000,
        "null": "YES",
        "key": "",
        "default": "",
        "comment": "角色 [uuid1,uuid2]",
        "extra": ""
    },
    {
        "tablename": "bifrost_user",
        "field": "account",
        "type": "varchar",
        "maxlength": 20,
        "null": "NO",
        "key": "UNI",
        "comment": "账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_user",
        "field": "user_name",
        "type": "varchar",
        "maxlength": 40,
        "null": "YES",
        "key": "",
        "comment": "用户名称",
        "extra": ""
    },
    {
        "tablename": "bifrost_user",
        "field": "pwd",
        "type": "varchar",
        "maxlength": 32,
        "null": "YES",
        "key": "",
        "comment": "密码",
        "extra": ""
    },
    {
        "tablename": "bifrost_user",
        "field": "avatar",
        "type": "varchar",
        "maxlength": 64,
        "null": "YES",
        "key": "MUL",
        "default": "",
        "comment": "头像",
        "extra": ""
    },
    {
        "tablename": "bifrost_user",
        "field": "expiration",
        "type": "timestamp",
        "null": "YES",
        "key": "",
        "comment": "过期时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_user",
        "field": "gender",
        "type": "int",
        "null": "YES",
        "key": "",
        "comment": "性别 0:未知;1:男;2:女",
        "extra": ""
    },
    {
        "tablename": "bifrost_user",
        "field": "app_name",
        "type": "varchar",
        "maxlength": 512,
        "null": "YES",
        "key": "",
        "comment": "拥有应用:[app1,app2]",
        "extra": ""
    },
    {
        "tablename": "bifrost_user",
        "field": "status",
        "type": "int",
        "null": "YES",
        "key": "",
        "comment": "用户状态 0:正常",
        "extra": ""
    },
    {
        "tablename": "bifrost_user",
        "field": "lang",
        "type": "varchar",
        "maxlength": 16,
        "null": "YES",
        "key": "",
        "comment": "语言",
        "extra": ""
    },
    {
        "tablename": "bifrost_user",
        "field": "theme",
        "type": "varchar",
        "maxlength": 32,
        "null": "YES",
        "key": "",
        "comment": "主题",
        "extra": ""
    },
    {
        "tablename": "bifrost_user",
        "field": "layout",
        "type": "varchar",
        "maxlength": 32,
        "null": "YES",
        "key": "",
        "comment": "布局",
        "extra": ""
    },
    {
        "tablename": "bifrost_user",
        "field": "simplified",
        "type": "int",
        "null": "YES",
        "key": "",
        "comment": "是否简体：1是0否",
        "extra": ""
    },
    {
        "tablename": "bifrost_user",
        "field": "phone",
        "type": "varchar",
        "maxlength": 20,
        "null": "YES",
        "key": "MUL",
        "comment": "手机号码",
        "extra": ""
    },
    {
        "tablename": "bifrost_user",
        "field": "role_type",
        "type": "int",
        "null": "YES",
        "key": "",
        "comment": "用户类型：1、超级管理员，2、管理员，3、操作员，4、普通用户",
        "extra": ""
    },
    {
        "tablename": "bifrost_user",
        "field": "sign",
        "type": "varchar",
        "maxlength": 1024,
        "null": "YES",
        "key": "",
        "comment": "个性签名",
        "extra": ""
    },
    {
        "tablename": "bifrost_user",
        "field": "create_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "创建用户账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_user",
        "field": "update_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "修改用户账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_user",
        "field": "gmt_create",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "创建时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_user",
        "field": "gmt_modify",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "最后修改时间modify",
        "extra": "on update CURRENT_TIMESTAMP"
    },
    {
        "tablename": "bifrost_user",
        "field": "gmt_modified",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "最后修改时间",
        "extra": "on update CURRENT_TIMESTAMP"
    },
    {
        "tablename": "bifrost_user_copy1",
        "field": "gmt_create",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "创建时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_copy1",
        "field": "gmt_modify",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "最后修改时间modify",
        "extra": "on update CURRENT_TIMESTAMP"
    },
    {
        "tablename": "bifrost_user_copy1",
        "field": "gmt_modified",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "最后修改时间",
        "extra": "on update CURRENT_TIMESTAMP"
    },
    {
        "tablename": "bifrost_user_copy1",
        "field": "uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "PRI",
        "comment": "主键",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_copy1",
        "field": "account",
        "type": "varchar",
        "maxlength": 20,
        "null": "NO",
        "key": "UNI",
        "comment": "账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_copy1",
        "field": "user_name",
        "type": "varchar",
        "maxlength": 40,
        "null": "YES",
        "key": "",
        "comment": "用户名称",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_copy1",
        "field": "pwd",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "",
        "comment": "密码",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_copy1",
        "field": "org_uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "YES",
        "key": "",
        "comment": "机构号",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_copy1",
        "field": "role_uuids",
        "type": "varchar",
        "maxlength": 255,
        "null": "YES",
        "key": "",
        "comment": "角色 [uuid1,uuid2]",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_copy1",
        "field": "avatar",
        "type": "varchar",
        "maxlength": 64,
        "null": "YES",
        "key": "",
        "default": "",
        "comment": "头像",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_copy1",
        "field": "expiration",
        "type": "timestamp",
        "null": "YES",
        "key": "",
        "comment": "过期时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_copy1",
        "field": "gender",
        "type": "int",
        "null": "YES",
        "key": "",
        "comment": "性别 0:未知;1:男;2:女",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_copy1",
        "field": "app_name",
        "type": "varchar",
        "maxlength": 512,
        "null": "YES",
        "key": "",
        "comment": "拥有应用:[app1,app2]",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_copy1",
        "field": "status",
        "type": "int",
        "null": "YES",
        "key": "",
        "comment": "用户状态 0:正常",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_copy1",
        "field": "create_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "创建用户账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_copy1",
        "field": "update_by",
        "type": "varchar",
        "maxlength": 30,
        "null": "YES",
        "key": "",
        "comment": "修改用户账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_copy1",
        "field": "lang",
        "type": "varchar",
        "maxlength": 16,
        "null": "YES",
        "key": "",
        "comment": "语言",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_copy1",
        "field": "theme",
        "type": "varchar",
        "maxlength": 32,
        "null": "YES",
        "key": "",
        "comment": "主题",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_copy1",
        "field": "layout",
        "type": "varchar",
        "maxlength": 32,
        "null": "YES",
        "key": "",
        "comment": "布局",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_copy1",
        "field": "simplified",
        "type": "int",
        "null": "YES",
        "key": "",
        "comment": "是否简体：1是0否",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_copy1",
        "field": "phone",
        "type": "varchar",
        "maxlength": 20,
        "null": "YES",
        "key": "",
        "comment": "手机号码",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_copy1",
        "field": "sign",
        "type": "varchar",
        "maxlength": 1024,
        "null": "YES",
        "key": "",
        "comment": "个性签名",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_history",
        "field": "uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "PRI",
        "comment": "主键",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_history",
        "field": "gmt_create",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "创建时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_history",
        "field": "gmt_modify",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "最后修改时间modify",
        "extra": "on update CURRENT_TIMESTAMP"
    },
    {
        "tablename": "bifrost_user_history",
        "field": "gmt_modified",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "最后修改时间",
        "extra": "on update CURRENT_TIMESTAMP"
    },
    {
        "tablename": "bifrost_user_history",
        "field": "account",
        "type": "varchar",
        "maxlength": 20,
        "null": "NO",
        "key": "MUL",
        "comment": "登录账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_history",
        "field": "login_time",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "登录时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_history",
        "field": "ip_addr",
        "type": "varchar",
        "maxlength": 20,
        "null": "YES",
        "key": "",
        "comment": "登录IP",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_operation_history",
        "field": "uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "PRI",
        "comment": "主键",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_operation_history",
        "field": "menu_uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "",
        "comment": "菜单编号",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_operation_history",
        "field": "function_uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "",
        "comment": "功能编号",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_operation_history",
        "field": "account",
        "type": "varchar",
        "maxlength": 20,
        "null": "NO",
        "key": "",
        "comment": "登录账号",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_operation_history",
        "field": "operation_time",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "创建时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_operation_history",
        "field": "operation_param",
        "type": "text",
        "maxlength": 65535,
        "null": "YES",
        "key": "",
        "comment": "操作参数",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_operation_history",
        "field": "gmt_create",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "创建时间",
        "extra": ""
    },
    {
        "tablename": "bifrost_user_operation_history",
        "field": "gmt_modify",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "最后修改时间modify",
        "extra": "on update CURRENT_TIMESTAMP"
    },
    {
        "tablename": "bifrost_user_operation_history",
        "field": "gmt_modified",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "最后修改时间",
        "extra": "on update CURRENT_TIMESTAMP"
    },
    {
        "tablename": "license_solution_info",
        "field": "uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "NO",
        "key": "PRI",
        "comment": "主键",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "solution_uuid",
        "type": "varchar",
        "maxlength": 32,
        "null": "YES",
        "key": "",
        "comment": "解决方案",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "dingding_sequence",
        "type": "varchar",
        "maxlength": 100,
        "null": "YES",
        "key": "",
        "comment": "钉钉序列号",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "apply_type",
        "type": "tinyint",
        "null": "YES",
        "key": "",
        "comment": "申请类型 0 未知，1 license，2 soultion，3 both",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "apply_status",
        "type": "tinyint",
        "null": "NO",
        "key": "",
        "default": "1",
        "comment": "0表示审批退回,1表示审批中,2表示审批完成  3表示撤销, 4表示废弃",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "apply_user",
        "type": "varchar",
        "maxlength": 100,
        "null": "YES",
        "key": "",
        "comment": "申请人",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "check_user",
        "type": "varchar",
        "maxlength": 100,
        "null": "YES",
        "key": "",
        "comment": "当前审批人",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "custom_code",
        "type": "varchar",
        "maxlength": 100,
        "null": "YES",
        "key": "",
        "comment": "客户编号",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "custom_name",
        "type": "varchar",
        "maxlength": 100,
        "null": "YES",
        "key": "",
        "comment": "客户名称",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "project_code",
        "type": "varchar",
        "maxlength": 100,
        "null": "YES",
        "key": "",
        "comment": "项目编号",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "project_name",
        "type": "varchar",
        "maxlength": 100,
        "null": "YES",
        "key": "",
        "comment": "项目名称",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "project_en_name",
        "type": "varchar",
        "maxlength": 100,
        "null": "YES",
        "key": "",
        "comment": "项目英文名称",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "env",
        "type": "tinyint",
        "null": "YES",
        "key": "",
        "comment": "环境类型  1、poc环境，2、开发环境，3、测试环境，4、准生产环境，5、生产环境，6、其他环境，7、演示环境",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "env_type",
        "type": "tinyint",
        "null": "YES",
        "key": "",
        "comment": "1、内部使用，2、客户使用",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "license_day",
        "type": "int",
        "null": "YES",
        "key": "",
        "comment": "License有效期",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "license_endtime",
        "type": "datetime",
        "null": "YES",
        "key": "",
        "comment": "License截至日期",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "delay",
        "type": "tinyint",
        "null": "YES",
        "key": "",
        "comment": "License是否已经进行了延期操作",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "app_limit",
        "type": "int",
        "null": "YES",
        "key": "",
        "comment": "应用限制",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "product_limit",
        "type": "int",
        "null": "YES",
        "key": "",
        "comment": "产品限制",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "other_limit",
        "type": "varchar",
        "maxlength": 100,
        "null": "YES",
        "key": "",
        "comment": "其他限制",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "mac_address",
        "type": "varchar",
        "maxlength": 255,
        "null": "YES",
        "key": "",
        "comment": "mac地址",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "ip_address",
        "type": "varchar",
        "maxlength": 255,
        "null": "YES",
        "key": "",
        "comment": "ip地址",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "hard_sequence",
        "type": "text",
        "maxlength": 65535,
        "null": "YES",
        "key": "",
        "comment": "硬盘序列号",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "remark",
        "type": "varchar",
        "maxlength": 4000,
        "null": "YES",
        "key": "",
        "comment": "备注",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "permanent_reason",
        "type": "varchar",
        "maxlength": 1024,
        "null": "YES",
        "key": "",
        "comment": "永久(100年)原因",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "mac_reason",
        "type": "varchar",
        "maxlength": 1024,
        "null": "YES",
        "key": "",
        "comment": "不鉴权mac、ip原因",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "apply_field_values",
        "type": "varchar",
        "maxlength": 1024,
        "null": "YES",
        "key": "",
        "comment": "动态申请字段值",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "create_time",
        "type": "datetime",
        "null": "YES",
        "key": "",
        "comment": "创建时间",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "update_time",
        "type": "datetime",
        "null": "YES",
        "key": "",
        "comment": "更新时间",
        "extra": "on update CURRENT_TIMESTAMP"
    },
    {
        "tablename": "license_solution_info",
        "field": "gmt_create",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "创建时间",
        "extra": ""
    },
    {
        "tablename": "license_solution_info",
        "field": "gmt_modify",
        "type": "timestamp",
        "null": "NO",
        "key": "",
        "default": "CURRENT_TIMESTAMP",
        "comment": "最后修改时间modify",
        "extra": "on update CURRENT_TIMESTAMP"
    }
];

export const triggers = [
    {
        "character_set_client": "utf8",
        "Trigger": "syncRole",
        "Table": "bifrost_role",
        "sql_mode": "STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION",
        "Database Collation": "utf8_general_ci",
        "Statement": "update bifrost_user set bifrost_user.avatar = new.uuid",
        "Definer": "tongdun@%",
        "Event": "INSERT",
        "Timing": "AFTER",
        "Created": 1592292522250,
        "collation_connection": "utf8_general_ci"
    },
    {
        "character_set_client": "utf8",
        "Trigger": "ins_sum",
        "Table": "bifrost_user",
        "sql_mode": "STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION",
        "Database Collation": "utf8_general_ci",
        "Statement": "set @sum = @sum + new.account",
        "Definer": "tongdun@%",
        "Event": "INSERT",
        "Timing": "BEFORE",
        "Created": 1592290963730,
        "collation_connection": "utf8_general_ci"
    },
    {
        "character_set_client": "utf8",
        "Trigger": "ins_sum1",
        "Table": "bifrost_user",
        "sql_mode": "STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION",
        "Database Collation": "utf8_general_ci",
        "Statement": "set @sum = @sum + new.account",
        "Definer": "tongdun@%",
        "Event": "UPDATE",
        "Timing": "BEFORE",
        "Created": 1592291229780,
        "collation_connection": "utf8_general_ci"
    }
];

export const relations = [
    {
        "table_name": "bifrost_user",
        "column_name": "avatar",
        "referenced_table_name": "bifrost_role",
        "referenced_column_name": "uuid"
    },
    {
        "table_name": "bifrost_user",
        "column_name": "phone",
        "referenced_table_name": "bifrost_menu",
        "referenced_column_name": "uuid"
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

    if (/^select COLUMN_NAME as 'Field'/i.test(sql)) {
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

    if (/select TABLE_NAME as 'TableName', COLUMN_NAME as 'Field'/i.test(sql)) {
        return databaseColumns;
    }

    if (/^show triggers/i.test(sql)) {
        return triggers;
    }

    if (/FROM information_schema.KEY_COLUMN_USAGE/i.test(sql)) {
        return relations;
    }
    
    return databases;
};
