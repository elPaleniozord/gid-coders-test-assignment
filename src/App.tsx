import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { PunkAPIProvider } from './ctx/PunkAPIContext';
import BeerList from './components/BeerList';
import Favorites from './components/Favorites';

function App() {
  return (
    <div className="App">
      <Header />
      <PunkAPIProvider>
        <Favorites />
        <BeerList />
      </PunkAPIProvider>
      <Footer />
    </div>
  );
}

export default App;
