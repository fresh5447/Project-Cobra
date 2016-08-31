import React from 'react';
// import PostModuleData from '../modules/PostModuleData';
import EditModuleForm from './EditModuleForm';
import NavLink from '../../widgets/NavLink';

class EditModuleData extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      order: null,
      title: null,
      desc: null,
      hours: null,
      checkpoints: null,
      id: null
    };
  }

  componentWillReceiveProps() {
    this.loadModule();
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.state.title,
      desc: this.state.desc,
      hours: this.state.hours,
      checkpoints: this.state.checkpoints,
    };
    $.ajax({
      url: `/api/v1/modules/byId/${this.state.id}`,
      method: 'PUT',
      data
    }).done((d) => {
      console.log('successfully edited course', d)
    });
  }

  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }


  loadModule() {
    $.ajax({
      url: '/api/v1/modules/byId/' + this.props.params.moduleId,
      method: 'GET',
    }).done((data) => {
      console.log(data);
      this.setState({
        order: data.order,
        title: data.title,
        desc: data.desc,
        checkpoints: data.checkpoints,
        hours: data.hours,
        id: date._id
      });
    });
  }
  render() {
    return (this.state.course ? <EditModuleForm
      title={this.state.title}
      desc={this.state.desc}
      hours={this.state.hours}
      checkpoint={this.state.checkpoint}
      /> : null
    );
  }

}
EditModuleData.displayName = EditModuleData;
export default EditModuleData;
