import React from 'react';
import AllStudentsTable from './AllStudentsTable';
import NavLink from '../../widgets/NavLink';
import { browserHistory } from 'react-router';

class StudentsContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      students: null
    };
  }

  componentWillMount(nextState, replace) {
    this.context.getUser((data) => {
      if (data.user === 'no user') {
        alert('you must be an admin to view this');
        return browserHistory.push('/login');
      } else {
        return this.loadStudents();
      }
    });
  }

  componentWillReceiveProps() {
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

StudentsContainer.displayName = 'StudentsContainer';
StudentsContainer.contextTypes = {
  getUser: React.PropTypes.func.isRequired
};
export default StudentsContainer;
