import { render } from '@testing-library/react';
import { sampleBeer } from '../../ctx/PunkAPIContext.test';
import BeerItem from "./BeerItem"

test('should render Favorites Component properly', () => {
  const { container } = render(<BeerItem {...sampleBeer} />)
  const favorites = container.querySelector('li')
  expect(favorites).toMatchSnapshot()
})