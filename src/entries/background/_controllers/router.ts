import { controller as CC } from './collections'
import { controller as MC } from './matching'
import { controller as TC } from './types'
import * as Actions from './Actions'

type ActionTypes = keyof typeof Actions

const controllers = [CC, MC, TC]

const router: middlewire = async (ctx, next) => {
    const action = ctx.action
    for (const controller of controllers) {
        // @ts-ignore
        if (controller[action]) {
            // @ts-ignore
            await controller[action](ctx)
        }
    }
}

export default router