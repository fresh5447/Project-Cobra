import React from 'react';
import NavBar from './widgets/NavBar';
import Notifier from './context/Notifier';
import GetUser from './context/GetUser';
import Feedback from './context/Feedback';
import Login from './user/UserSignin';


class App extends React.Component {
  render() {
    return (
      <div>
        <GetUser>
          <Notifier>
            <Feedback>
                <NavBar>
                    {this.props.children ? this.props.children : <Login /> }
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
