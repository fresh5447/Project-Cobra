import React from 'react';
import AllStudentsTable from './AllStudentsTable';
import NavLink from '../../widgets/NavLink';

class StudentsContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      students: null
    };
  }

  componentWillMount() {
    this.loadStudents();
  }

  componentWillReceiveProps() {
    this.loadStudents();
  }

  componentWillUnmount() {
    this.loadStudents();
  }

  loadStudents() {
    $.ajax({
      url: '/getUsers',
      method: 'GET',
    }).done((data) => {
      this.setState({ students: data });
    });
  }

  render() {
    return (
      <div className="container">
      <div className="page-header">
        <h6 className="">Code Range Members</h6>
      </div>
        { this.state.students ? <AllStudentsTable students={this.state.students} /> : null }
      </div>
    )
  }

}


export default StudentsContainer;
