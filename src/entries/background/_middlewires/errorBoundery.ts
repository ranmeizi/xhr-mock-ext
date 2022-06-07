export default async function (ctx: Ctx, next: () => void) {
    try {
        await next()
    } catch (e) {
        console.log(e)
    }
}