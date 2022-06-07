import { getDbRef } from "../_idb"

export default async function (ctx: Ctx, next: () => void) {
    console.log(ctx)
    if (!ctx.message?.type) {
        // 不处理
        return
    }
    // 预处理
    ctx.action = ctx.message.type
    ctx.data = ctx.message.data

    await next()
}