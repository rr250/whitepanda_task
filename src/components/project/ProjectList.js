import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = () => {
    return (
      <div className="project-list section">
        <div class="col m4">
          <ProjectSummary/>
          <br />
          <ProjectSummary/>
          <br />
          <ProjectSummary/>
        </div>
        <div class="col m4">
          <ProjectSummary/>
          <br />
          <ProjectSummary/>
          <br />
          <ProjectSummary/>
        </div>
        <div class="col m4">
          <ProjectSummary/>
          <br />
          <ProjectSummary/>
          <br />
          <ProjectSummary/>
        </div>         
      </div>
    )
  }

export default ProjectList
