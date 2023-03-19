import axios from 'axios'

const inst = axios.create({
  baseURL: window.location.origin,
})

export interface RateType {
  a: string
  b: string
}

export interface RatesResponse {
  items: RateType[]
}

export const ratesApi = (() => {
  return {
    getRates: () => {
      return inst.get<RatesResponse>('/rates.json')
    },
  }
})()
