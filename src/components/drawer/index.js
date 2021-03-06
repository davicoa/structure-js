import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Tooltip from '@mui/material/Tooltip';

import { NavLink } from 'components/elements/navLink';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(7)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // padding TOP 1.09
    padding: theme.spacing(1.09, 1),
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
        '& .MuiPaper-root': {
            border: 'none',
            boxShadow: 'none',
        }
    }),
);

const StyledTooltip = styled(props => (
    <Tooltip classes={{ popper: props.className }} {...props} />
))`
    & .MuiTooltip-tooltip {
      color: #FFFF;
    }
`;

const MiniDrawer = ({ handleDrawerClose, open }) => {
    const theme = useTheme();
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                <NavLink to={'/'}>
                    <ListItem button key={'Home'} selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
                        <StyledTooltip title="Home" arrow placement="right">
                            <ListItemIcon >
                                <MailIcon />
                            </ListItemIcon>
                        </StyledTooltip>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                </NavLink>
                <NavLink to={'/penel'} >
                    <ListItem button key={'Panel'} selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
                        <StyledTooltip title="Panel" arrow placement="right">
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                        </StyledTooltip>
                        <ListItemText primary={'Panel'} />
                    </ListItem>
                </NavLink>
            </List>
            <Divider />
        </Drawer>
    );
}

MiniDrawer.propTypes = {
    handleDrawerClose: PropTypes.func,
    open: PropTypes.bool,
};

export default MiniDrawer
