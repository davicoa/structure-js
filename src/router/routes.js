import LayoutMain from '../layouts/LayoutMain';
import Home from '../pages/home';
import Panel from '../pages/panel';

import Error404 from '../pages/error404';

const routes = [
    {
        path: '/',
        element: <LayoutMain />,
        children: [
            {
                index: true,
                path: '/',
                element: <Home />
            },
            {
                index: true,
                path: '/penel',
                element: <Panel />
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
                path: '*',
                element: <Error404 />,
            },
        ],
    },
];

export default routes;
