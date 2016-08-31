import React from 'react';
// import PostModuleData from '../modules/PostModuleData';
import ViewModule from './ViewModule';
import NavLink from '../../widgets/NavLink';

class ModuleData extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      module: null
    };
  }

  componentWillMount() {
    this.loadModule(this.props.params.moduleId);
  }

  componentWillReceiveProps() {
    this.loadModule(this.props.params.moduleId);
  }

  loadModule(id) {
    $.ajax({
      url: '/api/v1/modules/byId/' + id,
      method: 'GET',
    }).done((data) => {
      console.log(data);
      this.setState({ module: data });
    });
  }
  render() {
    return this.state.module ? <ViewModule module={this.state.module} /> : null;
  }

}
ModuleData.displayName = ModuleData;
export default ModuleData;
