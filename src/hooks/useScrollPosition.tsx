import { useLayoutEffect, useState } from "react"

const debounce = (func: any, time: number, immediate:boolean) => {
  let timeout: any;
  return function(this: any) {
    let context = this, 
        args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, time);
    if (callNow) func.apply(context, args);
  };
}

const useScrollPosition = () => {
  const [state, setState] = useState(window.pageYOffset || document.documentElement.scrollTop)

  const handleScroll = () => {
    const offset = window.scrollY || document.documentElement.scrollTop
    setState(offset)
  }

  useLayoutEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 50, false), true)
    return () => {
      window.removeEventListener('scroll',debounce(handleScroll, 50, false), true)
    }
  }, [])

  return state
}

export default useScrollPosition