import styled from 'styled-components'
import { FC, PropsWithChildren } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { DEVICE_MEDIA_QUERY, DEVICE_SIZE } from '../styles/constants'
import { routes, RouteType } from './routes'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  width: ${DEVICE_SIZE.TABLET_MIN};
  margin: 0 auto;
  padding: 20px 0;
  @media ${DEVICE_MEDIA_QUERY.MOBILE} {
    width: 100%;
  }
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

const Nav = styled.nav`
  height: 60px;
  color: ${({ theme }) => theme.colors.fontLight};
  background: ${({ theme }) => theme.colors.navigation};
`

const Footer = styled.footer`
  margin-top: auto;
  color: ${({ theme }) => theme.colors.fontLight};
  background: ${({ theme }) => theme.colors.footer};
  padding: 20px 0;
  text-align: center;
`

export const MainLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Container>
      <Nav>
        <Content>
          <NavItems>
            <NavItem key={routes.home.path} {...routes.home} />
            <NavItem key={routes.rates.path} {...routes.rates} />
            <NavItem key={routes.form.path} {...routes.form} />
          </NavItems>
        </Content>
      </Nav>
      <main>
        <Content>
          <Outlet />
        </Content>
      </main>
      <Footer>
        <Content>{`@${new Date().getFullYear()} Cthulhu`}</Content>
      </Footer>
    </Container>
  )
}
