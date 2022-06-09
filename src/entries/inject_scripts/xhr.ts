// @ts-nocheck
import { proxy, unProxy } from "ajax-hook";
import { open } from './notification'

let matchings: MatchingEntity[] = []

proxy({
    //请求发起前进入
    onRequest: (config, handler) => {
        for (const matching of matchings) {
            const regexp = new RegExp(matching.regexpStr)
            if (regexp.test(config.url)) {
                open({
                    title: 'xhr_mock_ext拦截提醒',
                    content: `/<span style="color:red">${matching.regexpStr}</span>/ ,已被拦截`
                })
                return handler.resolve({
                    config: config,
                    status: 200,
                    headers: { 'content-type': 'application/json;charset=UTF-8' },
                    response: matching.resJson
                })
            }
        }

        handler.next(config);
    }
})

function init() {
    getMatchings()

    window.addEventListener('message', (e) => {
        const { data } = e

        if (data.event === 'inject_get_matching_res') {
            matchings = e.data.data
        }
    })
}

function getMatchings() {
    window.postMessage({
        event: 'inject_get_matching',
        data: null
    })
}

init()