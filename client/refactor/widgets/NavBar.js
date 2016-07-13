import React from 'react';
import NavLink from '../widgets/NavLink';

class NavBar extends React.Component {

  constructor(props, context) {

    super(props, context);

    this.state = {
      user: null
    };

  }

  componentWillMount() {
    this.context.getUser((data) => this.setState({ user: data }));
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <a className="navbar-brand" href="#">Navbar</a>
        <h4> { this.state.user && this.state.user.local ? this.state.user.local.email : "no user"} </h4>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/modules" onlyActiveOnIndex>Modules</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/students">Students</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">Signup</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Log In</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/submissions">Submissions</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

NavBar.contextTypes = {
  getUser: React.PropTypes.func.isRequired
};

NavBar.displayName = NavBar;

export default NavBar;
