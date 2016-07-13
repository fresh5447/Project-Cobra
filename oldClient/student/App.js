import React from 'react';
import NavLink from '../widgets/NavLink';

export default React.createClass({
  render() {
    return (
      <div>
      <nav className="navbar navbar-light bg-faded">
        <a className="navbar-brand" href="#">Navbar</a>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" onlyActiveOnIndex>Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/modules">Course</NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">
        {this.props.children}
      </div>
      </div>
    );
  }
});
