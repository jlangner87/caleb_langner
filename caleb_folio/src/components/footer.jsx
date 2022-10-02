import dev_logo from '../assets/dev_logo.png'

const Footer = () => {

  return (
    <div className="footer">
      <div className='footer_container'>
            <p className="footer_text">Web Development by Joshua Langner.</p>
            <p className="footer_text">©2022 All rights reserved.</p>
            <img className='dev_logo' src={dev_logo}/><br/>
            <a href='https://joshua-langner.com'>Web Developer Portfolio</a>

      </div>
    </div>
  )
}

export default Footer