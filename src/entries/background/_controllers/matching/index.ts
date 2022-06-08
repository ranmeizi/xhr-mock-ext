import * as Actions from '../Actions'
import { v4 as uuidv4 } from 'uuid';
import { getDbRef } from '../../_idb'

class Controller {
    async [Actions.MATCHING_ADD](ctx: Ctx) {

        const matching: MatchingEntity = await this.add()

        ctx.sendResponse({
            code: 200,
            data: matching
        })
    }

    async [Actions.MATCHING_EDIT](ctx: Ctx<{ id: string } & Partial<MatchingEntity>>) {

        const db = getDbRef()
        const doc = await db.collections.matching.findOne({
            selector: {
                id: ctx.data.id
            }
        }).exec()

        const newDoc: MatchingEntity = Object.assign(doc, ctx.data)

        await doc.update({
            $set: newDoc
        })

        ctx.sendResponse({
            code: 200,
            data: doc.toJSON()
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