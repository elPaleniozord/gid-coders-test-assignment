import { useLayoutEffect, useState } from "react"

const GetScrollPosition = () => {
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const offset = window.pageYOffset || document.documentElement.scrollTop
    setVisible(offset !== 0)
  }

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return visible
}

export default GetScrollPosition