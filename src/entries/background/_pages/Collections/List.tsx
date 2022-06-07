import React, { useEffect, useMemo, useState } from 'react'
import { Paper } from '@mui/material'
import CollectionTree, { TreeNode } from './components/Tree'
import CollectionEdit from './components/Edit'
import { Divider } from '@mui/material'
import { StackContainer } from './Styled'

export default function () {
    const [selected, setSelected] = useState<TreeNode>()

    const currName = useMemo(() => {
        return selected?.name || ''
    }, [selected])

    const rightView = useMemo(() => {
        switch (selected?.type) {
            case 0: return <CollectionEdit id={selected?.id} />
            case 1: return <CollectionEdit id={selected?.id} />
            default: return <div>空</div>
        }
    }, [selected])

    return <StackContainer direction="row" spacing={2}>
        {/* 左边树 */}
        <Paper style={{ width: '400px' }}>
            <CollectionTree
                selectedId={selected?.id}
                onSelected={setSelected}
            />
        </Paper>
        {/* 右边编辑 */}
        <Paper style={{ flex: 1 }}>
            {rightView}
            <Divider light />
            虾米哪内容
        </Paper>
    </StackContainer>
}