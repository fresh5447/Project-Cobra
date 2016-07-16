import React from 'react';
import NavLink from '../widgets/NavLink';

class ProfileData extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile/resources">Resources</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile/submissions" className="nav-link"> Submissions </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile/account">Account</NavLink>
          </li>
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