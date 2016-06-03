import React from 'react'

export default React.createClass({
  render() {
    const students = this.props.students.map((item) => {
      return (
          <tr >
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
            <th className="my-thead">email</th>
            <th className="my-thead">username</th>
            <th className="my-thead">course</th>
            <th className="my-thead"> enrolled </th>
          </tr>
        </thead>
        <tbody>
          { students }
        </tbody>
      </table>

      )
  }
})
