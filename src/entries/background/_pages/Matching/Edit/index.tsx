import React, { useRef, useEffect } from 'react'
import Form from './Form'
import { Box, Typography } from '@mui/material'
import { WrappedFormMethods } from 'rc-form'
import $EB from '@/utils/EventBus'

type Props = {
    id?: string
}

export default function ({
    id
}: Props) {

    const apiRef = useRef<WrappedFormMethods>()

    useEffect(() => {
        getData(id)
    }, [id])

    function getData(id: string) {
        window.request({
            type: 'MATCHING_BYID',
            data: {
                id
            }
        }).then((res: any) => {
            console.log(res)
            if (res.code === 200) {
                apiRef.current.setFieldsValue(res.data)
            }
        })
    }

    function onSubmit(data: any) {
        console.log(data)
        window.request({
            type: 'MATCHING_EDIT',
            data: {
                id,
                ...data
            }
        }).then((res: any) => {
            getData(id)
        })
    }

    return <Box padding={2}>
        <Typography variant="h6" gutterBottom component="div">
            请求信息
        </Typography>
        <Form apiRef={apiRef} onSubmit={onSubmit} />
    </Box>
}
