import React from 'react';
import NavLink from '../../widgets/NavLink';

const AllStudentsTable = (props) => {
  const students = props.students.map((item) =>
    (
        <tr>
          <th><NavLink to={'/admin/student/view/' + item._id}>{ item.local.email }</NavLink></th>
          <th>{ item.local.role }</th>
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
            <th className="my-thead">role</th>
          </tr>
        </thead>
        <tbody>
          { students }
        </tbody>
      </table>

      <form className="form-inline">
        <h5> Invite Student </h5>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Jane Doe" disabled />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="jane.doe@example.com" disabled />
          </div>
          <button type="submit" className="btn btn-primary form-primary-btn" disabled>
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
