import { Link } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'

const Nav = () => {

  return (
    <div className="nav">
      <Link className='nav_links' to={'/'}>Home</Link>
      <Link className='nav_links' to={'/about'}>About</Link>
      <Link className='nav_links' to={'/scrapbook'}>Scrapbook</Link>
      <Link className='nav_links' to={'/resume'}>Resume</Link>
      <Link className='nav_links' to={'/connect'}>Connect</Link>

    </div>
  )
}

export default Nav