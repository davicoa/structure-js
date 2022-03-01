import LayoutMain from '../layouts/LayoutMain';
import PrivateRoute from 'helper/private'

import Home from '../pages/home';
import Panel from '../pages/panel';

import RecoverPassword from '../pages/auth/recover-password';
import ChangePassword from '../pages/auth/change-password';
import Register from '../pages/auth/register';

import Error404 from '../pages/error404';

const routes = [
    {
        path: '/',
        element: <LayoutMain />,
        children: [
            {
                index: true,
                path: '/',
                element: <PrivateRoute><Home /></PrivateRoute>
            },
            {
                index: true,
                path: '/penel',
                element: <PrivateRoute><Panel /></PrivateRoute>
            },
            /*  {
                 path: '/courses',
                 element: <Courses />,
                 children: [
                     { index: true, element: <CoursesIndex /> },
                     { path: '/courses/:id', element: <Course /> },
                 ],
             }, */
            {
                path: '/auth/recover-password',
                index: true,
                element: <RecoverPassword />,
            },
            {
                path: '/auth/change-password/:user_hash',
                element: <ChangePassword />
            },
            {
                path: '/auth/register',
                element: <Register />
            },
            {
                path: '*',
                element: <Error404 />,
            },
        ],
    },
];

export default routes;
