import './Ingredients.css'

interface Ingredient {
  name: string
}

interface IngredientsProps {
  [key: string]: Ingredient[]
}

const Ingredients = (props: IngredientsProps) => {
  const processIngredients = (arr: Ingredient[]) => {
    const names = new Set(arr.map(item => item.name))
    let map: (Element | JSX.Element)[] = []
    names.forEach(e => map.push(<li key={e} className='ingredients-item'>{e}</li>))
    return map
  } 

  return (
    <div className="ingredients-container">
      <h3 className="ingredients-header">Ingredients</h3>
      <div className="ingredients-group">
        <img className='ingredients-icon' src={`${process.env.PUBLIC_URL}/hops-icon.png`} alt='hops-icon' />
        <ul className='ingredients-list'>{processIngredients(props.hops)}</ul>
      </div>

      <div className="ingredients-group">
        <img className='ingredients-icon' src={`${process.env.PUBLIC_URL}/malt-icon.png`} alt='malt-icon' />
        <ul className='ingredients-list'>{processIngredients(props.malts)}</ul>
      </div>

      <div className="ingredients-group">
        <img className='ingredients-icon' src={`${process.env.PUBLIC_URL}/yeast-icon.png`} alt='yeast-icon' />
        <ul className='ingredients-list'><li className='ingredients-item'>{props.yeast}</li></ul>
      </div>
    </div>
  )
}

export default Ingredients