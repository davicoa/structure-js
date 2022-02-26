import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Login from 'pages/login';

const PrivateRoute = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false)

    const SingIn = () => {
        setIsLogin(true)
    }

    return <>
        {isLogin
            ? children
            : <Login SingIn={SingIn} />}
    </>
}
PrivateRoute.propTypes = {
    children: PropTypes.element,
};

export default PrivateRoute
