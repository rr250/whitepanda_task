import React from 'react'
import {NavLink} from 'react-router-dom'

const style = {
  borderRadius:100,
  width:75,
  height:75,
  paddingTop: 10,
  paddingLeft: 10,
  paddingRight: 10,
  paddingBottom: 10,
  
}
const ProjectSummary = ({title}) => {
    return (
      <div className="project-list section">
        <div class="card horizontal card-one z-depth-0">
          <div class="card-image">
            <img src="images\panda.jpg" alt="img" class="circle" style={style}/>
          </div>
          <div class="card-stacked">
            <div class="card-title" style={{textDecoration:"bold", textIndent:20}}>
              <h5>{title}</h5>
            </div>
            <div class="card-content left">
              <p class="grey-text">Typicall 450-500 word, an e-book is perfect for your target audience anging from prospective customers to users</p>
            </div>
            <div>
              <NavLink to='/' className='btn transparent blue-text z-depth-0 lighten-2' style={{border:"2px solid #5DBCD2", textTransform:'capitalize', borderRadius:5, marginLeft:20}}>Order</NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default ProjectSummary
