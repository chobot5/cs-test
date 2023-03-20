import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FC } from 'react'

import { routes, RouteType } from './routes'
import { Content } from '../components/Content'

const Nav = styled.nav`
  height: 60px;
  color: ${({ theme }) => theme.colors.fontLight};
  background: ${({ theme }) => theme.colors.navigation};
`

const NavigationLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.fontLight};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  &:visited {
    color: ${({ theme }) => theme.colors.fontLight};
  }
  &:hover {
    text-decoration: underline;
  }
`

const NavItems = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
`

const NavItem: FC<RouteType> = ({ label, path }) => {
  return (
    <li>
      <NavigationLink to={path}>{label}</NavigationLink>
    </li>
  )
}

export const Navigation = () => {
  return (
    <Nav>
      <Content>
        <NavItems>
          <NavItem key={routes.home.path} {...routes.home} />
          <NavItem key={routes.rates.path} {...routes.rates} />
        </NavItems>
      </Content>
    </Nav>
  )
}
