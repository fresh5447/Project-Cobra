import React from 'react';
// import PostModuleData from '../modules/PostModuleData';
import EditCourseForm from './EditCourseForm';
import NavLink from '../../widgets/NavLink';

class EditCourseData extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);

    this.state = {
      course: null,
      title: null,
      desc: null,
      startDate: null,
      completionDate: null,
      id: null
    };
  }

  componentWillMount() {
    this.loadCourse(this.props.params.courseId);
  }

  componentWillReceiveProps() {
    this.loadCourse(this.props.params.courseId);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.state.title,
      desc: this.state.desc,
      content: this.state.content,
      assignment: this.state.assignment,
    };
    $.ajax({
      url: `/api/v1/courses/${this.state.id}`,
      method: 'PUT',
      data
    }).done((d) => {
      console.log('successfully edited course', d)
    });
  }

  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }


  loadCourse(id) {
    $.ajax({
      url: '/api/v1/courses/' + this.props.params.courseId,
      method: 'GET',
    }).done((data) => {
      console.log(data);
      this.setState({
        course: data,
        title: data.title,
        desc: data.desc,
        startDate: data.startDate,
        completionDate: data.completionDate,
        id: data._id
      });
    });
  }
  render() {
    return (this.state.course ? <EditCourseForm
      title={this.state.title}
      onFieldChange={this.onFieldChange}
      handleSubmit={this.handleSubmit}
      desc={this.state.desc}
      startDate={this.state.startDate}
      completionDate={this.state.completionDate}
      /> : null
    );
  }

}
EditCourseData.displayName = EditCourseData;
export default EditCourseData;
