import React from 'react';
import ModuleView from './ModuleView';
import EditModuleData from './EditModuleData';
import NavLink from '../../.././widgets/NavLink';

class ActiveModuleContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      module: null,
      modId: null,
      activeComp: 'view'
    };
    this.switchComp = this.switchComp.bind(this);
  }

  componentWillMount() {
    this.loadModule(this.props.params.module_id);
  }

  componentWillReceiveProps() {
    this.loadModule(this.props.params.module_id);
  }

  componentWillUnmount() {
    this.loadModule(this.props.params.module_id);
  }
  switchComp(newComp, another) {
    this.setState({ activeComp: newComp })
    if(another){
      this.setState({ modId: another })
    }
  }


  loadModule(id) {
    console.log("trying to get module with id", id)
    $.ajax({
      url: '/api/v1/modules/byId/' + id,
      method: 'GET',
    }).done((data) => {
      this.setState({ module: data });
      console.log('FOUND SPECIFC MODULE', data)
    });
  }
  showComp() {
    if(this.state.module && this.state.activeComp === 'view') {
      return <ModuleView switchComp={this.switchComp} module={this.state.module} />
    } else if (this.state.module && this.state.activeComp === 'edit') {
      return <EditModuleData modId={this.state.modId} module={this.state.module} />
    } else {
      return null
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          {this.showComp()}
        </div>
      </div>
    )
  }

}
ActiveModuleContainer.displayName = ActiveModuleContainer;
export default ActiveModuleContainer;
