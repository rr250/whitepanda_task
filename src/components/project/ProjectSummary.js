import React from 'react'
import {NavLink} from 'react-router-dom'

const style = {
  borderRadius:100,
  width:75,
  height:75
}
const ProjectSummary = () => {
    return (
      <div className="project-list section">
        <div class="card horizontal z-depth-0">
          <div class="card-image">
            <img src="/images/panda.jpg" alt="img" class="circle" style={style}/>
          </div>
          <div class="card-stacked">
            <div class="card-title">
              Blog/Article
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.</p>
            </div>
            <div class="card-action">
              <NavLink to='/' className='btn transparent blue-text z-depth-0 lighten-2' style={{border:"2px solid #5DBCD2",}}>Order</NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default ProjectSummary
