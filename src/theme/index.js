import { createTheme } from '@mui/material/styles'
import colors from '../constants/colors'

const Theme = createTheme({
  overrides: {},
  typography: {
    fontFamily: 'Roboto',
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: '#FFCE76',
    },
    backgroundBlack: {
      main: '#5F5C5E',
    },
    success: {
      main: '#1C8269',
    },
    error: {
      main: '#D1001F',
    },
    tonalOffset: 0.2,
  },
  paletteCustom: {
    backgroundBlack: {
      main: '#000838',
    },
    backgroundGrey: {
      main: '#B5B2B2',
    },
  },
  MuiTableContainer: {
    root: {
      backgroundColor: 'red',
    },
  },
})

export default Theme
