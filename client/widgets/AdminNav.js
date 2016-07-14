import React from 'react';
import NavLink from '../widgets/NavLink';

const AdminNav = (props) =>

<nav className="navbar navbar-light bg-faded">
  <a className="navbar-brand" href="#">Big Sky Code Academy</a>
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
</nav>

export default AdminNav;
