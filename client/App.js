import React from 'react';
import NavLink from './widgets/NavLink';
import NavBar from './widgets/NavBar';
import Notifier from './context/Notifier';
import GetUser from './context/GetUser';

export default React.createClass({
  render() {
    return (
      <div>
      <GetUser>
          <Notifier>
            <NavBar>
              <div className="container">
                {this.props.children}
              </div>
            </NavBar>
          </Notifier>
        </GetUser>
      </div>
    );
  }
});
