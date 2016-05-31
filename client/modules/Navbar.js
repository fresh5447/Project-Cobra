import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <a className="navbar-brand my-nav-brand" href="/">Big Sky Code Academy</a>
        <ul className="nav navbar-nav pull-right">
          <li className="nav-item">
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/add-checkpoint">Add Checkpoint</NavLink>
            <NavLink to="/add-project">Add Project</NavLink>
          </li>
        </ul>
        <div className="btn-group nav-dd-btn">
          <button type="button" className="btn btn-secondary dropdown-toggle nav-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-user" aria-hidden="true"></i>
          </button>
          <div className="dropdown-menu my-dropdown-menu ">
            <a className="dropdown-item"><NavLink to="/login">Login</NavLink></a>
            <a className="dropdown-item"><NavLink to="/logout">Logout</NavLink></a>
            <a className="dropdown-item"><NavLink to="/signup">Signup</NavLink></a>
          </div>
        </div>
      </nav>
      )
  }
})