import React from 'react';
import StudentView from './StudentView';

class StudentData extends React.Component {

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
      console.log("Successfully loaded students");
    });
  }

  render() {
    return this.state.students ? <StudentView students={this.state.students}/> : null;
  }
}

StudentData.displayName = 'StudentData';

export default StudentData;
