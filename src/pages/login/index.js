import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@mui/material/Typography'
import colors from 'constants/colors'

const Login = ({ SingIn }) => {
    return (
        <>
            <Typography styles={{ color: colors.secondary }}>
                Login
            </Typography>
            <button onClick={SingIn}>logear</button>
        </>
    )
}
Login.propTypes = {
    SingIn: PropTypes.func,
};
export default Login
