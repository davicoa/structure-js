import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import Login from 'pages/auth/login';
import { AuthContext } from 'context/useAuth'

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, login } = useContext(AuthContext)

    return <>
        {isAuthenticated
            ? children
            : <Login login={login} />}
    </>
}
PrivateRoute.propTypes = {
    children: PropTypes.element,
};

export default PrivateRoute
