import api from '@/api/api'
import { useState, useEffect } from 'react'
const localCache: { [key: string]: any } = {}

type Status = 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'

const useFetch = (url: string) => {
  const [data, setData] = useState<any>([])
  const [status, setStatus] = useState<Status>('IDLE')
  const [error, setError] = useState(false)

  useEffect(() => {
    const callApi = async () => {
      if (localCache[url]) {
        setStatus('SUCCESS')
        setData(localCache[url])
        return
      }

      try {
        setStatus('LOADING')
        const res = await api.get(url)
        setData(res.data)
        localCache[url] = res.data
        setStatus('SUCCESS')
      } catch (error) {
        setError(true)
        setStatus('ERROR')
      }
    }

    callApi()
  }, [url])

  return [data, status, error]
}

export default useFetch
