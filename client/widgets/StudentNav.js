import React from 'react';
import NavLink from '../widgets/NavLink';

const StudentNav = (props) =>

<nav className="navbar navbar-fixed-top navbar-light bg-faded my-navbar">
  <div className="my-nav-box">
    <a className="navbar-brand" href="/">CodeRange</a>
    <p> Student </p>
    <ul className="nav navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/modules" onlyActiveOnIndex>course</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/new/resources">resources</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/submissions">submissions</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/profile">profile</NavLink>
      </li>
      <li className="nav-item">
        <a href="/logout" className="nav-link">logout</a>
      </li>
    </ul>
  </div>

</nav>

export default StudentNav;
