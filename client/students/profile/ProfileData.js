import React from 'react';
import ProfileView from './ProfileView';

class ProfileData extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      user: null
    };
  }

  componentWillMount() {
    this.context.getUser((data) => this.setState({ user: data }));
  }

  render() {
    return <ProfileView />;
  }

}

ProfileData.contextTypes = {
  getUser: React.PropTypes.func.isRequired
};

export default ProfileData;
