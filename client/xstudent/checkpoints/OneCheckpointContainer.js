import React from 'react';
import CheckpointNav from './CheckpointNav';
import { browserHistory } from 'react-router';

class OneCheckpointContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      checkpoints: null,
      user: null,
      incomplete: null,
      total: null,
    };

    this.toggleCheckpointCompletion = this.toggleCheckpointCompletion.bind(this);

  }

  componentWillMount(nextState, replace) {
    this.context.getUser((data) => {
      this.setState({ user: data });
      if (data.user === 'no user') {
        alert('you must be signed in to view this');
        return browserHistory.push('/login');
      } else {
        return this.loadCheckpoints();
      }
    });
  }


  toggleCheckpointCompletion(id, action) {
    console.log(id, action);
    $.ajax({
      url: `/api/v1/modules/toggleCheckpoint/${id}/${action}`,
      method: 'PUT',
    }).done((data) => {
      console.log(data, "DATRA");
      this.loadCheckpoints();
    });
  }

  loadCheckpoints() {
    $.ajax({
      url: `/api/v1/modules/student/${this.props.params.id}/checkpoints`,
      method: 'GET',
    }).done((data) => {
      this.setState({ checkpoints: data, total: data.length });
      console.log(data, "DATRA");
    });
  }

  howManyComplete() {
    if (this.state.checkpoints) {
      let counter = 0;
      for (var i = 0; i < this.state.checkpoints.length; i++) {
        if (this.state.checkpoints[i].status === 'complete') {
          counter ++;
        }
      }
      return counter;
    }
    return null;
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h6 className="">{this.howManyComplete()}/{this.state.total} checkponts complete </h6>
        </div>
        <div className="row">
          <div className="col-xs-3 cp-nav-container">
            <CheckpointNav toggleCompletion={this.toggleCheckpointCompletion} mid={this.props.params.id} checkpoints={this.state.checkpoints} />
          </div>
          <div className="col-xs-9">
            { this.props.children || <div className="container"><h3>Please select a checkpoint to continue</h3></div>}
          </div>
        </div>

      </div>
    )
  }
}

OneCheckpointContainer.displayName = OneCheckpointContainer;

OneCheckpointContainer.contextTypes = {
  getUser: React.PropTypes.func.isRequired
};

export default OneCheckpointContainer;
