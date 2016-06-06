import React from 'react'
import NavLink from '../modules/NavLink'



export default React.createClass({
  render() {
    console.log(this.props.thing)
    return (
      <div>
        <h2>Found modules</h2>
        <NavLink to="/dashboard/modules/SomeModName">View Mod</NavLink>
        { this.props.children }
      </div>
    )
  }
})
