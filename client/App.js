import React from 'react'
import NavLink from './modules/NavLink'
import Navbar from './modules/Navbar'
import Notifier from './Notifier'
import GetUser from './UserContext'

Navbar.displayName = 'Navbar';
NavLink.displayName = 'NavLink';
Notifier.displayName = 'Notifier';
GetUser.displayName = 'GetUser';

export default React.createClass({
  someFunction() {
    return "hello"
  },
  render() {
    return (
      <div>
        <Notifier >
          <GetUser >
            <Navbar />
            {this.props.children && React.cloneElement(this.props.children, {
              someFunction: this.someFunction
            })}
          </GetUser>
        </Notifier >
      </div>
    )
  }
})

          
{/* <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>  */}