import React from 'react';
import CheckpointView from './CheckpointView';
import EditCheckpointData from './EditCheckpointData';
import NavLink from '../../.././widgets/NavLink';
import Loader from '../../.././widgets/Loader';

class ActiveCheckpointContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      checkpoint: null,
      checkpointId: null,
      activeComp: 'view'
    };
    this.switchComp = this.switchComp.bind(this);
  }

  componentWillMount() {
    this.loadCheckpoint();
  }

  componentWillReceiveProps() {
    this.loadCheckpoint();
  }

  componentWillUnmount() {
    this.loadCheckpoint();
  }
  switchComp(newComp, another) {
    this.setState({ activeComp: newComp })
    if(another){
      this.setState({ checkpointId: another })
    }
  }

  loadCheckpoint() {
    console.log("trying to get checkpoint with id", this.props.params.module_id, this.props.params.checkpoint_id );
    $.ajax({
      url: `/api/v1/modules/one/${this.props.params.module_id}/checkpoints/${this.props.params.checkpoint_id}`,
      method: 'GET',
    }).done((data) => {
      this.setState({ checkpoint: data });
      console.log('FOUND SPECIFC checkpoint', data)
    });
  }
  showComp() {
    if(this.state.checkpoint && this.state.activeComp === 'view') {
      return <CheckpointView switchComp={this.switchComp} checkpoint={this.state.checkpoint} />
    } else if (this.state.checkpoint && this.state.activeComp === 'edit') {
      return <EditCheckpointData module_id={this.props.params.module_id} checkpointId={this.props.params.checkpoint_id} checkpoint={this.state.checkpoint} />
    } else {
      return <Loader />
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          {this.showComp()}
        </div>
      </div>
    )
  }

}
ActiveCheckpointContainer.displayName = ActiveCheckpointContainer;
export default ActiveCheckpointContainer;
