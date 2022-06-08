import React, { useEffect, useState } from 'react'
import { createForm, PropsWithForm, FormValidateRule } from 'rc-form'
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Stack, FormControl, InputLabel, Button } from '@mui/material'

// 表单组件属性
type Props = {
    apiRef?: React.MutableRefObject<any>,
    onSubmit?: (data: any) => void
}

// 校验规则
const rules: Record<string, FormValidateRule[]> = {}

function Form({
    apiRef,
    form,
    onSubmit
}: PropsWithForm<Props, { form: any }>) {
    const { getFieldProps, getFieldValue } = form
    const [type, setType] = useState<any>(undefined)

    useEffect(() => {
        if (apiRef) {
            apiRef.current = form
        }
    }, [])

    function submit() {
        form.validateFields((error, values) => {
            if (error) {
                return
            }
            onSubmit && onSubmit(values)
        })
    }

    return <Stack direction='row' justifyContent={'space-between'} sx={{ width: '100%' }}>
        <Stack direction='row' spacing={1} sx={{ flex: 1 }}>
            <TextField
                {...getFieldProps('name', {
                    initialValue: ''
                })}
                label="名称"
                size="small"
                style={{ width: '200px' }}
            />
            <FormControl fullWidth>
                <InputLabel id="type">类型</InputLabel>
                <Select
                    {...getFieldProps('type', {
                        initialValue: 0,
                        getValueProps(value) {
                            type !== value && setType(value)
                            return { value }
                        }
                    })}
                    disabled
                    labelId="type"
                    label="类型"
                    size="small"
                    style={{ width: '150px' }}
                >
                    <MenuItem value={0}>目录</MenuItem>
                    <MenuItem value={1}>请求</MenuItem>
                </Select>
            </FormControl>
            <Button onClick={submit}>保存</Button>
        </Stack>
    </Stack>
}

export default createForm<Props>()(Form as any)
