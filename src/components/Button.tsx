interface ButtonProps {
  children: any
}

const Button: React.FC<ButtonProps> = ({children}) => {
  const handleClick = () => {
    //call
  }

  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export default Button