import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <a className="navbar-brand" href="#">Navbar</a>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/about" activeStyle={{ color: 'red' }}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/repos" activeStyle={{ color: 'red' }}>Repos</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" activeStyle={{ color: 'red' }}>Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/logout" activeStyle={{ color: 'red' }}>Logout</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" activeStyle={{ color: 'red' }}>Signup</Link>
          </li>
        </ul>
      </nav>
      )
  }
})