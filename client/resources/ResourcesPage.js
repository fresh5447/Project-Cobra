import React from 'react';
import AdminData from './admin/AdminData.js';
import StudentData from './student/StudentData.js';

class ResourcesPage extends React.Component {
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
      return <AdminData userRole={ this.state.user.local.role} />;
    } else if (this.state.user && this.state.user.local &&
      this.state.user.local.role === 'student') {
      return <StudentData userRole={ this.state.user.local.role} toggleFav={this.toggleFav} />;
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

ResourcesPage.displayName = 'ResourcesPage';

ResourcesPage.contextTypes = {
  getUser: React.PropTypes.func.isRequired
};

export default ResourcesPage;
