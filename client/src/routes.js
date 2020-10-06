import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const Experience = lazy(() => import('./pages/Experience/Experience'));
const Project = lazy(() => import('./pages/Project/Project'));

const routes = [
    {
        path: '/project',
        component: Project
    },
    {
        path: '/experience',
        component: Experience
    },
    {
        exact: true,
        path: '/',
        component: Home
    },
];

export default routes;