import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = () => {
    return (
      <div className="project-list section">
        <div class="col m4">
          <div className="row">
            <ProjectSummary title="Blog/ Article" price="500"/>
          </div>
          <div className="row">
            <ProjectSummary title="e-book" price="1000"/>
          </div>
          <div className="row">
            <ProjectSummary title="Website Content" price="2000"/>
          </div>
        </div>
        <div class="col m4">
          <div className="row">
            <ProjectSummary title="Newsletter/ E-mailer" price="1000"/>
          </div>
          <div className="row">
            <ProjectSummary title="Report/ Guide" price="1000"/>
          </div>
          <div className="row">
            <ProjectSummary title="Video Script" price="500"/>
          </div>
        </div>
        <div class="col m4">
          <div className="row">
            <ProjectSummary title="Whitepaper" price="1000"/>
          </div>
          <div className="row">
            <ProjectSummary title="Product Description" price="1000"/>
          </div>
          <div className="row">
            <ProjectSummary title="Company Profile" price="2000"/>
          </div>
        </div>         
      </div>
    )
  }

export default ProjectList
