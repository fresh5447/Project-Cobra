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
      url: '/api/v1/modules/two/cp/' + this.props.params.checkpointName,
      method: 'GET'
    }).done((data) => this.setState({ checkpoint: data[0] }))
  },
  componentWillMount() {
    this.loadCPfromServer();
    console.log("Set the state", this.state.checkpoint)
  },
  render() {
    return this.state.checkpoint ? <SingleCheckpointView checkpoint={this.state.checkpoint} /> : null;
  }
})
