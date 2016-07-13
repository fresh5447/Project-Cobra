import React from 'react';
import StudentView from './StudentsView';

class StudentsData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: null
    };
  }

  componentWillMount() {
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
    return this.state.students ? <StudentView students={this.state.students} /> : null;
  }
}

StudentsData.displayName = 'StudentsData';

export default StudentsData;
