import React from 'react';
import Module from './OneModuleView';

class ModulesData extends React.Component {
  constructor(props, context) {

    super(props, context);
    this.state = {
      module: null,
      checkpoints: null
    };

  this.makeNewRequest = this.makeNewRequest.bind(this);

  }

  componentWillMount() {
    this.loadModule();
    this.loadCheckpoints();
  }
  makeNewRequest(id) {
    const p = {
      type: "request checkpoint completion",
      info: {
        cpId: id
      },
    };
    $.ajax({
      url: '/api/v1/requests',
      method: 'POST',
      data: p
    }).done((d) => console.log(d, 'POST SUCCESS'));
  }

  loadCheckpoints() {
    $.ajax({
      url: `/api/v1/modules/student/${this.props.params.id}/checkpoints`,
      method: 'GET',
    }).done((data) => {
      this.setState({ checkpoints: data });
    });
  }

  loadModule() {
    $.ajax({
      url: `/api/v1/modules/student/oneModule/${this.props.params.id}`,
      method: 'GET',
    }).done((data) => {
      this.setState({ module: data });
    });
  }

  render() {
    return this.state.module ? <Module makeNewRequest={this.makeNewRequest} checkpoints={this.state.checkpoints} module={this.state.module} mId={this.props.params.id} /> : null;
  }
}

ModulesData.displayName = 'ModulesData';

export default ModulesData;
