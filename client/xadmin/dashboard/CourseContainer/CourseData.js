import React from 'react';
import MiniNav from './MiniNav';

class CourseData extends React.Component {
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
      <div className="container">
      <div className="page-header">
        <h6 className="">Courses Dashboard</h6>
      </div>
        <div className="row">
          <div className="col-xs-4">
          {
            this.state.courses ? <MiniNav courses={this.state.courses} /> : null
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

export default CourseData;
