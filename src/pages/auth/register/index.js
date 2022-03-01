import React, { useState } from 'react';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import Theme from 'theme';
import Close from '@mui/icons-material/Close'
import Check from '@mui/icons-material/Check';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AuthServices from '../../../services/auth.services';
import { useNavigate } from 'react-router-dom';
// import ButtonLoading from 'components/buttonLoading/ButtonLoading';

const Registro = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [cargando, setCargando] = useState(false);

  // hooks de campos de usuario
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [email, setEmail] = useState();
  // const [tipo, setTipo] = useState(0);
  const [matricula, setMatricula] = useState();
  const [pass, setPass] = useState();
  const [confirmPass, setConfirmPass] = useState();

  // hooks de errores
  const [errorNombre, setErrorNombre] = useState(false);
  const [errorApellido, setErrorApellido] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  // const [errorTipo, setErrorTipo] = useState(false);
  const [errorMatricula, setErrorMatricula] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [errorConfirmPass, setErrorConfirmPass] = useState(false);

  const [passVisibility, setPassVisibility] = useState(true);
  const [confirmPassVisibility, setConfirmPassVisibility] = useState(true);

  const handleSubmit = async () => {
    const sendData = {
      email: email,
      password: pass,
      nombre: nombre,
      apellido: apellido,
      tipoUsuario: 1, // tipo de usuario hardcodeado a 1 por solicitud del cliente
      matricula: matricula,
    };
    try {
      setCargando(true);
      const res = await AuthServices.create(sendData);
      if (res.status === 201) {
        setCargando(false);
        history.push('/success', { tarea: 'registro', data: res.data });
      }
      setCargando(false);
    } catch (error) {
      setCargando(false);

      if (error?.response?.status === 400) {
        if (error?.response?.data?.email) {
          setErrorEmail(true);
          setErrorEmailLeyenda(error?.response?.data?.email);
        }
        setErrorRegister(error?.response?.data?.detail);
      }
    }
  };
  const handleBack = () => {
    return navigate('/')
  };

  // Controlador del mensaje error del Email ya existente
  const [errorRegister, setErrorRegister] = useState(null);
  const [errorEmailLeyenda, setErrorEmailLeyenda] = useState(null);

  const handleHelperText = () => {
    setErrorRegister(null);
    setErrorEmailLeyenda(null);
    setErrorEmail(false);
  };

  // handle changes con verificaciones
  const handleChangeNombre = (text) => {
    setNombre(text);
    if (text && /^[a-z ñáéíóú']+$/i.test(text)) {
      setErrorNombre(false);
    } else {
      setErrorNombre(true);
    }
  };
  const handleChangeApellido = (text) => {
    setApellido(text);
    if (text && /^[a-z ñáéíóú']+$/i.test(text)) {
      setErrorApellido(false);
    } else {
      setErrorApellido(true);
    }
  };
  const handleChangeEmail = (text) => {
    setEmail(text);
    // eslint-disable-next-line no-useless-escape
    if (text && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text)) {
      setErrorEmail(false);
    } else {
      setErrorEmail(true);
    }
  };
  const handleChangeMatricula = (text) => {
    setMatricula(text);
    if (text) {
      setErrorMatricula(false);
    } else {
      setErrorMatricula(true);
    }
  };
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
          ? <Check color="primary" />
          : <Close color="error" />
        }
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
          ? <Check color="primary" />
          : <Close color="error" />
        }
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
          ? <Check color="primary" />
          : <Close color="error" />
        }
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
        backgroundColor: '#F0F0F0',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        padding: '0.5rem',
      }}
    >
      <Container
        maxWidth="xs"
        style={{
          borderRadius: 10,
          backgroundColor: '#ffffff',
          paddingLeft: 0,
          paddingRight: 0,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
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
            Registro de usuario
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
            label="Nombre"
            value={nombre && nombre}
            size="small"
            error={errorNombre}
            onChange={(e) => handleChangeNombre(e.target.value)}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Apellido"
            value={apellido}
            size="small"
            error={errorApellido}
            onChange={(e) => handleChangeApellido(e.target.value)}
            style={{ marginTop: '1rem' }}
          />{' '}
          <TextField
            fullWidth
            variant="outlined"
            label="E-Mail"
            value={email}
            size="small"
            error={errorEmail}
            // Agrego esta lineas para mostrar error email ya registrado
            helperText={errorEmailLeyenda}
            onClick={handleHelperText}
            onChange={(e) => handleChangeEmail(e.target.value)}
            style={{ marginTop: '1rem' }}
          />{' '}
          {/* <FormControl
            fullWidth
            variant="outlined"
            size="small"
            style={{ marginTop: "1rem" }}
          >
            <InputLabel id="demo-simple-select-label">Módulo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={tipo}
              error={errorTipo}
              label="Módulo"
              onChange={(e) => handleChangeTipo(e.target.value)}
            >
              <MenuItem value={0}>-</MenuItem>
              {tipos && tipos.length > 0
                ? tipos.map((tip) => (
                    <MenuItem value={tip.id}>{tip.nombre}</MenuItem>
                  ))
                : null}
            </Select>
          </FormControl> */}
          <TextField
            fullWidth
            variant="outlined"
            label="Número de empleado"
            type="number"
            value={matricula}
            size="small"
            error={errorMatricula}
            onChange={(e) => handleChangeMatricula(e.target.value)}
            style={{ marginTop: '1rem' }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Contraseña"
            value={pass}
            size="small"
            autoComplete="new-password"
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
        <Typography style={{ paddingLeft: '2rem', color: 'red' }} >{errorRegister}</Typography>
        <Grid container item direction="column" style={{ paddingLeft: '2rem', marginTop: '1rem' }}>
          <Typography>Requerimientos de contraseña</Typography>
          {controlCharacters()}
          {controlUppercase()}
          {controlSpecial()}
          {controlMatch()}
        </Grid>
        <Grid container item direction="column" style={{ padding: '2rem' }}>
          <Button
            color="primary"
            onClick={() => handleSubmit()}
          >
            Confirmar
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
      </Container>
    </Grid>
  );
};
export default Registro;
