import React from 'react'
import StudentProgressBar from '../modules/StudentProgressBar'
import ProjectCard from './ProjectCard'

export default React.createClass({
  getInitialState() {
    return {
      projects: null,
      user: null
    }
  },
  contextTypes: {
    getUser: React.PropTypes.func.isRequired,
  },
  loadProjectsFromServer() {
    $.ajax({
      url: '/api/v1/projects',
      method: 'GET'
    }).done((data) => this.setState({ projects: data }))
  },
  componentWillMount() {
    this.loadProjectsFromServer();
    this.context.getUser((data) => this.setState({ user: data }))
  },
  render() {
    if(this.state.projects){
      const projectsArr = this.state.projects.map(function(item){
        return <ProjectCard title={ item.title } desc={item.desc} checkpoints={item.checkpoints} hours={item.hours} />
      })
      return (
        <div>
          <StudentProgressBar/>
          <div className="container student-card-container">
          { this.state.projects ? projectsArr : null }
          </div>
        </div>
        )
    } else {
      return (<div> </div>)
    }
  }
})
