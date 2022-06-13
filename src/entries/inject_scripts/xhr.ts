// @ts-nocheck
import { proxy, unProxy } from "ajax-hook";
import { open } from '../../components/notification'

let matchings: MatchingEntity[] = []

proxy({
    //请求发起前进入
    onRequest: async (config, handler) => {
        const showN = localStorage.getItem('chrome_mock_ext_show_notification') === '1'
        for (const matching of matchings) {
            const regexp = new RegExp(matching.regexpStr)
            if (regexp.test(config.url)) {
                open({
                    title: 'xhr_mock_ext拦截提醒',
                    content: `/<span style="color:red">${matching.regexpStr}</span>/ ,已被拦截`
                })
                const response = await matchingHandler(matching, config)
                console.log(response)
                return handler.resolve({
                    config: config,
                    status: 200,
                    headers: { 'content-type': 'application/json;charset=UTF-8' },
                    response: response
                })
            }
        }

        handler.next(config);
    }
})

async function matchingHandler(matching: MatchingEntity, config): string {
    console.log(matching)
    switch (matching.mode) {
        case 0: return matching.resJson;
        case 1: return await scriptHandler(matching, config)
    }
}


async function scriptHandler(matching: MatchingEntity, config) {
    const middleware = new Function(matching.resScript)

    return await middleware(config)
}


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