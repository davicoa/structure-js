import React, { useState } from 'react';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Theme from 'theme';
import { useNavigate } from 'react-router-dom';
// import CustomSnackbar from 'components/Layout/CustomSnackbars';

import AuthService from 'services/auth.services';

const RecoverPassword = () => {
  const navigate = useNavigate();
  // hooks de campos de usuario
  const [email, setEmail] = useState();

  // hooks de errores
  const [errorEmail, setErrorEmail] = useState(false);

  // Función para abrir alert snack
  // eslint-disable-next-line no-unused-vars
  const [snackState, setSnackState] = useState({
    message: 'no message',
    open: '',
  });

  // Función para cerrar alert snack
  /* const onClose = () => {
    setSnackState({ ...snackState, open: false });
  }; */

  const handleSubmit = async () => {
    try {
      const res = await AuthService.changePassword({
        email: email,
      });
      if (res.status === 200) {
        /* history.push('/success', {
          tarea: 'solicitud-pass',
          data: { email: email },
        }); */
      }
    } catch (error) {
      setSnackState({
        open: true,
        severity: 'error',
        message: 'El usuario asociado al mail no esta registrado',
      });
    }
  };
  const handleBack = () => {
    return navigate('/')
  };

  // handle changes con verificaciones
  const handleChangeEmail = (text) => {
    setEmail(text);
    // eslint-disable-next-line no-useless-escape
    if (text && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text)) {
      setErrorEmail(false);
    } else {
      setErrorEmail(true);
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      style={{
        backgroundColor: '#F0F0F0',

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <Grid
        container
        item
        xl={3}
        lg={4}
        md={6}
        sm={8}
        xs={11}
        style={{
          borderRadius: 10,
          backgroundColor: '#ffffff',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          paddingBottom: '1rem',
        }}
      >
        <Grid
          container
          item
          justifyContent="center"
          alignContent="center"
          style={{
            backgroundColor: Theme.palette.primary.main,
            height: '3rem',
            width: '100%',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <Typography
            variant="h5"
            style={{
              textAlign: 'center',
              color: '#ffffff',
            }}
          >
            Recuperar contraseña
          </Typography>
        </Grid>
        <Grid
          container
          item
          style={{
            paddingLeft: '2rem',
            paddingRight: '2rem',
            paddingTop: '2rem',
          }}
        >
          <Typography style={{ textAlign: 'center', fontSize: '1.2rem' }}>
            Ingrese el correo electrónico asociado a la cuenta. Le enviaremos un
            email con un link para reestablecer su contraseña.
          </Typography>
        </Grid>
        <Grid
          container
          item
          direction="column"
          justifyContent="space-between"
          style={{ padding: '2rem' }}
        >
          <TextField
            fullWidth
            variant="outlined"
            label="E-Mail"
            value={email}
            size="small"
            error={errorEmail}
            onChange={(e) => handleChangeEmail(e.target.value)}
          />
        </Grid>

        <Grid
          container
          item
          direction="column"
          style={{ paddingLeft: '2rem', paddingRight: '2rem' }}
        >
          <Button
            variant="contained"
            disabled={errorEmail || !email}
            color="primary"
            onClick={() => handleSubmit()}
          >
            Enviar
          </Button>
          <Button
            variant="outlined"
            color="primary"
            style={{ border: 'none' }}
            onClick={() => handleBack()}
          >
            Volver
          </Button>
        </Grid>
      </Grid>
      {/* <CustomSnackbar
        message={snackState.message}
        open={snackState.open}
        severity={snackState.severity}
        onClose={onClose}
      /> */}
    </Grid>
  );
};
export default RecoverPassword;
