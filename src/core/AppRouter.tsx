import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { FC, PropsWithChildren } from 'react'

import * as Page from '../pages'
import { routes } from './routes'
import { MainLayout } from './MainLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: routes.home.path,
        element: <Page.HomePage />,
      },
      {
        path: routes.rates.path,
        element: <Page.RatesPage />,
      },
      {
        path: routes.rateDetail.path,
        element: <Page.RateDetailPage />,
      },
    ],
  },
])

export const AppRouter: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <RouterProvider router={router} />
}
