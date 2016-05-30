import React from 'react'
import StudentProgressBar from '../modules/StudentProgressBar'
import ProjectCard from './ProjectCard'

export default React.createClass({
  render() {
    return (
      <div>
      <StudentProgressBar/>
      <div className="container students-card-container">
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
