import React from 'react';
import CourseView from './CourseView';
import EditCourseData from './EditCourseData';
import NavLink from '../../.././widgets/NavLink';



class ActiveCourseContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: null,
      activeComp: 'view'
    };
    this.switchComp = this.switchComp.bind(this);
  }

  componentWillMount() {
    this.loadCourse(this.props.params.course_id);
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
export default ActiveCourseContainer;