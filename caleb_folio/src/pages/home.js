import headshot from '../assets/caleb_paint.png'

const Home = () => {
  return (
    <div className="home">
      <div className="content_block_home">
        <img className="headshot" src={headshot} />
        <div>
          <h1 className="content_header_home">Hello & welcome,</h1>
          <p className="content_text_home">
            My name is Caleb Langner. (sample brand statement)I am a passionate
            educator, and for six years, I have been supporting children as they
            discover and explore new ideas in a safe, welcoming classroom
            environment.
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
