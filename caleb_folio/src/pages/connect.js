import email from '../assets/envelope.png'
import phone from '../assets/phone.png'
import linkedIn from '../assets/linkedin.png'
import school from '../assets/school.png'

const Connect = () => {
  return (
    <div className="connect">
      <h1 className="page_header">Connect</h1>
      <div className="connect_container">
        <div className="content_block_contact">
          <h1 className="content_header">I want to hear from you</h1>
          <div className="contact_container"></div>
          <p className="contact_logo">
            <img className="big_icons" src={email} /> email@address.com
          </p>
          <p className="contact_logo">
            <img className="big_icons" src={phone} /> 712.555.5555
          </p>
        </div>

        <div className="content_block_contact">
          <h1 className="content_header">Connect with me here</h1>
          <div className="contact_container"></div>
          <p className="contact_logo">
            <img className="big_icons" src={linkedIn} /> linkedIn/caleb
          </p>
          <p className="contact_logo">
            <img className="big_icons" src={school} /> schooldirectory.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default Connect
