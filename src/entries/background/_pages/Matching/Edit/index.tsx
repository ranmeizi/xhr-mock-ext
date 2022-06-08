import React from 'react'
import Form from './Form'
import { Box, Typography } from '@mui/material'

type Props = {
    id?: string
}

export default function ({
    id
}: Props) {
    return <Box padding={2}>
        <Typography variant="h6" gutterBottom component="div">
            请求信息
        </Typography>
        <Form />
    </Box>
}
