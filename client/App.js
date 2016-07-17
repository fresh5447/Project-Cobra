import React from 'react';
import NavLink from './widgets/NavLink';
import NavBar from './widgets/NavBar';
import Notifier from './context/Notifier';
import GetUser from './context/GetUser';
import WelcomePage from './widgets/WelcomePage'



export default React.createClass({
  render() {
    const h = <div> Hello </div>;
    return (
      <div>
      <GetUser>
          <Notifier>
            <NavBar>
              <div className="container">
                {this.props.children ? this.props.children : <WelcomePage/> }
              </div>
            </NavBar>
          </Notifier>
        </GetUser>
      </div>
    );
  }
});
