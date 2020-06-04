const createTable = "CREATE TABLE `book` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '专辑唯一标识',\n  `owner_id` bigint(20) DEFAULT NULL COMMENT '用户uid',\n  `name` varchar(255) COLLATE utf8mb4_bin NOT NULL COMMENT '专辑名称',\n  `description` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '专辑描述',\n  `cover` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL COMMENT 'book封面',\n  `tag_id` int(11) DEFAULT NULL COMMENT '所属标签',\n  `type` varchar(32) COLLATE utf8mb4_bin DEFAULT 'book' COMMENT '知识库类型\\nbook\\nproject\\nprd',\n  `recycle_status` int(11) NOT NULL DEFAULT '1' COMMENT '项目状态：\n1、正常\n0、已删除',\n  `public` int(11) DEFAULT '0' COMMENT '知识库访问权限\n 0: 私有，默认只有自己可访问；1:公共知识库，所有人可访问',\n  `good_status` int(1) DEFAULT '0' COMMENT '精选状态 0: 非精选，1: 已推荐精选待审核待， 2:精选',\n  `is_finish` int(11) DEFAULT '0' COMMENT '是否完结：0还没有、1已完结',\n  `gmt_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',\n  `gmt_modify` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=2692 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin ROW_FORMAT=COMPACT COMMENT='知识广场-专辑'"
export const mockJson = [
    {
        Database: "information_schema",
        Tables_in_sinan: "book",
        Tables_in_test: "fine",
        "Create Table": createTable,
        'Data_length': '182747'
    },
    {
        Database: "sinan",
        Tables_in_sinan: "article"
    },
    {
        Database: "test",
        Tables_in_sinan: "project"
    }
]
