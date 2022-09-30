import Nav from "./nav"

const Header = () => {

  return (
    <div className="header">
      <div className='header_container'>
        <p className="name">Caleb Langner</p>
        <p className="header_text"> a&#160; teaching&#160; portfolio </p>
        <Nav/>
      </div>
    </div>
  )
}

export default Header