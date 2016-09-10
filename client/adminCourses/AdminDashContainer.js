import React from 'react';
import CoursesNavContainer from './CoursesNavContainer';

class AdminDashContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      courses: null
    };

    this.loadCourses = this.loadCourses.bind(this);
  }

  componentWillMount() {
    this.loadCourses();
  }

  componentWillReceiveProps() {
    this.loadCourses();
  }

  componentWillUnmount() {
    this.loadCourses();
  }


  loadCourses() {
    $.ajax({
      url: '/api/v1/courses',
      method: 'GET',
    }).done((data) => {
      this.setState({ courses: data });
    });
  }

  render() {
    return (
      <div className="container">
      <div className="page-header">
        <h6 className="">Admin Dashboard</h6>
      </div>
        <div className="row">
          <div className="col-xs-4">
          {
            this.state.courses ? <CoursesNavContainer courses={this.state.courses} /> : null
          }
          </div>
          <div className="col-xs-8">
          {
            this.props.children || <h2> select course </h2>
          }
          </div>
        </div>
      </div>
    )
  }
}

export default AdminDashContainer;
