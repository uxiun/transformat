import { useEffect, useState } from "react"

export const useDebounce = <K>(delay: number, value: K): K => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(()=>{
    const timer = setTimeout(()=> setDebouncedValue(value), delay)

    return ()=> clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}