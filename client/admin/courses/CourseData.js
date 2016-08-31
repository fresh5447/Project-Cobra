import React from 'react';
// import PostModuleData from '../modules/PostModuleData';
import ViewCourse from './ViewCourse';
import NavLink from '../../widgets/NavLink';

class CourseData extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: null
    };
  }

  componentWillMount(props) {
    console.log('PROPS', props)
    this.loadCourse(this.props.params.courseId);
  }

  componentWillReceiveProps() {
    this.loadCourse(this.props.params.courseId);
  }


  loadCourse(id) {
    $.ajax({
      url: '/api/v1/courses/' + id,
      method: 'GET',
    }).done((data) => {
      console.log(data);
      this.setState({ course: data });
    });
  }
  render() {
    return this.state.course ? <ViewCourse course={this.state.course} /> : null;
  }

}
CourseData.displayName = CourseData;
export default CourseData;
