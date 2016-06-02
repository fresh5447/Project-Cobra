import React from 'react'
import StudentTable from './StudentTable'

export default React.createClass({
  render() {
    return (
      <div>
        <StudentTable students={this.props.students} />
      </div>
      )
  }
})
