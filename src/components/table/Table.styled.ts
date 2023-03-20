import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 5px;
`

export const TBody = styled.tbody``

export const THead = styled.thead``

export const Th = styled.th<{ align?: AlignSetting }>`
  text-align: ${({ align = 'left' }) => align};
`

export const Tr = styled.tr``
export const Td = styled.td<{ align?: AlignSetting }>`
  background: ${({ theme }) => theme.colors.content};
  padding: 8px;
  text-align: ${({ align = 'left' }) => align};
  > a {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
