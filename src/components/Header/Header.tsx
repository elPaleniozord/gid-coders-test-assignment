import useScrollPosition from '../../hooks/useScrollPosition'
import './Header.css'

const Header = () => {
  const visible = useScrollPosition()
  console.log(visible)
  return (
    <header className={`header-container ${visible && 'header-container__big'}`}>
      <h1 className="header-caption">BREWDOG</h1>
      <img className="header-logo" src={`${process.env.PUBLIC_URL}/brewdog-logo.png`} alt="brewdog-logo"></img>
      <p className="header-description">Explore BREWDOG brewery catalogue!</p>
    </header>
  )
}

export default Header