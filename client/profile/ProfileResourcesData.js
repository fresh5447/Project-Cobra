import React from 'react';

class ProfileResourcesData extends React.Component {
  render() {
    return (
        <div className="container">
          <h3>Save Resources</h3>
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

ProfileResourcesData.displayName = ProfileResourcesData;
export default ProfileResourcesData;
