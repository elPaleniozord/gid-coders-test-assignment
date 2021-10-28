import { render } from '@testing-library/react';
import BeerList from "./BeerList"

test('should render Favorites Component properly', () => {
  const { container } = render(<BeerList />)
  const list = container.querySelector('div')
  expect(list).toMatchSnapshot()
})