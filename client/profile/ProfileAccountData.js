import React from 'react';

class ProfileAccountData extends React.Component {
  render() {
    return (
        <div className="container">
            <h3>Account</h3>
            <h4> {this.props.user} </h4>
            <ul>
              <li>Github</li>
              <li>Linkedin</li>
              <li>Twitter</li>
            </ul>
        </div>
    );
  }
}

ProfileAccountData.displayName = ProfileAccountData;
export default ProfileAccountData;
