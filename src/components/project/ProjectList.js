import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = () => {
    return (
      <div className="project-list section">
        <div class="col m4">
          <ProjectSummary title="Blog/ Article"/>
          <br />
          <ProjectSummary title="e-book"/>
          <br />
          <ProjectSummary title="Website Content"/>
        </div>
        <div class="col m4">
          <ProjectSummary title="Newsletter/ E-mailer"/>
          <br />
          <ProjectSummary title="Report/ Guide"/>
          <br />
          <ProjectSummary title="Video Script"/>
        </div>
        <div class="col m4">
          <ProjectSummary title="Whitepaper"/>
          <br />
          <ProjectSummary title="Product Description"/>
          <br />
          <ProjectSummary title="Company Profile"/>
        </div>         
      </div>
    )
  }

export default ProjectList
