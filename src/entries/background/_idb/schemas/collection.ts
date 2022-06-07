const schema = {
    title: 'collection node',
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        /* id */
        id: {
            type: 'string'
        },
        /* 名字 */
        name: {
            type: 'string'
        },
        /* 父id */
        parentId: {
            type: 'string'
        },
        /* 节点数据类型 0-目录 1-matching */
        type: {
            type: 'number'
        },
        /* 源id */
        typeId: {
            type: 'string'
        }
    },
    required: ['id', 'parentId', 'type']
}
export default schema