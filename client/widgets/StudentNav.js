import React from 'react';
import NavLink from '../widgets/NavLink';

const StudentNav = (props) =>
<div className="container">
  <nav className="navbar navbar-fixed-top navbar-light bg-faded my-navbar">
    <div className="my-nav-box">
      <img className="navbar-brand" src="/images/navbar-logo.png" />
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
          <NavLink className="nav-link" to="/dashboard">dashboard</NavLink>
        </li>
        <li className="nav-item">
          <a href="/logout" className="nav-link">logout</a>
        </li>
      </ul>
    </div>
  </nav>
</div>;


export default StudentNav;
