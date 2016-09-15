import React from 'react';
import NavLink from '../widgets/NavLink';
import ViewProfile from './ViewProfile';
import EditProfileView from './EditProfileView';

class ProfileAccountData extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: null,
      activeComp: 'show',
      email: null,
      firstName: null,
      lastName: null,
      linkedIn: null,
      githubHandle: null,
      twitter: null,
      bio: null,
      skype: null,
      courses: null
    };
    this.changeActiveComp = this.changeActiveComp.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    this.loadUser();
  }
  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }
  handleSubmit() {
    const data = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      linkedIn: this.state.linkedIn,
      githubHandle: this.state.githubHandle,
      twitter: this.state.twitter,
      bio: this.state.bio,
      skype: this.state.skype
    };
    $.ajax({
      url: '/editUser',
      method: 'PUT',
      data
    }).done((d) => this.context.sendNotification('Profile Edit Success'));
  }

  loadUser() {
    this.context.getUser((data) => this.setState({ user: data }));
  }

  changeActiveComp(name) {
    this.setState({ activeComp: name });
  }

  showComp() {
    if (this.state.activeComp === 'show' && this.state.user) {
      return <ViewProfile user={this.state.user} changeActiveComp={this.changeActiveComp} />;
    } else if (this.state.activeComp === 'edit' && this.state.user) {
      return (<EditProfileView onFieldChange={(...args) => this.onFieldChange(...args)}
        user={this.state.user}
        handleSubmit={this.handleSubmit}
      />);
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        {this.showComp()}
      </div>
    );
  }
}

ProfileAccountData.displayName = ProfileAccountData;
ProfileAccountData.contextTypes = {
  getUser: React.PropTypes.func.isRequired,
  sendNotification: React.PropTypes.func.isRequired,
};
export default ProfileAccountData;
