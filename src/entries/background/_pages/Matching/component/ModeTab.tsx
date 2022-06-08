import React, { ReactNode, useState } from 'react'
import { TextField, Tabs, Tab, Box, Typography } from '@mui/material'


interface TabPanelProps {
    children?: React.ReactNode;
    id: string
    index: number;
    value: number;
}

export function TabPanel(props: TabPanelProps) {
    const { children, value, index, id, ...other } = props;

    return (
        <div
            style={{ width: '100%' }}
            role="tabpanel"
            hidden={value !== index}
            id={id}
            aria-labelledby={id}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

type TabData = {
    id: string
    label: string
    children: ReactNode | ReactNode[]
}

type Props = {
    tabs: TabData[]
}

export default function ({
    tabs
}: Props) {

    const [active, setActive] = useState(0)

    return <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500 }}
    >
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={active}
            onChange={(e, newValue) => setActive(newValue)}
            aria-label="Vertical tabs example"
            sx={{
                borderRight: 1,
                borderColor: 'divider',
                '& .MuiButtonBase-root': {
                    whiteSpace: 'nowrap'
                }
            }}
        >
            {
                tabs.map(item => <Tab
                    label={item.label}
                    key={item.id}
                    id={item.id}
                    aria-controls={item.id}
                />)
            }
        </Tabs>
        {
            tabs.map((item, index) => <TabPanel value={active} index={index} id={item.id}>
                {item.children}
            </TabPanel>)
        }
    </Box>
}
