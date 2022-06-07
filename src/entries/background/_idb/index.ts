import { createRxDatabase, RxDatabase, addRxPlugin } from 'rxdb';
import collectionSchema from './schemas/collection'
import typeSchema from './schemas/type'
// because we use the PouchDB RxStorage, we have to add the indexeddb adapter first.
import { getRxStorageDexie } from 'rxdb/plugins/dexie';
import { RxDBUpdatePlugin } from 'rxdb/plugins/update';

addRxPlugin(RxDBUpdatePlugin);

let db: RxDatabase

async function dbOpen() {
  db = await createRxDatabase({
    name: 'bbamockdb',                   // <- name
    storage: getRxStorageDexie(),  // <- RxStorage
    multiInstance: true,                // <- multiInstance (optional, default: true)
    eventReduce: true,                   // <- eventReduce (optional, default: true)
    cleanupPolicy: {}                   // <- custom cleanup policy (optional) 
  });

  (window as any).db = db

  // 创建集合
  const a = await db.addCollections({
    collection: {
      schema: collectionSchema
    },
    type: {
      schema: typeSchema
    }
  });

  (window as any).collections = a
}
dbOpen()

export function getDbRef() {
  return db
}