import React from 'react'

const Home = React.lazy(() => import('pages/home/Home'))
const Page404 = React.lazy(() => import('pages/page404/Page404'))
const Page500 = React.lazy(() => import('pages/page500/Page500'))
const Login = React.lazy(() => import('pages/login/Login'))

const routes = [
  {path: '/', name: 'Home', element: Home},
  {path: '/404', name: 'page404', element: Page404},
  {path: '/500', name: 'page500', element: Page500},
  {path: '/login', name: 'Login', element: Login},
]

export default routes
