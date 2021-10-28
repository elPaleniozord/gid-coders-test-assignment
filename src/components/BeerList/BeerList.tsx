import React, { Suspense, useContext, useEffect, useState } from "react"
import { PunkAPIContext } from "../../ctx/PunkAPIContext"
import Loader from "../Loader/Loader"

import './BeerList.css'

const BeerItem = React.lazy(() => import('../BeerItem/BeerItem'))

const BeerList = () => {
  const {loading, beers, fetchMore} = useContext(PunkAPIContext)

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beers])

  return (
    <div className="list-container">
      <Suspense fallback={<Loader />}>
        <ul className='beer-list' aria-label='beer-list'>
          {beerList}
        </ul>
      </Suspense>

      {loading && (<Loader />)}
      <button className='list-button list-button_fetch' onClick={handlePagination}>More Beers!</button>
    </div>
  )
}

export default BeerList