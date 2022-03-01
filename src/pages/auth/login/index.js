import React, { useState, useContext } from 'react'
import { NavLink } from 'components/elements/navLink';
import jwt from 'jwt-decode'

import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
// import Button from '@mui/material/Button'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
// import colors from 'constants/colors'
import AuthServices from 'services/auth.services'
import BasicButton from 'components/elements/button'

import useStyles from './styles'

import { ReactComponent as LogoColor } from 'assets/svg/logo/logo_color.svg'

import { AuthContext } from 'context/useAuth'

const Login = ({ login }) => {
    const styles = useStyles()
    const { setUser } = useContext(AuthContext)
    const [error, setError] = useState(false);
    const [errorLogin, setErrorLogin] = useState(null);
    const [loading, setLoading] = useState(false);

    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    // Funcion para mostrar password
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleHelperText = () => {
        setErrorLogin(null);
        setError(false);
        setLoading(false);
    };

    // Funcion para enviar al back
    const iniciarSesion = async () => {
        setLoading(true);
        const data = {
            email: values.email,
            password: values.password,
        };
        try {
            const res = await AuthServices.login(data);
            if (res.status === 200) {
                const token = jwt(res.data.access);
                localStorage.setItem('token', res.data.access);
                setUser({
                    user_token: res.data.access,
                    user_id: token.user_id || '',
                    user_name: token.nombre_usuario || '',
                    user_email: token.email || '',
                    user_rol: token.rol || '',
                    user_nombreRol: token.rol_nombre || '',
                    user_matricula: token.matricula || '',
                });
                login()
            }
        } catch (error) {
            setError(true);
            setErrorLogin('Datos inválidos. Verifique usuario y/o clave');
        }
    };

    return (
        <Grid className={styles.container}>
            <Grid
                container
                justifyContent="center"
                alignContent="center"
                className={styles.containerSecundary}
            >
                <Grid
                    container
                    className={styles.main}
                >
                    <Grid
                        container
                        item
                        justifyContent="center"
                        alignContent="center"
                        style={{
                            paddingTop: '2rem',
                        }}
                    >
                        <LogoColor />
                    </Grid>
                    <Grid
                        container
                        item
                        direction="column"
                        justifyContent="space-between"
                        style={{ padding: '2rem' }}
                    >
                        <TextField
                            error={error}
                            fullWidth
                            variant="outlined"
                            label="E-Mail"
                            name="email"
                            onChange={handleChange('email')}
                            onClick={handleHelperText}
                        />
                        <TextField
                            error={error}
                            fullWidth
                            variant="outlined"
                            label="Contraseña"
                            type={values.showPassword ? 'text' : 'password'}
                            name="password"
                            style={{ marginTop: '1rem' }}
                            value={values.password}
                            helperText={errorLogin}
                            onChange={handleChange('password')}
                            onClick={handleHelperText}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Grid container item direction="column" align="center">

                            <BasicButton onClick={/* login */iniciarSesion} disabled={loading} tittle={'Confirmar'} style={{ marginTop: '2rem' }} />

                            <NavLink
                                to="/auth/recover-password"
                                style={{ marginTop: '1rem' }}
                            >
                                ¿Olvidaste tu Contraseña?
                            </NavLink>
                            <Typography
                                align="center"
                                style={{ marginTop: '2rem' }}
                            >
                                ¿ERES NUEVO?
                            </Typography>
                            <NavLink
                                to="/auth/register"
                            >
                                Crea una cuenta
                            </NavLink>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

Login.propTypes = {
    login: PropTypes.func,
};

export default Login
