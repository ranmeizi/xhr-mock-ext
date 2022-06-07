// @ts-nocheck
import { proxy, unProxy } from "ajax-hook";

proxy({
    //请求发起前进入
    onRequest: (config, handler) => {
        console.log(config.url)
        if (/getFirstGroupList/.test(config.url)) {
            handler.resolve({
                config: config,
                status: 200,
                headers: { 'content-type': 'application/json;charset=UTF-8' },
                response: JSON.stringify({ "code": 200, "message": "success", "data": { "records": [{ "id": 9, "groupsName": "???", "groupsCode": null, "groupsFullName": "前厅端菜开心发呆", "uniformSocialCreditCode": "很有信用", "remarks": null, "deleteFlag": null, "createTime": 1653065417000, "creator": "波波安", "updateTime": 1653065417000, "updater": "波波安" }], "total": 1, "size": 10, "current": 1, "orders": [{ "column": "createTime", "asc": false }], "optimizeCountSql": true, "hitCount": false, "countId": null, "maxLimit": null, "searchCount": true, "pages": 1 } })
            })
        } else {
            handler.next(config);
        }
    }
})