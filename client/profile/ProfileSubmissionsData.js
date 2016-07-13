import React from 'react';

class ProfileSubmissionsData extends React.Component {
  render() {
    return (
        <div className="container">
          <h3>Submissions</h3>
          <h4> {this.props.user} </h4>
          <ul>
            <li>Resource One</li>
            <li>Resoure Two</li>
            <li>Resource Three</li>
          </ul>
        </div>
    );
  }
}

ProfileSubmissionsData.displayName = ProfileSubmissionsData;
export default ProfileSubmissionsData;
