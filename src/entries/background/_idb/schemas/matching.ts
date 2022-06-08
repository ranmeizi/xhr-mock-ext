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
        /* 正则 */
        regexpStr: {
            type: 'string'
        },
        /* 模式 0-json 1-script 2-type */
        mode: {
            type: 'string'
        },
        /* 响应执行脚本 */
        resScript: {
            type: 'string'
        },
        /* 响应的json 填写后直接响应此字段 */
        resJson: {
            type: 'string'
        },
        /* 响应类型id */
        typeId: {
            type: 'string'
        },
        /* 启用状态 */
        enabled: {
            type: 'boolean'
        }
    },
    required: ['id']
}
export default schema
