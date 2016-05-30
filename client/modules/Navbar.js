import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <a className="navbar-brand" href="#">Navbar</a>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/logout">Logout</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/signup">Signup</NavLink>
          </li>
        </ul>
      </nav>
      )
  }
})