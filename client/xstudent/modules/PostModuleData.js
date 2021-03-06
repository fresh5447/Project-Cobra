import React from 'react';
import { browserHistory } from 'react-router';
import PostModuleForm from './PostModuleForm';

class PostModuleData extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: null,
      hours: null,
      desc: null,
    };

  }

  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
    console.log(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.state.title,
      desc: this.state.desc,
      hours: this.state.hours,
      course: this.props.course
    };
    $.ajax({
      url: '/api/v1/modules',
      method: 'POST',
      data
    }).done((d) => {
      console.log('data', d)
      this.context.sendNotification('Module created.');
      const path = '/admin/dashboard';
      browserHistory.push(path);
    });
  }

  render() {
    return (<PostModuleForm
      onFieldChange={(...args) => this.onFieldChange(...args)}
      handleSubmit={this.handleSubmit}
      title={this.state.title}
      desc={this.state.desc}
      hours={this.state.hours}
    />);
  }

}

PostModuleData.displayName = PostModuleData;
PostModuleData.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};
export default PostModuleData;
