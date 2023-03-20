import axios from 'axios'


export interface RateType {
  shortName: string
  name: string
  country: string
  move: number
  buy: number
  sell: number
  cnb: number
}

const inst = axios.create({
  baseURL: window.location.origin,
})


export const ratesApi = (() => {
  return {
    getRates: () => {
      return inst.get<RateType[]>('/data.json')
    },
  }
})()
