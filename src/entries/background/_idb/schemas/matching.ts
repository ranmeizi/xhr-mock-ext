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
        name: {
            type: 'string'
        },
        /* 正则 */
        regexpStr: {
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
        /* 范型参数 */
        typeArgs: {
            type: "array",
            items: {
                type: "string"
            }
        }
    },
    required: ['id', 'regexpStr', 'resTypeId']
}
export default schema