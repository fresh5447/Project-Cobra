import React from 'react';
import MiniNav from './MiniNav';
import NavLink from '../../.././widgets/NavLink';
import { browserHistory } from 'react-router';


class ModulesDashContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modules: null
    };
  }

  componentWillMount(nextState, replace) {
    this.context.getUser((data) => {
      if (data.user === 'no user') {
        alert('you must be an admin to view this');
        return browserHistory.push('/login');
      } else {
        return this.loadModules(this.props.params.course_id);
      }
    });
  }

  componentWillReceiveProps() {
    this.loadModules(this.props.params.course_id);
  }

  componentWillUnmount() {
    this.loadModules(this.props.params.course_id);
  }

  loadModules(id) {
    $.ajax({
      url: '/api/v1/courses/' + id,
      method: 'GET',
    }).done((data) => {
      this.setState({ modules: data.modules });
    });
  }
  render() {
    return (
      <div className="container">
      <div className="page-header">
        <h6 className="">Modules Dashboard</h6>
      </div>
        <div className="row">
          <div className="col-xs-4">
          {
            this.state.modules ? <MiniNav courseId={this.props.params.course_id} modules={this.state.modules} /> : null
          }
          </div>
          <div className="col-xs-8">
          {
            this.props.children || <h2> select module to begin </h2>
          }
          </div>
        </div>
      </div>
    )
  }

}

ModulesDashContainer.displayName = 'ModulesDashContainer';

ModulesDashContainer.contextTypes = {
  getUser: React.PropTypes.func.isRequired
};


export default ModulesDashContainer;
