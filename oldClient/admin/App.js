import React from 'react';
import NavLink from '../widgets/NavLink';
import Notifier from '../context/Notifier';

export default React.createClass({
  render() {
    return (
      <div>
        <Notifier>
          <nav className="navbar navbar-light bg-faded">
            <a className="navbar-brand" href="#">Navbar</a>
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/modules" onlyActiveOnIndex>Modules</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/students">Students</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/submissions">Submissions</NavLink>
              </li>
            </ul>
          </nav>
          <div className="container">
            {this.props.children}
          </div>
        </Notifier>
      </div>
    );
  }
});
