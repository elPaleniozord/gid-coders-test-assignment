import { MouseEventHandler, useContext, useState } from 'react'
import { Beer, PunkAPIContext } from '../../ctx/PunkAPIContext'
import Ingredients from '../Ingredients/Ingredients'
import './BeerItem.css'

const BeerItem: React.FC<Beer> = (props) => {
  const [expanded, setExpanded] = useState(false)
  const {favorites, handleFav} = useContext(PunkAPIContext)

  //calculates indicator offset
  const colorScale = (ebc: number) => {
    const range = [4,6,8,12,16,20,26,33,39,47,57,69,79]
    const width = 200
    let idx = range.findIndex(val => ebc < val)
    if(idx === -1) idx = 11.5
    return width - ((200/12) * idx)
  }

  const handleFavorite: MouseEventHandler = (e) => {
    e.stopPropagation()
    handleFav && handleFav(props)
  }

  const handleExpand: MouseEventHandler = (e) => {
    e.stopPropagation()
    setExpanded(!expanded)
  }

  return (
    <li className='item-wrapper' onClick={handleExpand}>
      <h2 className='item-header'>{props.name}</h2>
      <h3 className='item-tagline'>{props.tagline}</h3>
      <div className='item-info'>
        <p className='item-info__abv'>ABV: {props.abv}%</p>
        <p className='item-info__ibu'>IBU: {props.ibu}%</p>
      </div>

      <button className='item-button item-button__fav' onClick={handleFavorite}>
        <svg className='fav-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 245">
          <path d="m56,237 74-228 74,228L10,96h240" fill={favorites.includes(props.id) ? '#00e1ff' : '#829094'}/>
        </svg>
      </button>

      <div className={`item-details ${expanded ? 'item-details__open': ''}`}>
        <div className='details-description'>
          <p>{props.description}</p>
          <img className='item-img' src={props.image_url} alt={`${props.name}`} />
        </div>
        <div className='details-color'>
          <h3>Color:</h3>
          <div className='details-color__body'></div>
          <div className='details-color__indicator' style={{transform: `translateX(-${colorScale(props.ebc)}px)`}}></div>
        </div>
        <Ingredients hops={props.ingredients.hops} malts={props.ingredients.malt} yeast={props.ingredients.yeast} />

        <div className='details-food'>
          <h3>Best served with:</h3>
          <ul>{props.food_pairing.map((food: string, i:number) => (<li key={`fp-${i}`}>{food}</li>))}</ul>
        </div>
      </div>
    </li>
  )
}

export default BeerItem