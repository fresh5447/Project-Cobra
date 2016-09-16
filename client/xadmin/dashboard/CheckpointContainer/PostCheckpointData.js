import React from 'react';
import { browserHistory } from 'react-router';
import PostCheckpointForm from './PostCheckpointForm';

class PostCheckpointData extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: null,
      content: null,
      desc: null,
      publish: null,
      assignment: null,
    };

  }

  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
    console.log(this.props.params.course_id);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.state.title,
      desc: this.state.desc,
      content: this.state.content,
      assignment: this.state.assignment,
      publish: this.state.publish
    };
    $.ajax({
      url: `/api/v1/modules/one/${this.props.params.module_id}/checkpoints`,
      method: 'POST',
      data
    }).done((d) => {
      this.context.sendNotification("Checkpoint Created");
      path = `/admin/dashboard/module/${this.props.params.module_id}`
      browserHistory.push(path);
    });
  }

  render() {
    return (<PostCheckpointForm
      onFieldChange={(...args) => this.onFieldChange(...args)}
      handleSubmit={this.handleSubmit}
      title={this.state.title}
      content={this.state.content}
      assignment={this.state.assignment}
    />);
  }

}

PostCheckpointData.displayName = PostCheckpointData;
PostCheckpointData.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};
export default PostCheckpointData;
