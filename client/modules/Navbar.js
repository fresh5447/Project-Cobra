import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink'
import { browserHistory } from 'react-router'

NavLink.displayName = 'NavLink';


export default React.createClass({
  getInitialState() {
    return {
      user: null
    }
  },
  componentWillMount() {
    this.context.getUser((data) => this.setState({ user: data }))
  },
  contextTypes: {
    getUser: React.PropTypes.func.isRequired,
    sendNotification: React.PropTypes.func.isRequired
  },
  fireLogout() {
    console.log("firing logout")
    $.ajax({
      url: '/logout',
      method: 'GET'
    }).done(() => {
      console.log("inside ajax")
      this.context.sendNotification("All logged out");
      const path = '/';
      browserHistory.push(path)
    });
  },
  render() {
    const userName = this.state.user && this.state.user.local ? this.state.user.local.username : "no user."
    const userRole = this.state.user && this.state.user.local ? this.state.user.local.role : "no user yet."

    return (
      <nav className="navbar navbar-light bg-faded">
        <a className="navbar-brand my-nav-brand" href="/">Big Sky Code Academy</a>
        <a className="navbar-brand my-nav-brand" href="/">User: { userName }  Role: { userRole } </a>
        <ul className="nav navbar-nav pull-right">
          <li className="nav-item">
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/admin-dashboard">Admin Dash</NavLink>
            <NavLink to="/add-checkpoint">Add Checkpoint</NavLink>
            <NavLink to="/add-project">Add Project</NavLink>
          </li>
        </ul>
        <div className="btn-group nav-dd-btn">
          <button type="button" className="btn btn-secondary dropdown-toggle nav-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-user" aria-hidden="true"></i>
          </button>
          <div className="dropdown-menu my-dropdown-menu ">
            <NavLink to="/login"><span className="dropdown-item">Login</span></NavLink>
            <a className="dropdown-item" onClick={this.fireLogout}>Logout</a>
            <NavLink to="/signup"><span className="dropdown-item">Signup</span></NavLink>
          </div>
        </div>
      </nav>
      )
  }
})