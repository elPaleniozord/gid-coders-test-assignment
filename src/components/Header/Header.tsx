import './Header.css'

interface PositionProps {
  scroll: number
}

const Header: React.FC<PositionProps> = ({scroll}) => {
  return (
    <header className={`header-container ${scroll!==0 ? 'show': ''}`}>
      <h1 className="header-caption">BREWDOG</h1>
      <img className="header-logo" src={`${process.env.PUBLIC_URL}/brewdog-logo-small.png`} alt="brewdog-logo"></img>
    </header>
  )
}

export default Header