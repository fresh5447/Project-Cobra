import React from 'react';
import PostSubmissionForm from './PostSubmissionForm';

class PostSubmissionData extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.submitSubmissionToServer = this.submitSubmissionToServer.bind(this);

    this.state = {
      content: null
    };
  }

  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }

  submitSubmissionToServer(e) {
    e.preventDefault();
    const data = {
      content: this.state.content,
      checkpoint: this.props.cpId
    };
    $.ajax({
      url: '/api/v1/submissions',
      method: 'POST',
      data
    }).done((d) => {
      console.log(d, "Success");
      this.context.sendNotification('Submission SuBmItTed');
      location.reload();
    });
  }
  render() {
    return (<PostSubmissionForm
      submitSubmissionToServer={this.submitSubmissionToServer}
      onFieldChange={(...args) => this.onFieldChange(...args)}
      content={this.state.content}
    />);
  }
}

PostSubmissionData.displayName = PostSubmissionData;

PostSubmissionData.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};

export default PostSubmissionData;
