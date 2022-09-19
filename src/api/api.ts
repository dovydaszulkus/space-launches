import axios, { AxiosInstance } from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SPACEX_API_ENDPOINT,
})

const api = (axios: AxiosInstance) => {
  return {
    get: (url: string) => axios.get(url),
  }
}

export default api(axiosInstance)
