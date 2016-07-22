import React from 'react';
import EditCheckpointForm from './EditCheckpointForm';

class EditCheckpointData extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onAssignmentChange = this.onAssignmentChange.bind(this);

    this.state = {
      checkpoint: null,
      title: null,
      content: null,
      desc: null,
      assignment: null
    };

  }

  componentWillMount() {
    this.loadCheckpoint();
  }

  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }

  onTitleChange = (e) => this.setState({ title: e.target.value });

  onContentChange(e) {
    this.setState({ content: e.target.value });
  }

  onDescChange(e) {
    this.setState({ desc: e.target.value });
  }

  onAssignmentChange(e) {
    this.setState({ assignment: e.target.value });
  }

  loadCheckpoint() {
    $.ajax({
      url: `/api/v1/modules/three/cp/${this.props.params.cp_id}`,
      method: 'GET',
    }).done((data) => {
      this.setState({ checkpoint: data });
    });
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
      url: `/api/v1/modules/three/cp/${this.props.params.cp_id}`,
      method: 'PUT',
      data
    }).done((d) => {
      console.log('posted it', d)
    });
  }

  render() {
    return this.state.checkpoint ? <EditCheckpointForm title={this.state.checkpoint.title}
      content={this.state.checkpoint.content} desc={this.state.checkpoint.desc}
      assignment={this.state.checkpoint.assignment}
      handleSubmit={this.handleSubmit}
      onFieldChange={(...args) => this.onFieldChange(...args)}
      onTitleChange={this.onTitleChange}
      onContentChange = {this.onContentChange}
      onDescChange = {this.onDescChange}
      onAssignmentChange = {this.onAssignmentChange}
    /> : null;
  }

}

EditCheckpointData.displayName = EditCheckpointData;
export default EditCheckpointData;
