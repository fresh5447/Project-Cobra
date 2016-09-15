import React from 'react';
import ResourcesData from './ResourcesData.js';

class ResourcesContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      resources: null,
      studentResources: null,
      user: null
    };
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => this.context.getUser((data) => this.setState({ user: data }))

  renderComponent() {
    if (this.state.user && this.state.user.local && this.state.user.local.role === 'admin') {
      return <ResourcesData role={ this.state.user.local.role} />;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        { this.renderComponent() }
      </div>
    );
  }
}

ResourcesContainer.displayName = 'ResourcesContainer';

ResourcesContainer.contextTypes = {
  getUser: React.PropTypes.func.isRequired
};

export default ResourcesContainer;
