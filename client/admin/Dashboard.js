import React from 'react'
import ProjectsData from './ProjectsData'
import StudentsData from './StudentsData'
import SubmissionsData from './SubmissionsData'

export default React.createClass({
  getInitialState() {
    return {
      activeComp: 'projects',
    }
  },
  returnComp() {
    if(this.state.activeComp === 'projects') {
      return <ProjectsData projects={ this.props.projects }/>
    } else if(this.state.activeComp === 'students'){
      return <StudentsData students={ this.props.students }/>
    } else if(this.state.activeComp === 'submissions'){
      return <SubmissionsData loadSubmissions={this.props.loadSubmissions} submissions={ this.props.submissions }/>
    } else {
      return null;
    }
  },
  setActiveComp(name) {
    console.log("trying to change state", name)
    this.setState({ activeComp: name })
  },
  render() {
    return (
        <div className="container">
          <div className="row">        
                <h3 className="" onClick={this.setActiveComp.bind(null, 'projects')}>
                  Projects
                </h3>
                <h3 className="" onClick={this.setActiveComp.bind(null, 'students')}>
                  Students
                </h3>
                <h3 className="" onClick={this.setActiveComp.bind(null, 'submissions')}>
                   Submissions
                </h3>
                <span className="label label-default">I hate how this looks</span>
              </div>
              <div>
                { this.returnComp() }
              </div>
        </div>
      )
  }
})
