import React from 'react';
import PostResourceForm from './PostResourceForm';
import { browserHistory } from 'react-router';

class PostResourceData extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: null,
      link: null,
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
      link: this.state.link
    };
    $.ajax({
      url: '/api/v1/resources',
      method: 'POST',
      data
    }).done((d) => {
      this.context.sendNotification("Resource Created");
      const path = '/resources/all'
      browserHistory.push(path);
    });
  }

  render() {
    return <PostResourceForm
    onFieldChange={(...args) => this.onFieldChange(...args)}
    handleSubmit={this.handleSubmit}
    title={this.state.title}
    title={this.state.link}
    link={this.state.link}
    assignment={this.state.assignment}
    />;
  }

}

PostResourceData.displayName = PostResourceData;
PostResourceData.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};

export default PostResourceData;
