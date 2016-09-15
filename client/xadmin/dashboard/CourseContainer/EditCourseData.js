import React from 'react';
import EditCourseForm from './EditCourseForm';

class EditCourseData extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);

    this.state = {
      title: null,
      startDate: null,
      completionDate: null,
      kind: null,
      desc: null,
      location: null,
    };
  }

  componentWillMount() {
    this.loadCourse(this.props.course._id);
  }

  componentWillReceiveProps() {
    this.loadCourse(this.props.course._id);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.state.title,
      startDate: this.state.startDate,
      completionDate: this.state.completionDate,
      kind: this.state.kind,
      location: this.state.location,
      desc: this.state.desc,
      content: this.state.content,
      assignment: this.state.assignment,
    };
    $.ajax({
      url: `/api/v1/courses/${this.props.course._id}`,
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
      url: '/api/v1/courses/' + id,
      method: 'GET',
    }).done((data) => {
      console.log(data);
      this.setState({
        title: data.title,
        startDate: data.startDate,
        completionDate: data.completionDate,
        kind: data.kind,
        location: data.location,
        desc: data.desc,
        content: data.content,
        assignment: data.assignment,
      });
    });
  }
  render() {
    return (this.state.title ? <EditCourseForm
      title= { this.state.title }
      startDate= { this.state.startDate }
      completionDate= { this.state.completionDate }
      kind= { this.state.kind }
      location= { this.state.location }
      desc= { this.state.desc }
      content= { this.state.content }
      assignment= { this.state.assignment }
      onFieldChange={this.onFieldChange}
      handleSubmit={this.handleSubmit}
      desc={this.state.desc}
      /> : null
    );
  }

}
EditCourseData.displayName = EditCourseData;
export default EditCourseData;
