import React from 'react';
import ModulesList from './ModulesList';

class ModulesData extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      modules: null
    };
  }

  componentWillMount() {
    this.loadModules();
  }

  loadModules() {
    $.ajax({
      url: '/api/v1/modules',
      method: 'GET',
    }).done((data) => {
      this.setState({ modules: data });
    });
  }

  render() {
    return this.state.modules ? <ModulesList modules={this.state.modules} /> : null;
  }

}

ModulesData.displayName = 'ModulesData';

export default ModulesData;
