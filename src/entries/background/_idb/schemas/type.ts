const schema = {
    title: 'types',
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        /* id */
        id: {
            type: 'string'
        },
        /* 父节点id */
        parentId: {
            type: 'string'
        },
        /* name */
        name: {
            type: 'string'
        },
        /* key */
        key: {
            type: 'string'
        },
        /* 描述 */
        desc: {
            type: 'string'
        },
        /* 引用id */
        refId: {
            type: 'string'
        },
        /* 类型 0-基本类型 1-类型 2-范型 */
        type: {
            type: 'number'
        },
        /* 范型参数列表 */
        args: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        /* 默认值 */
        defaultValue: {
            type: 'string'
        }
    },
    required: ['id', 'name', 'type', 'parentId']
}

export default schema