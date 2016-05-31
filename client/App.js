import React from 'react'
import NavLink from './modules/NavLink'
import Navbar from './modules/Navbar'
import Notifier from './Notifier'

export default React.createClass({
  render() {
    return (
      <div>
        <Notifier >
          <Navbar />
          {this.props.children}
        </Notifier >
      </div>
    )
  }
})




          
{/* <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>  */}