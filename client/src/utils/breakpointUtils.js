// React
import { useEffect, useState, useRef, useCallback } from 'react'

export const useIsMobile = (breakpoint = '769px') => {
  if (typeof window === 'undefined') {
    return
  }
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < +breakpoint.slice(0, -2)
  )

  const stateRef = useRef(isMobile)

  const setRefState = (data) => {
    stateRef.current = data
    setIsMobile(data)
  }

  const isMobileCbk = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < +breakpoint.slice(0, -2) && !stateRef.current) {
        // Is mobile
        setRefState(true)
      } else if (
        window.innerWidth >= +breakpoint.slice(0, -2) &&
        !!stateRef.current
      ) {
        // Isn't mobile
        setRefState(false)
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', isMobileCbk)
    return () => window.removeEventListener('resize', isMobileCbk)
  }, [])

  return isMobile
}
