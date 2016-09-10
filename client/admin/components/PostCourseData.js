import React from 'react';
import PostCourseForm from './PostCourseForm';
import { browserHistory } from 'react-router';

class PostCourseData extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      startDate: null,
      completionDate: null,
      title: null,
      desc: null,
      kind: null,
      location: null,
      live: null,
    };

  }

  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.state.title,
      desc: this.state.desc,
      startDate: this.state.startDate,
      completionDate: this.state.completionDate,
      kind: this.state.kind,
      location: this.state.location,
      live: this.state.live,
    };
    $.ajax({
      url: `/api/v1/courses`,
      method: 'POST',
      data
    }).done((d) => {
      this.context.sendNotification("Course Created");
      const path = `/admin/dashboard`
      browserHistory.push(path);
    });
  }

  render() {
    return <PostCourseForm
    onFieldChange={(...args) => this.onFieldChange(...args)}
    handleSubmit={this.handleSubmit}
    />;
  }

}

PostCourseData.displayName = PostCourseData;
PostCourseData.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};

export default PostCourseData;
