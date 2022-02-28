import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import colors from 'constants/colors'

import BasicButton from 'components/elements/button'

const Login = ({ login }) => {
    return (
        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100%' }}>
            <Grid sx={{ flexDirection: 'column', }}>
                <Typography styles={{ color: colors.secondary }}>
                    Login
                </Typography>
                <BasicButton onClick={login} tittle={'Login'} />
            </Grid>
        </Grid>
    )
}
Login.propTypes = {
    login: PropTypes.func,
};
export default Login
