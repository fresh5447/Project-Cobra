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
      location: null
    };

  }

  componentWillMount(nextState, replace) {
    this.context.getUser((data) => {
      if (data.user === 'no user') {
        alert('you must be an admin to view this');
        return browserHistory.push('/login');
      }
    });
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
      desc: this.state.desc,
      kind: this.state.kind,
    };
    $.ajax({
      url: `/api/v1/courses`,
      method: 'POST',
      data
    }).done((d) => {
      this.context.sendNotification("Course Created");
      const path = `/admin/dashboard/courses`
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
  sendNotification: React.PropTypes.func.isRequired,
  getUser: React.PropTypes.func.isRequired
};

export default PostCourseData;
