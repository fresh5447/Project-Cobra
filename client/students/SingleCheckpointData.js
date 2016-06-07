import React from 'react'
import SingleCheckpointView from './SingleCheckpointView'

SingleCheckpointView.displayName = 'SingleCheckpointView';

{ /*  REPO */ }
export default React.createClass({
  getInitialState() {
    return {
      checkpoint: null
    }
  },
  loadCPfromServer() {
    $.ajax({
      url: '/api/v1/modules/three/cp/' + this.props.params.cp_id,
      method: 'GET'
    }).done((data) => this.setState({ checkpoint: data }))
  },
  componentWillMount() {
    this.loadCPfromServer();
    console.log("Set the state", this.state.checkpoint)
  },
  render() {
    window.tot = this.state.checkpoint;
    return this.state.checkpoint ? <SingleCheckpointView checkpoint={this.state.checkpoint} /> : null;
  }
})
