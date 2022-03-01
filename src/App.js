import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import {
  useRoutes,
  Outlet
} from 'react-router-dom';
import { AuthProvider } from 'context/useAuth';

import routes from './router/routes';
import { ThemeProvider } from '@mui/material/styles'

import theme from './theme'

function App() {
  const element = useRoutes(routes);
  return (<>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        {element}
      </AuthProvider>
      <Outlet />
    </ThemeProvider>
  </>
  )
}

export default App
