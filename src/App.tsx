import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { PunkAPIProvider } from './ctx/PunkAPIContext';
import BeerList from './components/BeerList/BeerList';
import Favorites from './components/Favorites/Favorites';
import Hero from './components/Hero/Hero';
import useScrollPosition from './hooks/useScrollPosition';

function App() {
  const scroll = useScrollPosition()
  return (
    <div className="App">
      <Header scroll={scroll}/>
      <Hero scroll={scroll} />
      <PunkAPIProvider>
        <Favorites />
        <BeerList />
      </PunkAPIProvider>
      <Footer />
    </div>
  );
}

export default App;
