export const operatorMap = {
    "number": [
        {
            "label": "=",
            "value": "="
        },
        {
            "label": "!=",
            "value": "!="
        },
        {
            "label": "<",
            "value": "<"
        },
        {
            "label": "<=",
            "value": "<="
        },
        {
            "label": ">",
            "value": ">"
        },
        {
            "label": ">=",
            "value": ">="
        },
        {
            "label": "包含",
            "value": "contains"
        },
        {
            "label": "不包含",
            "value": "not contain"
        },
        {
            "label": "开始以",
            "value": "start with"
        },
        {
            "label": "开始不是以",
            "value": "start not with"
        },
        {
            "label": "结束以",
            "value": "end with"
        },
        {
            "label": "结束不是以",
            "value": "end not with"
        },
        {
            "label": "是null",
            "value": "is null"
        },
        {
            "label": "不是null",
            "value": "is not null"
        },
        {
            "label": "介于",
            "value": "between"
        },
        {
            "label": "在列表",
            "value": "in list"
        },
        {
            "label": "不在列表",
            "value": "not in list"
        }
    ],
    "string": [
        {
            "label": "=",
            "value": "="
        },
        {
            "label": "!=",
            "value": "!="
        },
        {
            "label": "包含",
            "value": "contains"
        },
        {
            "label": "不包含",
            "value": "not contain"
        },
        {
            "label": "开始以",
            "value": "start with"
        },
        {
            "label": "开始不是以",
            "value": "start not with"
        },
        {
            "label": "结束以",
            "value": "end with"
        },
        {
            "label": "结束不是以",
            "value": "end not with"
        },
        {
            "label": "是null",
            "value": "is null"
        },
        {
            "label": "不是null",
            "value": "is not null"
        },
        {
            "label": "是空的",
            "value": "is empty"
        },
        {
            "label": "不是空的",
            "value": "is not empty"
        },
        {
            "label": "介于",
            "value": "between"
        },
        {
            "label": "在列表",
            "value": "in list"
        },
        {
            "label": "不在列表",
            "value": "not in list"
        }
    ],
    "date": [
        {
            "label": "=",
            "value": "="
        },
        {
            "label": "!=",
            "value": "!="
        },
        {
            "label": "在之前",
            "value": "is before"
        },
        {
            "label": "在之后",
            "value": "is after"
        },
        {
            "label": "之前或等于",
            "value": "is befter or equal to"
        },
        {
            "label": "之后或等于",
            "value": "is after or equal to"
        },
        {
            "label": "是null",
            "value": "is null"
        },
        {
            "label": "不是null",
            "value": "is not null"
        },
        {
            "label": "介于",
            "value": "between"
        },
        {
            "label": "在列表",
            "value": "in list"
        },
        {
            "label": "不在列表",
            "value": "not in list"
        }
    ]
}

export const sqlTypeMap = {
    TINYINT: 'number',
    SMALLINT: 'number',
    MEDIUMINT: 'number',
    INT: 'number',
    INTEGER: 'number',
    BIGINT: 'number',
    FLOAT: 'number',
    DOUBLE: 'number',
    DECIMAL: 'number',
    DATE: 'date',
    TIME: 'date',
    YEAR: 'date',
    DATETIME: 'date',
    TIMESTAMP: 'date',
    CHAR: 'string',
    VARCHAR: 'string',
    TINYBLOB: 'string',
    TINYTEXT: 'string',
    BLOB: 'string',
    TEXT: 'string',
    MEDIUMBLOB: 'string',
    MEDIUMTEXT: 'string',
    LONGBLOB: 'string',
    LONGTEXT: 'string'
}
