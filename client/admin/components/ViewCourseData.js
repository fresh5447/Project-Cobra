import React from 'react';
import ViewCourse from './ViewCourse';
import NavLink from '../../widgets/NavLink';

class ViewCourseData extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: null
    };
  }

  componentWillMount(props) {
    console.log('PROPS', props)
    this.loadCourse(this.props.params.course_id);
  }

  componentWillReceiveProps() {
    this.loadCourse(this.props.params.course_id);
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
ViewCourseData.displayName = ViewCourseData;
export default ViewCourseData;
