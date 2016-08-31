import React from 'react';
import PostModuleForm from './PostModuleForm';
import { browserHistory } from 'react-router';

class PostModuleData extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      hours: null,
      title: null,
      desc: null,
      course: null,
      courses: null
    };

  }

  componentWillMount() {
    this.loadCourses();
  }

  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }

  loadCourses() {
    $.ajax({
      url: '/api/v1/courses',
      method: 'GET',
    }).done((data) => {
      this.setState({ courses: data });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.state.title,
      desc: this.state.desc,
      hours: this.state.hours,
      course: this.state.course,
    };
    $.ajax({
      url: `/api/v1/modules`,
      method: 'POST',
      data
    }).done((d) => {
      this.context.sendNotification("Course Created");
      const path = `/admin/dashboard`
      browserHistory.push(path);
    });
  }

  render() {
    return <PostModuleForm
    courses={this.state.courses ? this.state.courses : null}
    onFieldChange={(...args) => this.onFieldChange(...args)}
    handleSubmit={this.handleSubmit}
    />;
  }

}

PostModuleData.displayName = PostModuleData;
PostModuleData.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};

export default PostModuleData;
