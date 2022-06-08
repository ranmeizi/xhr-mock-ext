import React, { useEffect, useRef } from 'react'
import { WrappedFormMethods } from 'rc-form'
import Form from './Form'
import { Button, Box, Typography } from '@mui/material'
import $EB from '@/utils/EventBus'

type Props = {
    id?: string
    parentId?: string
}

export default function ({
    id,
    parentId
}: Props) {
    const apiRef = useRef<WrappedFormMethods>()

    useEffect(() => {
        getData(id)
    }, [id])

    function getData(id: string) {
        window.request({
            type: 'COLLECTION_BYID',
            data: {
                id,
                withoutChildren: true
            }
        }).then((res: any) => {
            if (res.code === 200) {
                apiRef.current.setFieldsValue(res.data)
            }
        })
    }

    function onSubmit(data: any) {
        window.request({
            type: 'COLLECTION_EDIT',
            data: {
                id,
                ...data
            }
        }).then((res: any) => {
            if (res.code === 200) {
                $EB.emit($EB.TYPES.REFRESH_COLLECTION_TREE, '')
            }
        })
    }

    return <Box sx={{ padding: 2 }}>
        <Typography variant="h6" gutterBottom component="div">
            节点信息
        </Typography>
        <Form apiRef={apiRef} onSubmit={onSubmit} />
    </Box>
}