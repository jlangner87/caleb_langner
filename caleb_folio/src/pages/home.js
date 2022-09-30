import headshot from '../assets/caleb_paint.png'

const Home = () => {
  return (
    <div className="home">
      <div className="content_block_home">
        <img className="headshot" src={headshot} />
        <div>
          <h1 className="content_header_home">Welcome,</h1>
          <p className="content_text_home">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
            vehicula tellus, sit amet condimentum nunc suscipit in. Cras varius
            id ante vitae dignissim. Aenean convallis eget enim maximus
            imperdiet. Donec gravida dui in consequat congue.
          </p>
          <div className="signoff">
            <h1 className="sincere">Sincerely,</h1>
            <br></br>
            <h1 className="name">Caleb Langner</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
