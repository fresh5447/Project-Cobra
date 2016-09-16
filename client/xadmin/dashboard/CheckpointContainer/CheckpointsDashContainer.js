import React from 'react';
import MiniNav from './MiniNav';
import NavLink from '../../.././widgets/NavLink';
import Loader from '../../.././widgets/Loader';

class CheckpointsDashContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      checkpoints: null
    };
  }

  componentWillMount() {
    this.loadCheckpoints(this.props.params.module_id);
  }

  componentWillReceiveProps() {
    this.loadCheckpoints(this.props.params.module_id);
  }

  componentWillUnmount() {
    this.loadCheckpoints(this.props.params.module_id);
  }

  loadCheckpoints(id) {
    $.ajax({
      url: '/api/v1/modules/one/' + id + "/checkpoints"
    }).done((data) => {
      this.setState({ checkpoints: data });
    });
  }
  render() {
    return (
      <div className="container">
      <div className="page-header">
        <h6 className="">Checkpoints Dashboard</h6>
      </div>
        <div className="row">
          <div className="col-xs-4">
          {
            this.state.checkpoints ? <MiniNav modId={this.props.params.module_id} checkpoints={this.state.checkpoints} /> : <Loader />
          }
          </div>
          <div className="col-xs-8">
          {
            this.props.children || <h2> select checkpoint to begin </h2>
          }
          </div>
        </div>
      </div>
    )
  }

}


export default CheckpointsDashContainer;
