import React from 'react';
import NavLink from '../widgets/NavLink';

const AdminNav = (props) =>

<nav className="navbar navbar-light bg-faded">
  <a className="navbar-brand" href="#">Navbar</a>
  <h4> ADMIN NAV </h4>
  <ul className="nav navbar-nav">
    <li className="nav-item">
      <NavLink className="nav-link" to="/modules" onlyActiveOnIndex>Modules</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/students">Students</NavLink>
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
