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
    <div className="favorites-container" onClick={handleClick}>
      <h2 className="favorites-header">Favorite Beers </h2>

      {expanded && (
        beerList.length === 0 ? (<p className="favorites-caption">You don't have any favorites yet</p>) : <ul className="favorites-list">{beerList}</ul>
      )}     
    </div>
  )
}

export default Favorites