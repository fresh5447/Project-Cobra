import React from 'react';

const AllStudentsTable = (props) => {
  const students = props.students.map((item) =>
    (
        <tr >
          <th>{ item.local.email }</th>
          <td>{ item.local.username }</td>
          <td>{ 'true' }</td>
          <td> full-stack </td>
        </tr>
      )
  );
  return (
    <div>
    <h3>Enrolled Students</h3>
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

      <form className="form-inline">
        <h5> Invite Student </h5>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Jane Doe" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="jane.doe@example.com" />
          </div>
          <button type="submit" className="btn btn-primary form-primary-btn">
            Send invitation
          </button>
        </form>
    </div>
  );
};

AllStudentsTable.displayName = 'AllStudentsTable';

// AllStudentsTable.propTypes = {
//   students: React.PropTypes.array.isRequired,
// };

export default AllStudentsTable;
