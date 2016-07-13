import React from 'react';
import PostCheckpointForm from './PostCheckpointForm';

class PostCheckpointData extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: null,
      content: null,
      desc: null,
      assignment: null
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
      content: this.state.content,
      assignment: this.state.assignment,
    };
    $.ajax({
      url: `/api/v1/modules/one/${this.props.params.mod_id}/checkpoints`,
      method: 'POST',
      data
    }).done((d) => {
      console.log('posted it', d)
    });
  }

  render() {
    return <PostCheckpointForm
    onFieldChange={(...args) => this.onFieldChange(...args)}
    handleSubmit={this.handleSubmit}
    title={this.state.title}
    content={this.state.content}
    assignment={this.state.assignment}
    />;
  }

}

PostCheckpointData.displayName = PostCheckpointData;
export default PostCheckpointData;
