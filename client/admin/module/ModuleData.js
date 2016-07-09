import React from 'react';
import Module from './Module';
import EditModuleData from './EditModuleData';
import NewCheckpointData from './NewCheckpointData';

class ModulesData extends React.Component {
  constructor(props, context) {

    super(props, context);

    this.toggleModule = this.toggleModule.bind(this);

    this.state = {
      module: null,
      activeComp: 'viewModule'
    };

  }

  componentWillMount() {
    this.loadModule();
  }

  toggleModule = (name) => {
    console.log('trying to toggle', name);
    this.setState({ activeComp: name });
  }

  showComp() {
    if (this.state.activeComp === 'viewModule' && this.state.module) {
      return <Module module={this.state.module} />;
    } else if (this.state.activeComp === 'editModule' && this.state.module) {
      return <EditModuleData module={this.state.module} />;
    } else if (this.state.activeComp === 'newCheckpoint' && this.state.module) {
      return <NewCheckpointData module={this.state.module} />;
    } else {
      return <div> <h1> Loading </h1> </div>;
    }
  }

  loadModule() {
    $.ajax({
      url: `/api/v1/modules/byId/${this.props.params.id}`,
      method: 'GET',
    }).done((data) => {
      this.setState({ module: data });
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleModule.bind(this, 'editModule')}>Edit Module</button>
        <button onClick={this.toggleModule.bind(this, 'newCheckpoint')}>New Checkpoint</button>
        {this.showComp()}
      </div>
    )
  }
}

ModulesData.displayName = 'ModulesData';

export default ModulesData;
