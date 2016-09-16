import React from 'react';
import MiniNav from './MiniNav';
import {browserHistory} from 'react-router';

class CourseData extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      courses: null
    };
    this.loadCourses = this.loadCourses.bind(this);
  }

  componentWillMount(nextState, replace) {
    this.context.getUser((data) => {
      if (data.user === 'no user') {
        alert('you must be an admin to view this');
        return browserHistory.push('/login');
      } else {
        return this.loadCourses();;
      }
    });
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

CourseData.displayName = 'CourseData';

CourseData.contextTypes = {
  getUser: React.PropTypes.func.isRequired
};
export default CourseData;
