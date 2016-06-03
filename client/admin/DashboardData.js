import React from 'react'
import Dashboard from './Dashboard'

export default React.createClass({
  getInitialState() {
    return {
      projects: null,
      submissions: null,
      students: null,
    }
  },
  loadProjects() {
    $.ajax({
      url: '/api/v1/projects',
      method: 'GET',
    }).done((data)=>{
      this.setState({ projects: data });
      console.log("Successfully loaded projects")
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
    this.loadProjects();
  },
  render() {
    return this.state.projects && this.state.submissions && this.state.students 
    ? <Dashboard loadSubmissions={this.loadSubmissions} students={this.state.students} projects={this.state.projects} submissions={this.state.submissions}/> : null;
  }
})
