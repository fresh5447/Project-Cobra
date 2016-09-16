import React from 'react';
import CheckpointView from './CheckpointView';
import { browserHistory } from 'react-router';

class OneCheckpointData extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      checkpoint: null,
      user: null
    };

  }


  componentWillMount(nextState, replace) {
    this.context.getUser((data) => {
      if (data.user === 'no user') {
        alert('you must be an signed in to view this');
        return browserHistory.push('/login');
      } else {
        this.setState({ user: data });
        return this.loadCheckpoint();
      }
    });
  }

  componentWillReceiveProps() {
    this.loadCheckpoint();
  }

  loadCheckpoint() {
    $.ajax({
      url: `/api/v1/modules/three/cp/${this.props.params.cp_id}`,
      method: 'GET',
    }).done((data) => {
      this.setState({ checkpoint: data });
    });
  }

  render() {
    console.log("CHECKPOINT", this.state.checkpoint)
    return this.state.checkpoint ? <CheckpointView user={this.state.user} checkpoint={this.state.checkpoint} /> : null;
  }
}

OneCheckpointData.displayName = OneCheckpointData;

OneCheckpointData.contextTypes = {
  getUser: React.PropTypes.func.isRequired
};

export default OneCheckpointData;
