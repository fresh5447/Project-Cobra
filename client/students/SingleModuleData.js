import React from 'react'
import SingleModuleView from './SingleModuleView'

SingleModuleView.displayName = 'SingleModuleView';

export default React.createClass({
  getInitialState() {
    return {
      module:     null,
    }
  },
  loadModuleFromServer() {
    console.log('/api/v1/modules/byId/' + this.props.params.id)
    $.ajax({
      url: '/api/v1/modules/byId/' + this.props.params.id,
      method: 'GET'
    }).done((data) => this.setState({ module: data }))
  },
  componentWillMount() {
    this.loadModuleFromServer();
  },
  render() {
    window.t = this.state.module;
    if(this.state.module) {
      return (
        <div>
          <SingleModuleView module={this.state.module}/>
        </div>
        )
    } else {
      return (<div>no mod </div>)
    }
  }
})

{ /*  <SingleModuleView module={this.state.module}/>  */ }