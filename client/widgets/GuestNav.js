import React from 'react';
import NavLink from '../widgets/NavLink';

const GuestNav = (props) =>

<nav className="navbar navbar-light bg-faded">
  <a className="navbar-brand" href="#">Big Sky Code Academy</a>
  <p> Guest </p>
  <ul className="nav navbar-nav">
    <li className="nav-item">
      <NavLink className="nav-link" to="/signup">Signup</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/resources">Resources</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/login">Log In</NavLink>
    </li>
  </ul>
</nav>;

export default GuestNav;
