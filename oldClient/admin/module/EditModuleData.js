import React from 'react';
import Module from './Module';
import EditModuleForm from './EditModuleForm';

class EditModuleData extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      desc: props.module.desc,
      title: props.module.title
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.state.title,
      desc: this.state.desc
    };
    $.ajax({
      url: `/api/v1/modules/byId/${this.props.module._id}`,
      method: 'PUT',
      data
    }).done((d) => console.log("success", d));
  }

  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }

  render() {
    return (<EditModuleForm handleSubmit={this.handleSubmit}
      title={this.state.title}
      desc={this.state.desc}
      onFieldChange={(...args) => this.onFieldChange(...args)}
    />);
  }

}

EditModuleData.displayName = 'EditModuleData';

export default EditModuleData;
