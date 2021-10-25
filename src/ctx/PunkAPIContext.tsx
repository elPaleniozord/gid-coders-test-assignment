import React, { useEffect, useReducer } from "react"
import { ActionType, punkAPIReducer } from "./PunkAPIReducer"

export interface Beer {
  id: number
  [key: string]: string | number | boolean
}

interface APIContext {
  loading: boolean
  beers: Beer[]
  favorites: number[]
  fetchMore?: () => void
  handleFav?: (beer:Beer) => void
  // dispatch: () => null
}

const defaults = {
  loading: false,
  beers: [],
  favorites: []
}

export const PunkAPIContext = React.createContext<APIContext>(defaults)

const initialState = {
  beers: [],
  loading: false,
  page: 1,
  favorites: []
}

export const PunkAPIProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(punkAPIReducer, initialState)

  const handleLocalStorage: ()=> Beer[] = () => {
      const stored = localStorage.getItem('favorite-beers')
      return stored ? JSON.parse(stored) : []
  }

  const handleFav = async (beer: Beer) => {
    const idx = state.favorites.indexOf(beer.id)
    const update = handleLocalStorage()

    if(idx === -1) update.push(beer)
    else update.splice(idx,1)
    
    localStorage.setItem('favorite-beers', JSON.stringify(update))
    const ids = update.map(beer => beer.id)

    dispatch({type: ActionType.UpdateFavorites, payload: ids})
  }

  useEffect(() => {
    const favs = handleLocalStorage().map(beer => beer.id)
    dispatch({type: ActionType.ToggleLoading})
    fetch(`https://api.punkapi.com/v2/beers?page=${state.page}&per_page=${40}`)
      .then(res => {
        if(res.ok) return res.json()
        throw res
      })
      .then(data => {
        dispatch(
          state.page === 1 ? 
          { type: ActionType.SetBeers, payload: [data, favs] }
          :
          { type: ActionType.UpdateBeers, payload: data }
        )
      })
      .catch(err => console.log(err))
  }, [state.page])

  return (
    <PunkAPIContext.Provider 
      value={{
        loading: state.loading,
        beers: state.beers,
        favorites: state.favorites,
        fetchMore: () => dispatch({type: ActionType.FetchNextPage}),
        handleFav: handleFav,
      }}
    >
      {children}
    </PunkAPIContext.Provider>
  )
}