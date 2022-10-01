import { Link } from 'react-router-dom'
import home from '../assets/home.png'
import about from '../assets/info.png'
import scrapbook from '../assets/scrapbook.png'
import resume from '../assets/resume.png'
import connect from '../assets/connect.png'

const Nav = () => {

  return (
    <div className="nav">
      <Link className='nav_links' to={'/'}> <img className="icons" src={home}/>&#160; Home</Link>
      <Link className='nav_links' to={'/about'}> <img className="icons" src={about}/>&#160; About</Link>
      <Link className='nav_links' to={'/scrapbook'}> <img className="icons" src={scrapbook}/>&#160; Scrapbook</Link>
      <Link className='nav_links' to={'/resume'}> <img className="icons" src={resume}/>&#160; Resume</Link>
      <Link className='nav_links' to={'/connect'}> <img className="icons" src={connect}/>&#160; Connect</Link>

    </div>
  )
}

export default Nav