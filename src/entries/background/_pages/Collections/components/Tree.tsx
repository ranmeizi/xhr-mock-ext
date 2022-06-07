import React, { useEffect, useState, useMemo } from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem, { useTreeItem } from '@mui/lab/TreeItem';
import { Stack, Box, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import CustomContent from './CustomContent';
import $EB from '@/utils/EventBus'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export type TreeNode = CollectionEntity & {
    children: TreeNode[] // 
}

type Props = {
    selectedId?: string
    onSelected?: (value: TreeNode) => void
}

// 从db获取结构，每次数据更新重建tree
export default function CollectionTree({
    selectedId,
    onSelected
}: Props) {
    const [tree, setTree] = useState<TreeNode[]>([])
    const [open, setOpen] = React.useState(false);

    const flat = useMemo(() => {
        const map: Record<string, TreeNode> = {}
        function forChildren(children: TreeNode[]) {
            for (const node of children) {
                map[node.id] = node
                if (node.children) {
                    forChildren(node.children)
                }
            }
        }
        forChildren(tree)
        return map
    }, [tree])

    useEffect(() => {
        getData()

        $EB.on($EB.TYPES.REFRESH_COLLECTION_TREE, getData)

        return () => {
            $EB.un($EB.TYPES.REFRESH_COLLECTION_TREE, getData)
        }
    }, [])

    async function getData() {
        await window.request({
            type: 'COLLECTION_GET',
            data: null
        }).then((res: any) => {
            setTree(res.data)
        })
    }

    function onAdd(parentId: string, type: number) {
        window.request({
            type: 'COLLECTION_ADD',
            data: {
                parentId,
                type,
                name: '未命名'
            }
        }).then(async (res: any) => {
            if (res.code === 200) {
                getData()
            }
        })
    }

    function onDel() {
        setOpen(true);
    }

    function delNode() {
        setOpen(false)
        // 获取ids
        const ids = [selectedId]

        function getChildId(parentId: string) {
            for (const node of flat[parentId].children) {
                ids.push(node.id)
                getChildId(node.id)
            }
        }

        getChildId(selectedId)

        window.request({
            type: 'COLLECTION_DEL',
            data: { ids }
        }).then((res: any) => {
            if (res.code === 200) {
                getData()
            }
        })
    }

    const handleClose = () => {
        setOpen(false);
    };

    function onNodeSelect(e: React.SyntheticEvent, id: string) {
        const node = flat[id]
        onSelected(node)
    }

    function renderTree(tree: TreeNode[]) {
        return tree.map(node => {
            return <CustomTreeItem
                onAdd={onAdd}
                onDel={onDel}
                nodeId={node.id}
                label={node.name}
                node={node}
                selected={node.id === selectedId}
            >
                {
                    renderTree(node.children)
                }
            </CustomTreeItem>
        })
    }

    return <div>
        <Box padding={2}>
            <Stack direction={'row'} justifyContent='space-between'>
                <span>当前节点：{flat[selectedId]?.name}</span>
                <IconButton onClick={() => onAdd('', 0)}><AddIcon /></IconButton>
            </Stack>
        </Box>

        <TreeView
            aria-label="collection-tree"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            onNodeSelect={onNodeSelect}
            sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
        >
            {renderTree(tree)}
        </TreeView>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"删除操作二次确认"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    删除操作会一并删除子节点，请确认是否需要删除？
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>取消</Button>
                <Button onClick={delNode}>确认</Button>
            </DialogActions>
        </Dialog>
    </div>
}

const CustomTreeItem = (props: any) => {
    return <TreeItem ContentComponent={CustomContent} {...props} ContentProps={props} />
}