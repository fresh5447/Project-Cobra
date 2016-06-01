import React from 'react'
import NavLink from './modules/NavLink'
import Navbar from './modules/Navbar'
import Notifier from './Notifier'
import GetUser from './UserContext'

export default React.createClass({
  render() {
    return (
      <div>
        <Notifier >
          <GetUser >
            <Navbar />
              {this.props.children}
          </GetUser>
        </Notifier >
      </div>
    )
  }
})

          
{/* <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>  */}