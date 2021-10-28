import { MutableRefObject, useLayoutEffect, useRef } from 'react'
import './Hero.css'

interface PositionProps {
  scroll: number
}

const Hero: React.FC<PositionProps> = ({scroll}) => {
  const hero = useRef() as MutableRefObject<SVGSVGElement>

  useLayoutEffect(() => {
    if(scroll > 0) hero.current.classList.remove('hero-show')
    else hero.current.classList.add('hero-show')
  }, [scroll])

  return (
    <div className={`hero-container ${scroll !== 0 ? 'hero-container__collapsed' : ''}`}>
      <svg ref={hero} className={`hero-svg`} viewBox='0 0 100 100'>
        <image className='svg-logo' x='-22' y='10' href={`${process.env.PUBLIC_URL}/brewdog-logo-big.png`} height='25px' />
        <path className={`svg-line svg-line__top`} d='M0 40 L100 40' />
        <text className='svg-text svg-text__header' x='22%' y='57%' >PUNK API</text>
        <path className={`svg-line svg-line__bottom`} d='M0 60 L100 60' />
        <text className='svg-text svg-text__sub' x='20%' y='65%' >Explore BREWDOG brewery beer catalogue!</text>
      </svg>
    </div>
  )
}

export default Hero