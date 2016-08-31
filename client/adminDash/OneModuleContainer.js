import React from 'react';
import PostCheckpointData from '../checkpoints/PostCheckpointData';
import NavLink from '../widgets/NavLink';

class OneModuleContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      module: null
    };
  }

  componentWillReceiveProps() {
    this.loadModule();
  }
  componentWillUnmount() {
    this.setState({ module: null })
  }

  loadModule() {
    $.ajax({
      url: '/api/v1/modules/byId/' + this.props.params.modId,
      method: 'GET',
    }).done((data) => {
      this.setState({ module: data });
      console.log('INSIDE THE ROTUE DOUGLAS',this.state.module)
    });
  }
  render() {
    return (
      <div>
        <div className="container">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">{this.state.module && this.state.module.title ? this.state.module.title : "loading title"}</h4>
            <h6 className="card-text">{this.state.module && this.state.module.desc ? this.state.module.desc : "loading desc"}</h6>
            <h6 className="card-text">{this.state.module && this.state.module.desc ? this.state.module.hours : "loading hours"}</h6>
          </div>
          <ul className="list-group list-group-flush">
          {
            this.state.module && this.state.module.checkpoints.length > 0 ? this.state.module.checkpoints.map((item) => {
              return <li className="list-group-item">{item.title}</li>
            }) : <li className="list-group-item">No Checkpoints Yet</li>
          }
          </ul>
          <div className="card-block">
            <NavLink to={"/post/checkpoint/" + this.props.params.modId}>New Checkpoint</NavLink>
          </div>
        </div>

        </div>
      </div>
    )
  }

}


export default OneModuleContainer;
