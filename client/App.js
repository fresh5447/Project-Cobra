import React from 'react';
import NavLink from './widgets/NavLink';
import NavBar from './widgets/NavBar';
import Notifier from './context/Notifier';
import GetUser from './context/GetUser';
import Feedback from './context/Feedback';
import WelcomePage from './widgets/WelcomePage'



export default React.createClass({
  render() {
    const h = <div> Hello </div>;
    return (
      <div>
      <GetUser>
          <Notifier>
            <Feedback>
                <NavBar>
                    {this.props.children ? this.props.children : <WelcomePage/> }
                </NavBar>
            </Feedback>
          </Notifier>
        </GetUser>
      </div>
    );
  }
});
