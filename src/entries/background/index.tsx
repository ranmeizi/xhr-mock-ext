import React from 'react'
import { render } from 'react-dom'
import Background from './Background'
import createHandler from './_controllers/Handler'
import init from "./_middlewires/init"
import errorBoundery from "./_middlewires/errorBoundery"
import router from './_controllers/router'
import './_idb'

render(<Background />, document.getElementById('root'))

export type Message = {
    type: string,
    data: any
}

const handler = createHandler()

handler.use(init)
handler.use(errorBoundery)
handler.use(router)

// 统一消息接口
chrome.runtime.onMessage.addListener(handler);

window.request = function (message: Message) {
    return new Promise(resolve => {
        handler(message, null, resolve)
    })
}