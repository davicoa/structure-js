import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import colors from 'constants/colors'

const Login = ({ SingIn }) => {
    return (
        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100%' }}>
            <Grid sx={{ flexDirection: 'column', }}>
                <Typography styles={{ color: colors.secondary }}>
                    Login
                </Typography>
                <button onClick={SingIn}>logear</button>
            </Grid>
        </Grid>
    )
}
Login.propTypes = {
    SingIn: PropTypes.func,
};
export default Login
