import React from 'react'
import NavLink from '../NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Modules</h2>
        <ul>
          <li><NavLink to="/modules/lessonOne">React Router</NavLink></li>
          <li><NavLink to="/modules/lessoneTwo">React</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});
