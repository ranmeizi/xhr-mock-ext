
type Message = {
    type: string,
    data: any
}

type Ctx<T = any> = {
    action?: string
    data?: T
    message: Message
    sender: chrome.runtime.MessageSender
    sendResponse: (response?: any) => void
}

type middlewire = (ctx: Ctx, next: () => void) => Promise<void>

type controller = (ctx: Ctx) => Promise<void>

interface Window {
    request: <T>(message: Message) => Promise<T>
}

// 数据类型

type CollectionEntity = {
    id: string
    name: string
    parentId: string
    type: 0 | 1
    typeId: string
}

type MatchingEntity = {
    id: string
    regexpStr: string
    mode: 0 | 1 | 2
    resScript: string
    resJson: string
    typeId: string
    enabled: boolean
}