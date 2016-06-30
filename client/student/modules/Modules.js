import React from 'react';
import NavLink from '../NavLink';

class Modules extends React.Component {
  render() {
    return (
      <div id="wrapper">
          <div id="sidebar-wrapper">
              <ul className="sidebar-nav">
                  <li className="sidebar-brand">
                      <a href="#">
                          MODULE NAME
                      </a>
                  </li>
                  <li><NavLink to="/modules/lessonOne">React Router</NavLink></li>
                  <li><NavLink to="/modules/lessoneTwo">React</NavLink></li>

              </ul>
          </div>
          <div id="page-content-wrapper">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-lg-12">
                        {this.props.children}
                          <button id="menu-toggle">Toggle Menu</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Modules;
