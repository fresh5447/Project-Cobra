import React from 'react';
import NavLink from '../widgets/NavLink';

const StudentNav = (props) =>

<nav className="navbar navbar-fixed-top navbar-light bg-faded my-navbar">
  <div class="my-nav-box">
    <a className="navbar-brand" href="/">CodeRange</a>
    <p> Student </p>
    <ul className="nav navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/modules" onlyActiveOnIndex>Modules</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/resources/all">Resources</NavLink>
      </li>
      <li className="nav-item">
        <a href="/logout" className="nav-link"> Logout </a>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/profile/submissions">Submissions</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/profile/account">Profile</NavLink>
      </li>
    </ul>
  </div>

</nav>

export default StudentNav;
