import { RouteObject } from 'react-router-dom'

export type RouteType = Omit<RouteObject, 'path'> & { label: string; path: string }

export const routes = {
  home: {
    path: '/',
    label: 'Home',
  },
  rates: {
    path: '/rates',
    label: 'Rates',
  },
  form: {
    path: '/form',
    label: 'Form',
  },
  rateDetail: {
    path: '/rate/:rateId',
    label: 'Rate',
  },
} satisfies Record<string, RouteType>
