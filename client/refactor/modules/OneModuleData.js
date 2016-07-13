import React from 'react';
import Module from './OneModuleView';

class ModulesData extends React.Component {
  constructor(props, context) {

    super(props, context);
    this.state = {
      module: null
    };

  }

  componentWillMount() {
    this.loadModule();
  }

  loadModule() {
    $.ajax({
      url: `/api/v1/modules/byId/${this.props.params.id}`,
      method: 'GET',
    }).done((data) => {
      this.setState({ module: data });
    });
  }

  render() {
    return this.state.module ? <Module module={this.state.module} mId={this.props.params.id} /> : null;
  }
}

ModulesData.displayName = 'ModulesData';

export default ModulesData;
