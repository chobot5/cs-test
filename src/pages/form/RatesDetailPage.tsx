import { useParams } from 'react-router-dom'

export const RateDetailPage = () => {
  const params = useParams<{ rateId: string }>()

  return (
    <div>
      <h1>Rate {params.rateId}</h1>
    </div>
  )
}
