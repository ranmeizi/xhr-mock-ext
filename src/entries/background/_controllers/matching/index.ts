import * as Actions from '../Actions'
import { v4 as uuidv4 } from 'uuid';
import { getDbRef } from '../../_idb'

class Controller {
    /**
     * 新增
     * @param ctx 
     */
    async [Actions.MATCHING_ADD](ctx: Ctx) {

        const matching: MatchingEntity = await this.add()

        ctx.sendResponse({
            code: 200,
            data: matching
        })
    }

    /**
     * 编辑
     * @param ctx 
     */
    async [Actions.MATCHING_EDIT](ctx: Ctx<{ id: string } & Partial<MatchingEntity>>) {

        console.log('EDIT', ctx.data)
        const db = getDbRef()
        const doc = await db.collections.matching.findOne({
            selector: {
                id: ctx.data.id
            }
        }).exec()
        delete ctx.data.id
        const newDoc: MatchingEntity = Object.assign(doc.toJSON(), ctx.data)

        await doc.update({
            $set: newDoc
        })

        ctx.sendResponse({
            code: 200,
            data: doc.toJSON()
        })
    }

    /**
     * byid
     * @param ctx 
     */
    async [Actions.MATCHING_BYID](ctx: Ctx<{ id: string }>) {
        const db = getDbRef()

        console.log('MATCHING_BYID', ctx.data)
        const { id } = ctx.data

        const matching = (await db.collections.matching.findOne({
            selector: { id }
        }).exec()).toJSON()

        ctx.sendResponse({
            code: 200,
            data: matching
        })
    }

    async [Actions.MATCHING_GET](ctx: Ctx<{ enabled: boolean }>) {
        const db = getDbRef()

        const { enabled } = ctx.data

        const matchings = (await db.collections.matching.find({
            selector: { enabled }
        }).exec()).map(doc => doc.toJSON())


        console.log('MATCHING_GET', matchings)

        ctx.sendResponse({
            code: 200,
            data: matchings
        })
    }

    async add(): Promise<MatchingEntity> {
        const db = getDbRef()
        const matching: MatchingEntity = {
            id: uuidv4(),
            enabled: true,
            regexpStr: '',
            mode: 0,
            resScript: '',
            resJson: '',
            typeId: ''
        }

        await db.collections.matching.insert(matching)

        return matching
    }
}

export const controller = new Controller()