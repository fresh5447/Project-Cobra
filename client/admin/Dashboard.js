import React from 'react'
import StudentProgressBar from '../modules/StudentProgressBar'
import ProjectCard from '../ProjectCard'


export default React.createClass({
  render() {
    return (
      <div>
        <div className="container dashboard-progress-container">
          <div className="row">
            <div className="col-md-4">
              <h4> Start Date</h4>
              <h4> End Date </h4>
            </div>
            <div className="col-md-4">
              <h4> 45% Time Left </h4>
            </div>
            <div className="col-md-4">
              <h4> Currently on Project 3 </h4>
              <h4> 50% coursework completed </h4>
            </div>
          </div>
        </div>
        <div className="container student-card-container">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
      )
  }
})
