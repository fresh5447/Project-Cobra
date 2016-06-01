import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink'
import { browserHistory } from 'react-router'


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
    this.context.sendNotification("Logging out");
    const path = `/logout`
    const nextPath = `/`
    browserHistory.push(path)
    browserHistory.push(nextPath)
    this.context.sendNotification("Successfully logged out");
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
            <NavLink to="/add-checkpoint">Add Checkpoint</NavLink>
            <NavLink to="/add-project">Add Project</NavLink>
          </li>
        </ul>
        <div className="btn-group nav-dd-btn">
          <button type="button" className="btn btn-secondary dropdown-toggle nav-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-user" aria-hidden="true"></i>
          </button>
          <div className="dropdown-menu my-dropdown-menu ">
            <a className="dropdown-item"><NavLink to="/login"><span className="dropdown-item">Login</span></NavLink></a>
            <a className="dropdown-item" onClick={this.fireLogout}>Logout</a>
            <a className="dropdown-item"><NavLink to="/signup"><span className="dropdown-item">Signup</span></NavLink></a>
          </div>
        </div>
      </nav>
      )
  }
})