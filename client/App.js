import React from 'react'
import NavLink from './modules/NavLink'
import Navbar from './modules/Navbar'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
})




          
{/* <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>  */}