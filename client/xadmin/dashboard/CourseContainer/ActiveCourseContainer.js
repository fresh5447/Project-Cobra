import React from 'react';
import CourseView from './CourseView';
import EditCourseData from './EditCourseData';
import NavLink from '../../.././widgets/NavLink';
import {browserHistory} from 'react-router';



class ActiveCourseContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: null,
      activeComp: 'view'
    };
    this.switchComp = this.switchComp.bind(this);
  }


  componentWillMount(nextState, replace) {
    this.context.getUser((data) => {
      if (data.user === 'no user') {
        alert('you must be an admin to view this');
        return browserHistory.push('/login');
      } else {
        return this.loadCourse(this.props.params.course_id);
      }
    });
  }

  componentWillReceiveProps() {
    this.loadCourse(this.props.params.course_id);
  }

  componentWillUnmount() {
    this.loadCourse(this.props.params.course_id);
  }
  switchComp(newComp) {
    this.setState({ activeComp: newComp })
  }


  loadCourse(id) {
    console.log("trying to get course with id", id)
    $.ajax({
      url: '/api/v1/courses/' + id,
      method: 'GET',
    }).done((data) => {
      this.setState({ course: data });
    });
  }
  showComp() {
    if(this.state.course && this.state.activeComp === 'view') {
      return <CourseView switchComp={this.switchComp} course={this.state.course} />
    } else if (this.state.course && this.state.activeComp === 'edit') {
      return <EditCourseData course={this.state.course} />
    } else {
      return null
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          {this.showComp()}
        </div>
      </div>
    )
  }

}
ActiveCourseContainer.displayName = ActiveCourseContainer;
ActiveCourseContainer.contextTypes = {
  getUser: React.PropTypes.func.isRequired
};
export default ActiveCourseContainer;
