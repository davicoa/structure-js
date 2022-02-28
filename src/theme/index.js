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
      main: colors.secondary,
    },
    background: {
      main: colors.background,
    },
    success: {
      main: colors.success,
    },
    error: {
      main: colors.error,
    },
    tonalOffset: 0.2,
  },
  '&$selected': {
    color: 'white',
    '& .MuiListItemIcon-root': {
      color: 'white'
    }
  },
  '&$selected:hover': {
    backgroundColor: 'purple',
    color: 'white',
    '& .MuiListItemIcon-root': {
      color: 'white'
    }
  },
  '&:hover': {
    backgroundColor: 'blue',
    color: 'white',
    '& .MuiListItemIcon-root': {
      color: 'white'
    }
  },
})

export default Theme
