import React from 'react'
import StudentTable from './StudentTable'

export default React.createClass({
  render() {
    const students = this.props.students.map((item) => {
      return (
          <tr>
            <th>{ item.local.email }</th>
            <td>{ item.local.username }</td>
            <td>{ 'true' }</td>
            <td> full-stack </td>
          </tr>
        )
    })
    return (
      <table className="table">
        <thead className="thead-inverse">
          <tr>
            <th>email</th>
            <th>username</th>
            <th>course</th>
            <th> enrolled </th>
          </tr>
        </thead>
        <tbody>
          { students }
        </tbody>
      </table>

      )
  }
})
