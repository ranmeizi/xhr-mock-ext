import React, { useEffect, useState } from 'react'
import { createForm, PropsWithForm, FormValidateRule } from 'rc-form'
import { TextField, Select, MenuItem, Box, Typography, Stack, FormControl, InputLabel, Button } from '@mui/material'
import ModeTab from '../component/ModeTab'
import JSONTextArea from '../component/JSONTextArea'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

// 表单组件属性
type Props = {
    apiRef?: React.MutableRefObject<any>
    onSubmit?: (data: any) => void
}

// 校验规则
const rules: Record<string, FormValidateRule[]> = {}

function Form({
    apiRef,
    form,
    onSubmit
}: PropsWithForm<Props, { form: any }>) {

    const [active, setActive] = useState(0)

    const { getFieldProps } = form
    useEffect(() => {
        if (apiRef) {
            apiRef.current = form
        }
    }, [])

    const tabs = [{
        id: 'tab-resjson',
        value: 0,
        label: 'Res JSON',
        children: <JSONTextArea  {...getFieldProps('resJson', {
            initialValue: ''
        })} />
    }, {
        id: 'tab-resscript',
        value: 1,
        label: 'Res 中间件',
        children: <div>等等再写</div>
    }, {
        id: 'tab-restype',
        value: 2,
        label: 'Res 类型',
        children: <div>等等再写</div>
    }]

    function submit() {
        form.validateFields((error, values) => {
            if (error) {
                return
            }
            onSubmit && onSubmit(values)
        })
    }

    return <div>
        {/* 匹配 */}
        <Stack direction={'row'} justifyContent='space-between'>
            <Stack direction={'row'} spacing={2} padding={[2, 0]}>
                <TextField
                    {...getFieldProps('regexpStr', {
                        initialValue: ''
                    })}
                    label="匹配URL"
                    size="small"
                    style={{ width: '100%' }}
                />
                <FormControl>
                    <InputLabel id="type">响应拦截模式</InputLabel>
                    <Select
                        {...getFieldProps('mode', {
                            initialValue: 0
                        })}
                        labelId="type"
                        label="响应拦截模式"
                        size="small"
                        style={{ width: '150px' }}
                    >
                        {
                            tabs.map((item) => <MenuItem value={item.id}>{item.label}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            </Stack>
            <Button onClick={submit}>保存</Button>
        </Stack>
        <ModeTab
            tabs={tabs}
        />
    </div>
}

export default createForm<Props>()(Form as any)
