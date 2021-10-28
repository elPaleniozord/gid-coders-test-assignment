import { render } from '@testing-library/react';
import { sampleBeer } from '../../ctx/PunkAPIContext.test';
import Ingredients from "./Ingredients"

test('should render Favorites Component properly', () => {
  const { container } = render(
    <Ingredients 
      hops={sampleBeer.ingredients.hops} 
      malts={sampleBeer.ingredients.malt} 
      yeast={sampleBeer.ingredients.yeast}
    />
  )
  const favorites = container.querySelector('div')
  expect(favorites).toMatchSnapshot()
})