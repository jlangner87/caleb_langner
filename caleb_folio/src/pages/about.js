import sdsu from '../assets/sdsu.png'
import dsu from '../assets/dsu.png'
import medary from '../assets/medary.png'

const About = () => {
  return (
    <div className="about">
      <h1 className="page_header">About Me</h1>
      <div className="content_block">
        <h1 className="content_header">Who am I?</h1>
        <p className="content_text">
          Hello! My name is Caleb Langner. I majored in Early Childhood
          Education from South Dakota State University in Brookings, SD with the
          Coop through Dakota State University in Madison, SD. I am from a small
          town in Northwest Iowa, called Everly. My passion for education comes
          from my parents. My father is a children's pastor, and with the help
          of my mother, they do many outreaches for the children in our
          community. I have a passion to teach and help children grow and
          develop. Getting a degree in education is a step to make my passion,
          my goals.
        </p>
      </div>
      <div className="content_block2">
        <h1 className="content_header">Education & Certifications</h1>
        <div className="excerpt_container">
          <p className="subheader">South Dakota State University</p>
          <p className="snippet">Early Childhood Education</p>
          <p className="snippet">Month, Year</p>
          <img className="school_logo" src={sdsu} />
        </div>
        <div className="excerpt_container">
          <p className="subheader">Dakota State University</p>
          <p className="snippet">Elementary Certification</p>
          <p className="snippet">Month, Year</p>
          <img className="school_logo" src={dsu} />
        </div>
      </div>
      <div className="content_block">
        <h1 className="content_header">Career History</h1>
        <div className="excerpt_container">
          <p className="subheader">Medary Elementary School</p>
          <p className="snippet">Brookings, SD</p>
          <p className="snippet">First Grade Teacher</p>
          <p className="snippet">Month, Year - Month, Year</p>
          <img className="school_logo" src={medary} />
        </div>
        <div className="excerpt_container">
          <p className="subheader">Another School</p>
          <p className="snippet">Sometown, USA</p>
          <p className="snippet">Someth Grade Some Position</p>
          <p className="snippet">Month, Year - Month, Year</p>
          <img className="school_logo" src={medary} />
        </div>
        <div className="excerpt_container">
          <p className="subheader">Another School</p>
          <p className="snippet">Sometown, USA</p>
          <p className="snippet">Someth Grade Some Position</p>
          <p className="snippet">Month, Year - Month, Year</p>
          <img className="school_logo" src={medary} />
        </div>
      </div>
    </div>
  )
}

export default About
