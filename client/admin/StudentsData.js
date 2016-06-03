import React from 'react'
import StudentTable from './StudentTable'

StudentTable.displayName = 'StudentTable'


export default React.createClass({
  render() {
    return (
      <div>
        <StudentTable students={this.props.students} />
        <form className="form-inline">
        <h5> Invite Student </h5>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Jane Doe"/>
          </div>
          <div className="form-group">
            <input type="email" className="form-control"  placeholder="jane.doe@example.com"/>
          </div>
          <button type="submit" className="btn btn-primary form-primary-btn">Send invitation</button>
        </form>
      </div>
      )
  }
})
