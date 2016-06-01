import React from 'react'
import SingleProjectView from './SingleProjectView'

export default React.createClass({
  getInitialState() {
    return {
      project:     null,
      checkpoints: null
    }
  },
  loadProjectFromServer() {
    console.log('/api/v1/projects/byName/' + this.props.params.projectName)
    $.ajax({
      url: '/api/v1/projects/byName/' + this.props.params.projectName,
      method: 'GET'
    }).done((data) => this.setState({ project: data }))
  },
  componentWillMount() {
    this.loadProjectFromServer();
  },
  render() {
    if(this.state.project) {
      return (
        <div>
          <SingleProjectView project={this.state.project}/>
        </div>
        )
    } else {
      return (<div> </div>)
    }
  }
})
