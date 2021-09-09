import { useEffect, useRef } from 'react'

/**
 * Hook for tracking if the value is changed
 * @param value the value to track
 * @returns the previous value derived from useRef
 */
const useRefValue = <Tvalue>(value: Tvalue) => {
  const ref = useRef<Tvalue>()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

export default useRefValue
