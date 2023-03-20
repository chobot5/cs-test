import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

import { Content } from '../components/Content'
import { Navigation } from './Navigation'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Footer = styled.footer`
  margin-top: auto;
  color: ${({ theme }) => theme.colors.fontLight};
  background: ${({ theme }) => theme.colors.footer};
  padding: 20px 0;
  text-align: center;
`

export const MainLayout = () => {
  return (
    <Container>
      <Navigation />
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
