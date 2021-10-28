import { MouseEventHandler, useContext, useEffect, useState } from "react"
import { Beer, PunkAPIContext } from "../../ctx/PunkAPIContext"
import BeerItem from "../BeerItem/BeerItem"
import './Favorites.css'

const Favorites = () => {
  const {favorites, } = useContext(PunkAPIContext)
  const [beerList, setBeerList] = useState<(Element | JSX.Element)[]>([])
  const [expanded, setCollapsed] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('favorite-beers')
    const json: Beer[] = stored ? JSON.parse(stored) : []

    setBeerList(json.map(beer => (<BeerItem key={`fav-${beer.id}`} {...beer} />)))

  }, [favorites])

  const handleClick: MouseEventHandler = (e) => {
    e.stopPropagation()
    setCollapsed(!expanded)
  }

  return (
    <div className={"favorites-container"} onClick={handleClick}>
      <h2 className="favorites-header">Favorite Beers</h2>
      <div className={`favorites-collapsible ${expanded ? 'favorites-collapsible__open' : ''}`}>
        {beerList.length === 0 ? 
          <p className="favorites-caption">You don't have any favorites yet</p>
          :
          <ul className="favorites-list">{beerList}</ul>
        } 
      </div>

      <svg className={`favorites-icon ${expanded && 'favorites-icon__flipped'}`} viewBox="0 0 20 20">
        <path d="M19 6.25l-1.5-1.5-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>
      </svg>   
    </div>
  )
}

export default Favorites