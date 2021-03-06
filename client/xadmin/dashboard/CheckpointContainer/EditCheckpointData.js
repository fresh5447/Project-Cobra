import React from 'react';
import EditCheckpointForm from './EditCheckpointForm';
import { browserHistory } from 'react-router';
import Loader from '../../.././widgets/Loader';

class EditCheckpointData extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);

    this.state = {
      title: null,
      desc: null,
      content: null,
      publish: null,
      assignment: null,
    };
  }

  componentWillMount() {
    this.setState({
      title: this.props.checkpoint.title,
      desc: this.props.checkpoint.desc,
      content: this.props.checkpoint.content,
      publish: this.props.checkpoint.publish,
      assignment: this.props.checkpoint.assignment,
    })
  }


  handleSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.state.title,
      desc: this.state.desc,
      content: this.state.content,
      publish: this.state.publish,
      assignment: this.state.assignment,
    };
    $.ajax({
      url: `/api/v1/modules/one/${this.props.module_id}/checkpoints/${this.props.checkpoint._id}`,
      method: 'PUT',
      data
    }).done((d) => {
      this.context.sendNotification("Checkpoint Edits Saved");
      path = `/admin/dashboard/module/${this.props.params.module_id}`
      browserHistory.push(path);
    });
  }

  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }


  render() {
    return (this.state.title ? <EditCheckpointForm
      title={this.state.title}
      desc={this.state.desc}
      content={this.state.content}
      publish={this.state.publish}
      assignment={this.state.assignment}
      onFieldChange={this.onFieldChange}
      handleSubmit={this.handleSubmit}
      /> : <Loader />
    );
  }

}
EditCheckpointData.displayName = EditCheckpointData;
export default EditCheckpointData;
