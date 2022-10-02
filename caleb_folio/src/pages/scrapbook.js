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
        <div className="excerpt_container">
          <p className="subheader"> Why I Want To Be A Teacher</p>
          <p className="snippet">
            This is a snippet from the essay. This is a snippet from the essay.
            This is a snippet from the essay. This is a snippet from the essay.
          </p>
          <img className="dwnld_icon" src={dwnld} />
        </div>
        <div className="excerpt_container">
          <p className="subheader"> Why I Want To Be A Teacher</p>
          <p className="snippet">
            This is a snippet from the essay. This is a snippet from the essay.
            This is a snippet from the essay. This is a snippet from the essay.
          </p>
          <img className="dwnld_icon" src={dwnld} />
        </div>
        <div className="excerpt_container">
          <p className="subheader"> Philosophy</p>
          <p className="snippet">
            This is a snippet from the essay. This is a snippet from the essay.
            This is a snippet from the essay. This is a snippet from the essay.
          </p>
          <img className="dwnld_icon" src={dwnld} />
        </div>
        <div className="excerpt_container">
          <p className="subheader"> Learning Theory</p>
          <p className="snippet">
            This is a snippet from the essay. This is a snippet from the essay.
            This is a snippet from the essay. This is a snippet from the essay.
          </p>
          <img className="dwnld_icon" src={dwnld} />
        </div>
        <div className="excerpt_container">
          <p className="subheader"> Idea Essay</p>
          <p className="snippet">
            This is a snippet from the essay. This is a snippet from the essay.
            This is a snippet from the essay. This is a snippet from the essay.
          </p>
          <img className="dwnld_icon" src={dwnld} />
        </div>
        <div className="excerpt_container">
          <p className="subheader"> Peronal Goals</p>
          <p className="snippet">
            This is a snippet from the essay. This is a snippet from the essay.
            This is a snippet from the essay. This is a snippet from the essay.
          </p>
          <img className="dwnld_icon" src={dwnld} />
        </div>
      </div>
      <div className="scrap_block">
        <img className="scrap" src={reading} />
      </div>
      <div className="scrap_block2">
        <h1 className="content_header">Lesson Plans & Samples</h1>
        <div className="excerpt_container">
          <p className="subheader"> Math Lesson Plan</p>
          <p className="snippet">
            This is a snippet from the lesson plan. This is a snippet from the
            lesson plan. This is a snippet from the lesson plan. This is a
            snippet from the lesson plan. This is a snippet from the lesson
            plan. This is a snippet from the lesson plan.
          </p>
          <img className="dwnld_icon" src={dwnld} />
        </div>
        <div className="excerpt_container">
          <p className="subheader"> Writing-Social Studies Plan</p>
          <p className="snippet">
            This is a snippet from the lesson plan. This is a snippet from the
            lesson plan. This is a snippet from the lesson plan. This is a
            snippet from the lesson plan. This is a snippet from the lesson
            plan. This is a snippet from the lesson plan.
          </p>
          <img className="dwnld_icon" src={dwnld} />
        </div>
        <div className="excerpt_container">
          <p className="subheader"> Small Group Reading</p>
          <p className="snippet">
            This is a snippet from the lesson plan. This is a snippet from the
            lesson plan. This is a snippet from the lesson plan. This is a
            snippet from the lesson plan. This is a snippet from the lesson
            plan. This is a snippet from the lesson plan.
          </p>
          <img className="dwnld_icon" src={dwnld} />
        </div>
        <div className="excerpt_container">
          <p className="subheader"> Teaching Work Sample</p>
          <p className="snippet">
            This is a snippet from the lesson plan. This is a snippet from the
            lesson plan. This is a snippet from the lesson plan. This is a
            snippet from the lesson plan. This is a snippet from the lesson
            plan. This is a snippet from the lesson plan.
          </p>
          <img className="dwnld_icon" src={dwnld} />
        </div>
      </div>
    </div>
  )
}

export default Scrapbook
