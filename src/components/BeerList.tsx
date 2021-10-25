import React, { useContext, useEffect, useMemo, useState } from "react"
import { PunkAPIContext } from "../ctx/PunkAPIContext"
import BeerItem from "./BeerItem"
import Loader from "./Loader"

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
    <div>
      <ul aria-label='beer-list'>
        {beerList}
      </ul>
      {loading && (<Loader />)}
      <button onClick={handlePagination}>More Beers!</button>
    </div>

  )
}

export default BeerList