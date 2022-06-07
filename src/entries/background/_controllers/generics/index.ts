import * as Actions from '../Actions'

class Controller {
    async [Actions.TYPE_ADD](ctx: Ctx) {
        ctx.data
    }
}

export const controller = new Controller()