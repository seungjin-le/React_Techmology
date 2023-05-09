import React from 'react';

const Main = React.lazy(() => import('./pages/home/Main'));

const routes = [{ path: '/dashboard', name: 'Dashboard', element: Main }];

export default routes;
