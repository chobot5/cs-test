import { useQuery } from '@tanstack/react-query'
import { ratesApi } from '../api/ratesApi'

export const useRates = () => {
  const { data: response } = useQuery(['rates'], ratesApi.getRates)
  return response?.data
}
