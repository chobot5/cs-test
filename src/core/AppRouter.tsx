import styled from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import * as Page from '../pages'
import { routes } from './routes'
import { MainLayout } from './MainLayout'
import { Content } from '../components/Content'

const NotFound = styled(Content)`
  text-align: center;
  padding: 30px 0;
  font-size: 32px;
`

const CthulhuImg = styled.img`
  border-radius: 5px;
`

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: (
      <NotFound>
        <h1>404</h1>
        <CthulhuImg src={'/cthulhu.png'} />
      </NotFound>
    ),
    children: [
      {
        path: routes.home.path,
        element: <Page.HomePage />,
      },
      {
        path: routes.rates.path,
        element: <Page.RatesPage />,
      },
    ],
  },
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
