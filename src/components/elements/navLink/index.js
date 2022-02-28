import React from 'react'
import PropTypes from 'prop-types';
import { NavLink as NavLinkReactRouter } from 'react-router-dom';

const NavLink = ({ to, children, ...props }) => {
    return (
        <NavLinkReactRouter
            {...props}
            className={({ isActive }) => {
                return isActive ? 'is-active' : undefined;
            }} to={'/'}
        >
            {children}
        </NavLinkReactRouter>
    )
}
NavLink.propTypes = {
    children: PropTypes.element,
    to: PropTypes.string,
};
export default NavLink
