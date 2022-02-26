
import React from 'react'
import PropTypes from 'prop-types'

import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Header from 'components/header'
import Drawer from 'components/drawer'

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const LayoutMain = ({ Logout }) => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Header handleDrawerOpen={handleDrawerOpen} open={open} Logout={Logout} />
            <Drawer handleDrawerClose={handleDrawerClose} open={open} />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Outlet />
            </Box>
            <div style={{ position: 'absolute', bottom: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: 'red' }}>footer</div>
        </Box>
    );
}

LayoutMain.propTypes = {
    Logout: PropTypes.func,
};

export default LayoutMain
