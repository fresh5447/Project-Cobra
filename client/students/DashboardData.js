import React from 'react'
import StudentProgressBar from '../modules/StudentProgressBar'
import AllProjectsCard from './AllProjectsCard'

export default React.createClass({
  getInitialState() {
    return {
      projects: null,
      user: null,
      activeProject: null
    }
  },
  contextTypes: {
    getUser: React.PropTypes.func.isRequired,
  },
  setActiveProject(id) {
    console.log(id)
    this.setState({ activeProject: id })
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
    let self = this;
    if(this.state.projects){
      const projectsArr = this.state.projects.map(function(item){
        return <AllProjectsCard setActiveProject={ self.setActiveProject } id={item._id} title={ item.title } desc={item.desc} checkpoints={item.checkpoints} hours={item.hours} />
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
