import React, { useEffect, useState } from 'react'
import { Button, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Stack, Switch } from '@mui/material';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

export default function () {
    const [showN, setShowN] = useState(false)

    useEffect(() => {
        try {
            setShowN(localStorage.getItem('chrome_mock_ext_show_notification') === '1')
        } catch (e) {

        }
    }, [])

    function onCheckedChange(event: any) {
        setShowN(event.target.checked)
        localStorage.setItem('chrome_mock_ext_show_notification', event.target.checked ? '1' : '0')
    }

    return <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={gotoBackground}>
                        <ListItemIcon>
                            <BuildCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="background配置页" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <Stack>
                        <div>显示notification</div>
                        <Switch checked={showN} onChange={onCheckedChange} />
                    </Stack>
                </ListItem>
            </List>
        </nav>
        <Divider />
    </Box>
}

function gotoBackground() {
    window.open(chrome.extension.getURL('background.html'));
}