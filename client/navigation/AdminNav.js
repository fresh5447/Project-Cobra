import React from 'react';
import NavLink from '../widgets/NavLink';

const AdminNav = (props) =>

<nav className="navbar navbar-fixed-top navbar-light bg-faded my-navbar">
  <div className="my-nav-box">
    <a className="navbar-brand" href="/">CodeRange</a>
    <ul className="nav navbar-nav">
    <li className="nav-item">
      <NavLink className="nav-link" to="/admin/publisher">publisher</NavLink>
    </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/admin/courses">courses</NavLink>
      </li>
      <li className="nav-item">
        <a href="/logout" className="nav-link"> Logout </a>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/admin/submissions">Submissions</NavLink>
      </li>
    </ul>
  </div>

</nav>

export default AdminNav;
