import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should render App', () => {
  render(<App />);
  const header = screen.getByText(/^BREWDOG$/i);
  expect(header).toBeInTheDocument();

  const hero = screen.getByText(/PUNK API/i);
  expect(hero).toBeInTheDocument();

  const favorites = screen.getByText(/Favorite Beers/i);
  expect(favorites).toBeInTheDocument();
  
  const beerList = screen.getByText(/More Beers!/i);
  expect(beerList).toBeInTheDocument();

  const footer = screen.getByText(/Designed and coded by/i);
  expect(footer).toBeInTheDocument();
});
