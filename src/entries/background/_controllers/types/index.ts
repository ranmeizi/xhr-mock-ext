import * as Actions from '../Actions'
import { v4 as uuidv4 } from 'uuid';
import { getDbRef } from '../../_idb'

type properties = {
    key: string,
    genericIndex?: number,
    type: string | properties[],
    defaultValue?: string
}

type TypeAddCommand = {
    parentId: string
    name: string
    desc?: string
    refId?: string
    type: 0 | 1 | 2
    args?: string[]
    defaultValue?: string
}

class Controller {
    /**
     * 新建类型
     */
    async [Actions.TYPE_ADD](ctx: Ctx<TypeAddCommand>) {
        const db = getDbRef()
        const {
            parentId,
            name,
            desc = '',
            refId = null,
            type,
            args = [],
            defaultValue = null
        } = ctx.data
        db.collections.collection.insert({
            id: uuidv4(),
            parentId,
            name,
            desc,
            refId,
            type,
            args,
            defaultValue
        })
    }
}

export const controller = new Controller()