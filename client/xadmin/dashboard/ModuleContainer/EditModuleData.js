import React from 'react';
import EditModuleForm from './EditModuleForm';
import { browserHistory } from 'react-router';

class EditModuleData extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);

    this.state = {
      title: null,
      desc: null,
      hours: null,
    };
  }

  componentWillMount() {
    this.loadModule(this.props.modId);
  }

  componentWillReceiveProps() {
    this.loadModule(this.props.modId);
  }


  handleSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.state.title,
      desc: this.state.desc,
      hours: this.state.hours,
    };
    $.ajax({
      url: `/api/v1/modules/byId/${this.props.modId}`,
      method: 'PUT',
      data
    }).done((d) => {
      this.context.sendNotification('Module edits saved.');
    });
  }

  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }


  loadModule(id) {
    $.ajax({
      url: '/api/v1/modules/byId/' + id,
      method: 'GET',
    }).done((data) => {
      this.setState({
        title: data.title,
        hours: data.hours,
        desc: data.desc
      });
    });
  }

  render() {
    return (this.state.title ? <EditModuleForm
      title={this.state.title}
      desc={this.state.desc}
      hours={this.state.hours}
      onFieldChange={this.onFieldChange}
      handleSubmit={this.handleSubmit}
      /> : null
    );
  }

}
EditModuleData.displayName = EditModuleData;
EditModuleData.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};
export default EditModuleData;
