
import React from 'react'
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Header from 'components/header'
import Drawer from 'components/drawer'
import Footer from 'components/footer'
import useStyles from './styles'

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const LayoutMain = () => {
    const styles = useStyles()
    const [open, setOpen] = React.useState(false)
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box className={styles.container}>
            <Header handleDrawerOpen={handleDrawerOpen} open={open} />
            <Drawer handleDrawerClose={handleDrawerClose} open={open} />
            <Box component="main" className={styles.main} style={{ paddingLeft: !open ? '3.6rem' : '15rem' }}>
                <DrawerHeader />
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
}

export default LayoutMain
