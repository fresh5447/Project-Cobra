import React from 'react';
import CheckpointView from './CheckpointView';
import EditCheckpointData from './EditCheckpointData';

class CheckpointData extends React.Component {
  constructor(props) {
    super(props);

    this.toggleComp = this.toggleComp.bind(this);

    this.state = {
      checkpoint: null,
      activeComp: 'view'
    };
  }

  componentWillMount() {
    this.loadCheckpoint();
  }

  loadCheckpoint() {
    $.ajax({
      url: `/api/v1/modules/three/cp/${this.props.params.id}`,
      method: 'GET',
    }).done((data) => {
      this.setState({ checkpoint: data });
    });
  }

  toggleComp = (name) => {
    console.log('toogle comp', name)
    this.setState({ activeComp: name });
  }

  showComp() {
    if (this.state.checkpoint && this.state.activeComp === 'view') {
      return <CheckpointView checkpoint={this.state.checkpoint} />;
    } else if (this.state.checkpoint && this.state.activeComp === 'edit') {
      return <EditCheckpointData checkpoint={this.state.checkpoint} />;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleComp.bind(this,'edit')}>Edit CheckPoint</button>
        <h5> { this.state.checkpoint ? this.state.checkpoint.module.title : "loading" } </h5>
        { this.showComp() }
      </div>
    );
  }
}

CheckpointData.displayName = CheckpointData;
export default CheckpointData;
