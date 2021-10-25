import { useEffect, useState } from "react"

export const getStorageValue = (key:string, defaultValue: JSON[]) => {
  const saved = localStorage.getItem(key)
  const initial = saved && JSON.parse(saved)
  return initial || defaultValue
}

export const useLocalStorage = (key:string, defaultValue: JSON[]) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [])

  return [value, setValue]
}