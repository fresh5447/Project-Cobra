import React from 'react';
import { browserHistory } from 'react-router';
import PostModuleForm from './PostModuleForm';

class PostModuleData extends React.Component {
  constructor(props) {
    super(props);

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
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.state.title,
      desc: this.state.desc,
      hours: this.state.hours
    };
    $.ajax({
      url: '/api/v1/modules',
      method: 'POST',
      data
    }).done((d) => {
      console.log('posted it', d)
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
export default PostModuleData;
