import { useRates } from '../../hooks/useRates'
import { TableStyled } from '../../components/table'
import { Link } from 'react-router-dom'
import { routes } from '../../core/routes'

export const RatesPage = () => {
  const data = useRates()

  return (
    <TableStyled.Table>
      <TableStyled.TBody>
        {data?.items?.map((d) => (
          <TableStyled.Tr key={d.a}>
            <TableStyled.Td>{d.a}</TableStyled.Td>
            <TableStyled.Td>{d.b}</TableStyled.Td>
            <TableStyled.Td align={'right'}>
              <Link to={routes.rateDetail.path.replace(':rateId', d.a)}>Detail</Link>
            </TableStyled.Td>
          </TableStyled.Tr>
        ))}
      </TableStyled.TBody>
    </TableStyled.Table>
  )
}
