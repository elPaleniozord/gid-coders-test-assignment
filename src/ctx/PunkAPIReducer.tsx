import { Beer } from "./PunkAPIContext"

export const enum ActionType {
  ToggleLoading,
  FetchNextPage,
  SetBeers,
  UpdateBeers,
  UpdateFavorites
}

export type Action = {
  type: ActionType,
  payload?: any
}

export interface ContextState {
  beers: Beer[]
  loading: boolean
  page: number
  favorites: number[]
}

export const punkAPIReducer = (state: ContextState, action: Action): ContextState => {
  switch(action.type) {
    case ActionType.ToggleLoading:
      return {...state, loading: !state.loading}

    case ActionType.FetchNextPage:
      return {...state, page: state.page+1}

    case ActionType.SetBeers:
      const [beers, favorites] = action.payload
      return {...state, beers: beers, favorites: favorites, loading: false}

    case ActionType.UpdateBeers:
      const beersUpdate = [...state.beers, ...action.payload]
      return {...state, beers: beersUpdate, loading: false}

    case ActionType.UpdateFavorites:
      return {...state, favorites: action.payload}
      
    default: return state
  }
}