import React from 'react';
import EditCheckpointForm from './EditCheckpointForm'
;
class EditCheckpointData extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: this.props.checkpoint.title,
      content: this.props.checkpoint.content,
      desc: this.props.checkpoint.desc,
      assignment: this.props.checkpoint.assignment,
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
      url: `/api/v1/modules/three/cp/${this.props.checkpoint._id}`,
      method: 'PUT',
      data
    }).done((d) => {
      console.log('posted it', d)
    });
  }

  render() {
    return this.state.title ? <EditCheckpointForm title={this.state.title}
      content={this.state.content} desc={this.state.desc}
      assignment={this.state.assignment}
      handleSubmit={this.handleSubmit}
      onFieldChange={(...args) => this.onFieldChange(...args)}
    /> : null;
  }

}

EditCheckpointData.displayName = EditCheckpointData;
export default EditCheckpointData;
