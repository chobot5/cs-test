import { useRates } from '../../hooks/useRates'
import { TableStyled } from '../../components/table'

export const RatesPage = () => {
  const data = useRates()

  return (
    <TableStyled.Table>
      <TableStyled.THead>
        <tr>
          <TableStyled.Th>Měna</TableStyled.Th>
          <TableStyled.Th>Stát</TableStyled.Th>
          <TableStyled.Th>Nákup</TableStyled.Th>
          <TableStyled.Th>Prodej</TableStyled.Th>
          <TableStyled.Th>CNB</TableStyled.Th>
          <TableStyled.Th>Pohyb</TableStyled.Th>
        </tr>
      </TableStyled.THead>
      <TableStyled.TBody>
        {data?.map((d) => (
          <TableStyled.Tr key={d.shortName}>
            <TableStyled.Td>{d.shortName}</TableStyled.Td>
            <TableStyled.Td>{d.country}</TableStyled.Td>
            <TableStyled.Td>{d.buy}</TableStyled.Td>
            <TableStyled.Td>{d.sell}</TableStyled.Td>
            <TableStyled.Td>{d.cnb}</TableStyled.Td>
            <TableStyled.Td>{d.move}</TableStyled.Td>
          </TableStyled.Tr>
        ))}
      </TableStyled.TBody>
    </TableStyled.Table>
  )
}
