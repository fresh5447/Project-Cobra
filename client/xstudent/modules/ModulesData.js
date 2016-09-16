import React from 'react';
import ModulesList from './ModulesList';
import { browserHistory } from 'react-router';
import Loader from '../../widgets/Loader';

class ModulesData extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      modules: null,
      user: null,
      course: null
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
      url: '/api/v1/courses/' + this.props.params.course_id,
      method: 'GET',
    }).done((data) => {
      this.setState({ modules: data.modules, course: data.title });
      console.log(this.state.modules)
    });
  }

  render() {
    return this.state.modules ? <ModulesList course={this.state.course} modules={this.state.modules} /> : <Loader />;
  }

}

ModulesData.displayName = 'ModulesData';

ModulesData.contextTypes = {
  getUser: React.PropTypes.func.isRequired
};

export default ModulesData;
