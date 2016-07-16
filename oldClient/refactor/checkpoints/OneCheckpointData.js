import React from 'react';
import CheckpointView from './CheckpointView';

class OneCheckpointData extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.context.getUser = this.context.getUser.bind(this); --Desperation attempt

    this.state = {
      checkpoint: null,
      user: null
    };

  }

  componentWillMount() {
    this.loadCheckpoint();
    this.context.getUser((data) => this.setState({ user: data }));
    console.log("CHECKPOINT USER", this.state.user); //undefined
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
    return this.state.checkpoint ? <CheckpointView user={this.state.user} checkpoint={this.state.checkpoint} /> : null;
  }
}

OneCheckpointData.displayName = OneCheckpointData;

OneCheckpointData.contextTypes = {
  getUser: React.PropTypes.func.isRequired
};

export default OneCheckpointData;