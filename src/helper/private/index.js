import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import Login from 'pages/login';
import { AuthContext } from 'context/useAuth'

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, login } = useContext(AuthContext)

    return <>
        {isAuthenticated
            ? children
            : <Login SingIn={login} />}
    </>
}
PrivateRoute.propTypes = {
    children: PropTypes.element,
};

export default PrivateRoute
