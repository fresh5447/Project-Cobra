import React from 'react';
import ModuleStore from '../stores/ModuleStore'
import DBView from './DBView'

class DBData extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      courses: null,
      user: null
    };
  }

  componentWillMount() {
    this.getCourses();
    ModuleStore.getModules((data) => this.setState({ modules: data }));
    this.context.getUser((data) => this.setState({ user: data }));
  }

  getCourses() {
    $.ajax({
      url: API,
      method: 'GET'
    }).done((data) => {
      this.setState({ courses: data });
    });
  }



  render() {
    return this.state.modules && this.state.user ?
          <DBView modules={ this.state.modules }
          user={ this.state.user }/> :
          null
  }
}

DBData.contextTypes = {
    getUser: React.PropTypes.func.isRequired
};

export default DBData;
