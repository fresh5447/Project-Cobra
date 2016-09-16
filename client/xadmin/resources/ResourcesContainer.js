import React from 'react';
import ResourcesData from './ResourcesData.js';
import { browserHistory } from 'react-router';
import Loader from '../../widgets/Loader';

class ResourcesContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      resources: null,
      studentResources: null,
      user: null
    };
  }

  componentWillMount(nextState, replace) {
    this.context.getUser((data) => {
      if (data.user === 'no user') {
        alert('you must be an admin to view this');
        return browserHistory.push('/login');
      } else {
        return this.loadUser();
      }
    });
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => this.context.getUser((data) => this.setState({ user: data }))

  renderComponent() {
    if (this.state.user && this.state.user.local && this.state.user.local.role === 'admin') {
      return <ResourcesData role={ this.state.user.local.role} />;
    } else {
      return <Loader />;
    }
  }

  render() {
    return (
      <div className="container">
      <div className="page-header">
        <h6 className="">Resources</h6>
      </div>
        <div className="row">
          <div className="col-xs-12">
          {
          this.renderComponent()
          }
          </div>
        </div>
      </div>
    );
  }
}

ResourcesContainer.displayName = 'ResourcesContainer';

ResourcesContainer.contextTypes = {
  getUser: React.PropTypes.func.isRequired
};

export default ResourcesContainer;
