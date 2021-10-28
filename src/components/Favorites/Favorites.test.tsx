import { render } from '@testing-library/react';
import Favorites from "./Favorites"

test('should render Favorites Component properly', () => {
  const { container } = render(<Favorites />)
  const favorites = container.querySelector('div')
  expect(favorites).toMatchSnapshot()
})