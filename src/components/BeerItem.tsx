import { useContext, useState } from 'react'
import { Beer, PunkAPIContext } from '../ctx/PunkAPIContext'

const BeerItem: React.FC<Beer> = (props) => {
  const [expanded, setExpanded] = useState(false)
  const {favorites, handleFav} = useContext(PunkAPIContext)

  return (
    <li>
      <h2>{props.name}</h2>
      <div>{props.description}</div>
      <button onClick={() => handleFav && handleFav(props)}>
        {favorites.includes(props.id) ? 'Remove from favorites' : 'Add to favorites'}
      </button>
      <button onClick={() => setExpanded(!expanded)}>{expanded ? `Collapse` : `Expand`}</button>
    </li>
  )
}

export default BeerItem