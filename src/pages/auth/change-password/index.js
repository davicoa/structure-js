import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Button from '@mui/material/Button'
import Check from '@mui/icons-material/Check'
import Close from '@mui/icons-material/Close'

import Theme from 'theme';
import AuthServices from 'services/auth.services'
const ChangePassword = () => {
  // eslint-disable-next-line camelcase
  const { user_hash } = useParams();

  const [, setSnackState] = useState({
    message: 'no message',
    open: '',
  });

  // hooks de campos de usuario
  const [pass, setPass] = useState();
  const [confirmPass, setConfirmPass] = useState();

  // hooks de errores

  const [errorPass, setErrorPass] = useState(false);
  const [errorConfirmPass, setErrorConfirmPass] = useState(false);

  const [passVisibility, setPassVisibility] = useState(true);
  const [confirmPassVisibility, setConfirmPassVisibility] = useState(true);

  const handleSubmit = async () => {
    try {
      const res = await AuthServices.changePassword(user_hash, {
        contraseña: pass,
      });
      if (res.status > 199 && res.status < 299) {
        history.push('/success', { tarea: 'cambio-pass', data: res.data });
      }
    } catch (error) {
      setSnackState({
        open: true,
        severity: 'error',
        message: 'Error cambiando contraseña',
      });
    }
  };

  // handle changes con verificaciones

  const handleChangePass = (text) => {
    setPass(text);
    if (text) {
      setErrorPass(false);
    } else {
      setErrorPass(true);
    }
  };
  const handleChangeConfirmPass = (text) => {
    setConfirmPass(text);
    if (text) {
      setErrorConfirmPass(false);
    } else {
      setErrorConfirmPass(true);
    }
  };

  // Function for control if the password have 8 characters length.
  const lengthRight = pass?.length > 7;
  function controlCharacters() {
    return (
      <Grid
        container
        item
        direction="row"
        justifyContent="flex-start"
        alignContent="center"
        alignItems="center"
      >
        {lengthRight
          ? (<Check color="primary" />)
          : (<Close color="error" />
          )}
        <Typography variant="body2">Mínimo 8 caracteres</Typography>
      </Grid>
    );
  }

  // Function for control if the password have minimium 1 uppercase
  const regexUpper = /[A-Z]/;
  const upperRight = regexUpper.test(pass);
  function controlUppercase() {
    return (
      <Grid
        container
        item
        direction="row"
        justifyContent="flex-start"
        alignContent="center"
        alignItems="center"
      >
        {upperRight
          ? (<Check color="primary" />)
          : (<Close color="error" />
          )}
        <Typography variant="body2">Al menos una mayúscula</Typography>
      </Grid>
    );
  }

  // Function for control if the password have minimium 1 number
  const regexNumber = /[0-9]|[!@#$%^&*_-]/;
  const specialRight = regexNumber.test(pass);
  function controlSpecial() {
    return (
      <Grid
        container
        item
        direction="row"
        justifyContent="flex-start"
        alignContent="center"
        alignItems="center"
      >
        {specialRight
          ? (<Check color="primary" />)
          : (<Close color="error" />
          )}
        <Typography variant="body2">
          Al menos un número o caracter especial
        </Typography>
      </Grid>
    );
  }
  // Function for control if the password is same passwordConfirm
  const confirmRight = confirmPass && pass === confirmPass;
  function controlMatch() {
    return (
      <Grid
        container
        item
        direction="row"
        justifyContent="flex-start"
        alignContent="center"
        alignItems="center"
      >
        {confirmRight
          ? <Check color="primary" />
          : <Close color="error" />
        }
        <Typography variant="body2">Las contraseñas deben coincidir</Typography>
      </Grid>
    );
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      style={{
        // backgroundImage: `url(${fondo})`,
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
            Cambio de contraseña
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
            label="Contraseña"
            value={pass}
            size="small"
            type={passVisibility ? 'password' : 'text'}
            error={errorPass}
            onChange={(e) => handleChangePass(e.target.value)}
            style={{ marginTop: '1rem' }}
            InputProps={{
              endAdornment: (
                <IconButton
                  style={{ height: '2rem', width: '2rem' }}
                  onClick={() => setPassVisibility(!passVisibility)}
                >
                  {!passVisibility ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }}
          />{' '}
          <TextField
            fullWidth
            variant="outlined"
            label="Repetir contraseña"
            value={confirmPass}
            size="small"
            type={confirmPassVisibility ? 'password' : 'text'}
            error={errorConfirmPass}
            onChange={(e) => handleChangeConfirmPass(e.target.value)}
            style={{ marginTop: '1rem' }}
            InputProps={{
              endAdornment: (
                <IconButton
                  style={{ height: '2rem', width: '2rem' }}
                  onClick={() =>
                    setConfirmPassVisibility(!confirmPassVisibility)
                  }
                >
                  {!confirmPassVisibility ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }}
          />
        </Grid>
        <Grid container item direction="column" style={{ paddingLeft: '2rem' }}>
          <Typography>Requerimientos de contraseña</Typography>
          {controlCharacters()}
          {controlUppercase()}
          {controlSpecial()}
          {controlMatch()}
        </Grid>
        <Grid container item direction="column" style={{ padding: '2rem' }}>
          <Button
            variant="contained"
            disabled={
              errorPass ||
              errorConfirmPass ||
              !specialRight ||
              !upperRight ||
              !confirmRight ||
              !lengthRight
            }
            color="primary"
            onClick={() => handleSubmit()}
          >
            Confirmar
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
export default ChangePassword;
