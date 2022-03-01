import RecoverPassword from '../pages/auth/recover-password';
import ChangePassword from '../pages/auth/change-password';
import Register from '../pages/auth/register';

const auth = [
    {
        path: '/auth/recover-password',
        index: true,
        element: <RecoverPassword />,
    },
    {
        path: '/auth/change-password/:user_hash',
        index: true,
        element: <ChangePassword />
    },
    {
        path: '/auth/register',
        index: true,
        element: <Register />
    },
];

export default auth;
