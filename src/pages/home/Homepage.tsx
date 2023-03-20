import styled from 'styled-components'

const ListItemStyled = styled.li`
  margin: 10px 0;
`

export const HomePage = () => {
  return (
    <div>
      <ol>
        <ListItemStyled>Funkce pro výpočet predikce CNB na počet dní</ListItemStyled>
        <ListItemStyled>Možnost zadání počtu dní pro predikci</ListItemStyled>
        <ListItemStyled>Možnost předvyplnit počet dní query parametrem</ListItemStyled>
        <ListItemStyled>...</ListItemStyled>
      </ol>
    </div>
  )
}
