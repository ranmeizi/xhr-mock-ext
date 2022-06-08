import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { CollectionsBookmark, TextFields, SettingsEthernet, BugReport, Menu as MenuIcon } from '@mui/icons-material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TypesList from './_pages/Types/List';
import GenericsList from './_pages/Generics/List';
import CollectionsList from './_pages/Collections/List';
import Test from './_pages/Test';
import { BgContainer } from './Styled'

const Pages = {
    Collections: CollectionsList,
    Types: TypesList,
    Generics: GenericsList,
    Test: Test
}

const config = [{
    label: '分类管理',
    value: 'Collections',
    icon: <CollectionsBookmark />
}, {
    label: '类型管理',
    value: 'Types',
    icon: <TextFields />
}, {
    label: '范型管理',
    value: 'Generics',
    icon: <SettingsEthernet />
}, {
    label: '测试页面',
    value: 'Test',
    icon: <BugReport />
}]

// 管理展示页面和整体结构的组件
export default function () {
    const [open, setOpen] = useState(false)
    const [page, setPage] = useState<keyof typeof Pages | ''>('')
    return <BgContainer>
        <CssBaseline />
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => setOpen(true)}
                >
                    <MenuIcon />
                </IconButton>
                <img src="img/logo.png" alt="" height={36} />
            </Toolbar>
        </AppBar>
        <Drawer
            anchor='left'
            open={open}
            onClose={() => setOpen(false)}
        >
            <List style={{ width: 200 }}>
                {config.map((item, index) => (
                    <ListItem key={item.value} disablePadding>
                        <ListItemButton selected={page === item.value} onClick={() => {
                            setOpen(false)
                            setPage(item.value as keyof typeof Pages)
                        }}>
                            <ListItemIcon>
                                {
                                    item.icon
                                }
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
        <Container fixed>
            <Box sx={{ height: '100vh' }}>
                {page ? React.createElement(Pages[page], {}) : null}
            </Box>
        </Container>
    </BgContainer>
}
