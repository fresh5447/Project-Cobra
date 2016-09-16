import React from 'react';
import NavLink from '../../.././widgets/NavLink';

class ProfileData extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
        <ul className="profile-links">
          {/*<li><NavLink to="/profile/submissions"><h3>Activity</h3></NavLink></li>*/}
          <li><NavLink to="/profile/account"><h3>Account</h3></NavLink></li>
        </ul>
        </div>
        <div className="row">
          {this.props.children && React.cloneElement(this.props.children, {
            user: 'IT FUCKING WORKS'
          })}
        </div>

      </div>
    );
  }
}

ProfileData.displayName = ProfileData;
export default ProfileData;
