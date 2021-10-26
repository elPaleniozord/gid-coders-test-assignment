import React, { useContext, useEffect, useState } from "react"
import { PunkAPIContext } from "../../ctx/PunkAPIContext"
import BeerItem from "../BeerItem/BeerItem"
import Loader from "../Loader/Loader"

import './BeerList.css'

const BeerList = () => {
  const {loading, beers, fetchMore, favorites} = useContext(PunkAPIContext)

  const [beerList, setBeerList] = useState<(Element | JSX.Element)[]>([])

  const handlePagination = () => {
    fetchMore && fetchMore()
  }
  
  useEffect(() => {
    const from = beerList.length
    const update = []
     
    for(let i=from; i<beers.length; i++) {
      update.push((<BeerItem key={beers[i].id} {...beers[i]} />))
    }

    setBeerList([...beerList, ...update])
  }, [beers])

  return (
    <div className="list-container">
      <ul className='beer-list' aria-label='beer-list'>
        {beerList}
      </ul>
      {!loading && (<Loader />)}
      <button className='list-button_fetch' onClick={handlePagination}>More Beers!</button>
    </div>
  )
}

export default BeerList