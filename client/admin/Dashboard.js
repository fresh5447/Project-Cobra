import React from 'react'
import ProjectsData from './ProjectsData'
import StudentsData from './StudentsData'
import SubmissionsData from './SubmissionsData'

ProjectsData.displayName = 'ProjectsData'
StudentsData.displayName = 'StudentsData'
SubmissionsData.displayName = 'SubmissionsData'


  const style = {
    active: {
      fontSize: '26px',
      color: '#34495e',
      borderColor: '#333333',
      marginBottom: '16px',
    },
    disabled: {
      fontSize: '16px',
      color: '#333333',
    }
  };

export default React.createClass({
  getInitialState() {
    return {
      activeComp: 'submissions',
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
            <div className="col-sm-3">
              <h3 className="make-cursor" style={this.state.activeComp === 'submissions' ? style.active : style.disabled } onClick={this.setActiveComp.bind(null, 'submissions')}>
                Submissions
              </h3>
            </div>
            <div className="col-sm-3">
              <h3 className="make-cursor" style={this.state.activeComp === 'students' ? style.active : style.disabled } onClick={this.setActiveComp.bind(null, 'students')}>
                Students
              </h3>
            </div>       
          </div>
              <div>
                { this.returnComp() }
              </div>
        </div>
      )
  }
})
