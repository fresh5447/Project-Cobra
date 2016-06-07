import React from 'react'
import SingleModuleView from './SingleModuleView'

SingleModuleView.displayName = 'SingleModuleView';

export default React.createClass({
  getInitialState() {
    return {
      module:     null,
      checkpoints: null
    }
  },
  loadModuleFromServer() {
    console.log('/api/v1/modules/byName/' + this.props.params.moduleName)
    $.ajax({
      url: '/api/v1/modules/byName/' + this.props.params.moduleName,
      method: 'GET'
    }).done((data) => this.setState({ module: data }))
  },
  componentWillMount() {
    this.loadModuleFromServer();
  },
  render() {
    if(this.state.module) {
      return (
        <div>
          <SingleModuleView module={this.state.module}/>
        </div>
        )
    } else {
      return (<div> </div>)
    }
  }
})
