import React from 'react';
import NavLink from '../widgets/NavLink';

const GuestNav = (props) =>

<nav className="navbar navbar-fixed-top navbar-light bg-faded my-navbar">
  <div className="my-nav-box">
    <a className="navbar-brand" href="/">CodeRange</a>
    <p> ADMIN </p>
    <ul className="nav navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Signup</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/resources">Resources</NavLink>
      </li>
      <li className="nav-item">
        <a href="/login" className="nav-link"> Login </a>
      </li>
    </ul>
  </div>

</nav>

export default GuestNav;
