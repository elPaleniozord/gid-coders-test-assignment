import { useContext, useEffect, useState } from "react"
import { Beer, PunkAPIContext } from "../ctx/PunkAPIContext"
import BeerItem from "./BeerItem"

const Favorites = () => {
  const {favorites, } = useContext(PunkAPIContext)
  const [beerList, setBeerList] = useState<(Element | JSX.Element)[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('favorite-beers')
    const json: Beer[] = stored ? JSON.parse(stored) : []

    setBeerList(json.map(beer => (<BeerItem key={`fav-${beer.id}`} {...beer} />)))

  }, [favorites])

  return (
    <div>
      <h2>Favorite Beers</h2>
      { beerList.length === 0 ? (<p>You don't have any favorites yet</p>) : <ul>{beerList}</ul> }
    </div>
  )
}

export default Favorites