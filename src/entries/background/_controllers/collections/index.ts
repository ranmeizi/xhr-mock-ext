import * as Actions from '../Actions'
import { v4 as uuidv4 } from 'uuid';
import { getDbRef } from '../../_idb'
import { controller as MC } from '../matching'

class Controller {
    /**
     * 新增 collection
     * @param ctx 
     */
    async [Actions.COLLECTION_ADD](ctx: Ctx<Omit<CollectionEntity, 'id' | 'typeId'>>) {
        const db = getDbRef()

        // 如果是type === 1 是matching，那么新建 matching 关联进去
        let typeId = ''
        if (ctx.data.type === 1) {
            typeId = (await MC.add()).id
        }

        const collection: CollectionEntity = {
            id: uuidv4(),
            name: ctx.data.name,
            parentId: ctx.data.parentId,
            type: ctx.data.type,
            typeId: typeId
        }

        await db.collections.collection.insert(collection)

        ctx.sendResponse({
            code: 200,
            data: collection
        })
    }
    /**
     * 编辑 collection
     * @param ctx 
     */
    async [Actions.COLLECTION_EDIT](ctx: Ctx<Omit<CollectionEntity, 'parentId'>>) {
        const db = getDbRef()
        const doc = await db.collections.collection.findOne({
            selector: {
                id: ctx.data.id
            }
        }).exec()
        await doc.update({
            $set: {
                name: ctx.data.name,
                type: ctx.data.type,
                typeId: ctx.data.typeId
            }
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
    async [Actions.COLLECTION_BYID](ctx: Ctx<{ id: string, withoutChildren: boolean }>) {
        const db = getDbRef()

        const id = ctx.data.id

        const collection = (await db.collections.collection.findOne({
            selector: { id }
        }).exec()).toJSON()

        if (ctx.data.withoutChildren) {
            return ctx.sendResponse({
                code: 200,
                data: collection
            })
        }

        collection.children = await this.getChildren(id)
        ctx.sendResponse({
            code: 200,
            data: collection
        })
    }

    /**
     * tree
     * @param ctx 
     */
    async[Actions.COLLECTION_GET](ctx: Ctx) {
        const collections = await this.getChildren('')
        ctx.sendResponse({
            code: 200,
            data: collections
        })
    }

    /**
     * 删除节点
     */
    async[Actions.COLLECTION_DEL](ctx: Ctx<{ ids: string[] }>) {
        // 删除节点
        const db = getDbRef()
        const docMap = await db.collections.collection.findByIds(ctx.data.ids)
        console.log(docMap)
        for (const [id, doc] of docMap.entries()) {
            await doc.remove()
        }
        ctx.sendResponse({
            code: 200,
            data: null
        })
    }

    // 获取子节点
    private async getChildren(parentId: string) {
        const db = getDbRef()
        const children: CollectionEntity[] = (await db.collections.collection.find({
            selector: { parentId }
        }).exec()).map(doc => doc.toJSON())
        for (let i = 0; i < children.length; i++) {
            children[i] = Object.assign(children[i], {
                children: await this.getChildren(children[i].id)
            })
        }
        return children
    }
}

export const controller = new Controller()