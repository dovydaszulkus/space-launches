import { useState, useEffect } from 'react'
import { LoaderStyled } from './style'

const Loader = ({ show = false, delay = 0 }) => {
  const [showSpinner, setShowSpinner] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    if (!show) {
      setShowSpinner(false)
      return
    }
    if (delay === 0) {
      setShowSpinner(true)
    } else {
      timeout = setTimeout(() => setShowSpinner(true), delay)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [show, delay])

  return showSpinner ? <LoaderStyled /> : null
}

export default Loader
