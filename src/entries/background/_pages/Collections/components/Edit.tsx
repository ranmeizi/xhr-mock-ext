import React, { useEffect, useRef } from 'react'
import { WrappedFormMethods } from 'rc-form'
import Form from './Form'
import { Button, Box } from '@mui/material'
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

    function submit() {
        apiRef.current.validateFields((error, values) => {
            if (error) {
                return
            }

            window.request({
                type: 'COLLECTION_EDIT',
                data: {
                    id,
                    ...values
                }
            }).then((res: any) => {
                if (res.code === 200) {
                    $EB.emit($EB.TYPES.REFRESH_COLLECTION_TREE, '')
                }
            })
        })
    }

    return <Box sx={{ padding: 2 }}>
        <Form apiRef={apiRef} />
        <Button onClick={submit}>{id ? '保存' : '新增'}</Button>
    </Box>
}