import React from 'react'
import ProjectsData from './ProjectsData'
import StudentsData from './StudentsData'
import SubmissionsData from './SubmissionsData'

export default React.createClass({
  getInitialState() {
    return {
      activeComp: 'projects'
    }
  },
  returnComp() {
    if(this.state.activeComp === 'projects') {
      return <ProjectsData/>
    } else if(this.state.activeComp === 'students'){
      return <StudentsData/>
    } else if(this.state.activeComp === 'submissions'){
      return <SubmissionsData/>
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
            <div>
              <div className="btn-group my-btn-group" data-toggle="buttons">
                <label className="btn btn-primary my-primary-btn" onClick={this.setActiveComp.bind(null, 'projects')}>
                  <input type="radio" autocomplete="off" checked/>Projects
                </label>
                <label className="btn btn-primary my-primary-btn" onClick={this.setActiveComp.bind(null, 'students')}>
                  <input type="radio" autocomplete="off"/> Students
                </label>
                <label className="btn btn-primary my-primary-btn" onClick={this.setActiveComp.bind(null, 'submissions')}>
                  <input type="radio" autocomplete="off"/> Submissions
                </label>
              </div>
              <div>
                { this.returnComp() }
              </div>
            </div>
          </div>
        </div>
      )
  }
})
