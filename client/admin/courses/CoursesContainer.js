import React from 'react';
import CoursesNav from './CoursesNav'

class CoursesContainer extends React.Component {
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
      <div>
      <div className="page-header">
        <h6 className="">Admin Dashboard</h6>
      </div>
      <div className="container">

        <div className="row">
          <div className="col-xs-offset-3 col-xs-6">
          {
            this.state.courses ? <CoursesNav courses={this.state.courses} /> : null
          }
          </div>
        </div>
          <div className="col-xs-12">
          {
            this.props.children || <h2> select course </h2>
          }
          </div>

      </div>
      </div>
    )
  }
}

export default CoursesContainer;
