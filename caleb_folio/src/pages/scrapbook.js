import ontv from '../assets/ontv.png'
import reading from '../assets/read.png'
import dwnld from '../assets/cloud-download-alt.png'

const Scrapbook = () => {
  return (
    <div className="scrapbook">
      <h1 className="page_header">Scrapbook</h1>
      <div className="scrap_block">
        <img className="scrap" src={ontv} />
      </div>
      <div className="scrap_block2">
        <h1 className="content_header">Essays</h1>
        <p className="content_text">
          <img className="big_icons" src={dwnld} /> Why I Want To Be A Teacher
        </p>
        <p className="content_text">
          <img className="big_icons" src={dwnld} /> Learning Theory
        </p>
        <p className="content_text">
          <img className="big_icons" src={dwnld} /> Idea Essay
        </p>
      </div>
      <div className="scrap_block">
        <img className="scrap" src={reading} />
      </div>
      <div className="scrap_block2">
        <h1 className="content_header">Lesson Plans & Samples</h1>
        <p className="content_text">
          <img className="big_icons" src={dwnld} /> Math Lesson Plan
        </p>
        <p className="content_text">
          <img className="big_icons" src={dwnld} /> Social Studies Lesson
        </p>
        <p className="content_text">
          <img className="big_icons" src={dwnld} /> Small Group Reading
        </p>
        <p className="content_text">
          <img className="big_icons" src={dwnld} /> Teaching Work Sample
        </p>
      </div>
    </div>
  )
}

export default Scrapbook
