export function tabRequest<T = any>(type: string, data: T) {
    const resEventName = `${type}_RES`

    chrome.runtime.sendMessage({
        type,
        data,
        async: true
    })

    return new Promise(resolve => {
        chrome.runtime.onMessage.addListener(function listener(message: Message, sender: chrome.runtime.MessageSender, sendResponse: (response?: any) => void) {
            console.log(message, '看我一下res')
            if (message.type === resEventName) {
                chrome.runtime.onMessage.removeListener(listener)
                // 响应
                resolve(message.data)
                return Promise.resolve(message.data)
            }
        })
    })
}