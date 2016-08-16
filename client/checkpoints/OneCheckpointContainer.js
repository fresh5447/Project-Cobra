import React from 'react';
import CheckpointNav from './CheckpointNav';

class OneCheckpointContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      checkpoints: null,
      user: null
    };

  }

  componentWillMount() {
    this.loadCheckpoints();
    this.context.getUser((data) => this.setState({ user: data }));
  }

  loadCheckpoints() {
    $.ajax({
      url: `/api/v1/modules/student/${this.props.params.id}/checkpoints`,
      method: 'GET',
    }).done((data) => {
      this.setState({ checkpoints: data });
    });
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h5>Hello</h5>
          <h6 className="">0/5 checkponts complete </h6>
        </div>
        <div className="col-xs-3">
          <CheckpointNav mid={this.props.params.id} checkpoints={this.state.checkpoints} />
        </div>
        <div className="col-xs-9">
          { this.props.children || <div>No Children Yet</div>}
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
