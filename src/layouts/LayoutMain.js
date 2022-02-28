
import React from 'react'
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Header from 'components/header'
import Drawer from 'components/drawer'
import Footer from 'components/footer'

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const LayoutMain = () => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100%', flexDirection: 'column', boxSizing: 'content-box' }}>
            <Header handleDrawerOpen={handleDrawerOpen} open={open} />
            <Drawer handleDrawerClose={handleDrawerClose} open={open} />
            <Box component="main" sx={{ flexGrow: 1, p: 1, paddingLeft: !open ? '4rem' : '15.5rem', height: '100%', width: '100%', backgroundColor: 'gray', boxSizing: 'border-box' }}>
                <DrawerHeader />
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
}

export default LayoutMain
