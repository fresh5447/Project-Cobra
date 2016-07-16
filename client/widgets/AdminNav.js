import React from 'react';
import NavLink from '../widgets/NavLink';

const AdminNav = (props) =>

<nav className="navbar navbar-fixed-top navbar-light bg-faded my-navbar">
<div class="my-nav-box">
  <a className="navbar-brand" href="/">CodeRange</a>
  <p> ADMIN </p>
  <ul className="nav navbar-nav">
    <li className="nav-item">
      <NavLink className="nav-link" to="/modules" onlyActiveOnIndex>Modules</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/students">Students</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/resources">Resources</NavLink>
    </li>
    <li className="nav-item">
      <a href="/logout" className="nav-link"> Logout </a>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/submissions">Submissions</NavLink>
    </li>
  </ul>
</div>

</nav>

export default AdminNav;
