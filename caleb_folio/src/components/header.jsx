import headshot from '../assets/caleb_paint.png'

const Header = () => {

  return (
    <div className="header">
      <img className="headshot" src={headshot} />
      <p className="copyright">Caleb Langner</p>
    </div>
  )
}

export default Header