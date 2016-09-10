import React from 'react';
import CourseCard from '../components/CourseCard';

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
        {
          this.state.courses ? this.state.courses.map((item) => <CourseCard course={item} /> ) : null
        }

      </div>
      </div>
    )
  }
}

export default CoursesContainer;
