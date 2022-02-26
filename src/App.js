import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import {
  useRoutes,
  Outlet
} from 'react-router-dom';
import PrivateRoute from 'helper/private';

import routes from './router/routes';
import { ThemeProvider } from '@mui/material/styles'

import theme from './theme'

function App() {
  const element = useRoutes(routes);
  return (<>
    <ThemeProvider theme={theme}>
      <PrivateRoute>
        {element}
      </PrivateRoute>
      <Outlet />
    </ThemeProvider>
  </>
  )
}

export default App
