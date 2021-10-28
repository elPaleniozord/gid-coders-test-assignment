import { render } from '@testing-library/react';
import Footer from "./Footer"

test('should render Header Component correctly', () => {
  const { container } = render(<Footer />)
  const footer = container.querySelector('footer')

  expect(footer).toMatchSnapshot()
}) 