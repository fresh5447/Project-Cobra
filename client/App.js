import React from 'react';
import NavBar from './widgets/NavBar';
import Notifier from './context/Notifier';
import GetUser from './context/GetUser';
import Feedback from './context/Feedback';
import Signup from './user/Signup';


class App extends React.Component {
  render() {
    const h = <div> Hello </div>;
    return (
      <div>
        <GetUser>
          <Notifier>
            <Feedback>
                <NavBar>
                    {this.props.children ? this.props.children : <Signup/> }
                </NavBar>
            </Feedback>
          </Notifier>
        </GetUser>
      </div>
    );
  }
}

App.displayName = 'App';

module.exports = App;
