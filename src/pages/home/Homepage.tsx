import styled from 'styled-components'

const ListItemStyled = styled.li`
  margin: 10px 0;
`

export const HomePage = () => {
  return (
    <div>
      <ol>
        <ListItemStyled>b</ListItemStyled>
        <ListItemStyled>a</ListItemStyled>
        <ListItemStyled>a</ListItemStyled>
        <ListItemStyled>a</ListItemStyled>
      </ol>
    </div>
  )
}
