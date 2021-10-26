import './Loader.css'

const Loader = () => {
  return (
    <svg className="loader" viewBox="0 0 50 50">
      <circle id='circle' className="loader-circle" cx='25' cy='25' r='20' fill="none" strokeWidth={5} />
    </svg>
  )
}

export default Loader