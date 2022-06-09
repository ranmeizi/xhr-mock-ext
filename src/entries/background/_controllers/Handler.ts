const createHandler = function () {
    // 默认中间件
    const actions: middlewire[] = []

    const ins = async (message: Message, sender: chrome.runtime.MessageSender, sendResponse: (response?: any) => void) => {

        if (sender && message.async) {
            console.log('www??')
            sendResponse = function (data) {
                console.log('是我了')
                chrome.tabs.sendMessage(sender.tab.id, {
                    type: message.type + '_RES',
                    data: data.data
                })
            }
        }

        const ctx = {
            message,
            sender,
            sendResponse
        }
        async function next(index: number) {
            await actions[index].call(this, ctx, next.bind(ctx, index + 1))
        }

        await actions[0](ctx, next.bind(ctx, 1));
    }

    // 实现注册中间件
    ins.use = (handler: middlewire) => {
        actions.push(handler)
    }

    return ins
}

export default createHandler