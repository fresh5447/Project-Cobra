import React from 'react';
import ModulesList from './ModulesList';
import { browserHistory } from 'react-router';

class ModulesData extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      modules: null,
      user: null
    };
    this.loadModules = this.loadModules.bind(this);
  }


  componentWillMount(nextState, replace) {
    this.context.getUser((data) => {
      if (data.user === 'no user') {
        alert('you must be signed in to view this');
        return browserHistory.push('/login');
      } else {
        return this.loadModules();
      }
    });
  }


  loadModules() {
    $.ajax({
      url: '/api/v1/modules/student',
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

ModulesData.contextTypes = {
  getUser: React.PropTypes.func.isRequired
};

export default ModulesData;
