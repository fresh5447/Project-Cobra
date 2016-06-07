import React from 'react'
import Dashboard from './Dashboard'

Dashboard.displayName = 'Dashboard'


export default React.createClass({
  getInitialState() {
    return {
      modules: null,
      submissions: null,
      students: null,
    }
  },
  loadModules() {
    $.ajax({
      url: '/api/v1/modules',
      method: 'GET',
    }).done((data)=>{
      this.setState({ modules: data });
      console.log("Successfully loaded modules")
    })
  },
  loadStudents() {
    $.ajax({
      url: '/getUsers',
      method: 'GET',
    }).done((data)=>{
      this.setState({ students: data });
      console.log("Successfully loaded students")
    })
  },
  loadSubmissions() {
    $.ajax({
      url: '/api/v1/submissions',
      method: 'GET',
    }).done((data)=>{
      this.setState({ submissions: data });
      console.log("Successfully loaded submissions")
    })
  },
  componentWillMount() {
    this.loadSubmissions();
    this.loadStudents();
    this.loadModules();
  },
  render() {
    return this.state.modules && this.state.submissions && this.state.students 
    ? <Dashboard loadSubmissions={this.loadSubmissions} students={this.state.students} modules={this.state.modules} submissions={this.state.submissions}/> : null;
  }
})
