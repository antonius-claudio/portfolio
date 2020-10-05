import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));

const routes = [
    {
        exact: true,
        path: '/',
        component: Home
    },
];

export default routes;