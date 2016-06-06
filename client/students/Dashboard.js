import React from 'react'
import NavLink from '../modules/NavLink'

export default React.createClass({
  render() {
    console.log(this.props.someFunction)
    return (
      <div>
        <h2>Dashboard</h2>
        <NavLink to="/dashboard/modules">Test</NavLink>
        <div className="jumbotron">
          <div className="container">
            <h1>Welcome To Your Dashboard</h1>
            <p>You are currently enrolled in Full Stack Web Development</p>
            <NavLink to="/dashboard/modules">View Course</NavLink>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
})
