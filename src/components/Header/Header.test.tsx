import { render } from '@testing-library/react';
import Header from "./Header"

test('should render Header Component correctly', () => {
  const { container } = render(<Header scroll={0}/>)
  const header = container.querySelector('header')

  expect(header).toMatchSnapshot()
}) 