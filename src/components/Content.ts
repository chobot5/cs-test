import styled from 'styled-components'

import { DEVICE_MEDIA_QUERY, DEVICE_SIZE } from '../styles/constants'

export const Content = styled.div`
  width: ${DEVICE_SIZE.TABLET_MIN};
  margin: 0 auto;
  padding: 20px 0;
  @media ${DEVICE_MEDIA_QUERY.MOBILE} {
    width: 100%;
  }
`
