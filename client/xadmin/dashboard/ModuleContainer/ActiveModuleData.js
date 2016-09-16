import React from 'react';
import ModuleView from './ModuleView';
import EditModuleData from './EditModuleData';
import NavLink from '../../.././widgets/NavLink';
import Loader from '../../.././widgets/Loader';
import { browserHistory } from 'react-router';

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



  componentWillMount(nextState, replace) {
    this.context.getUser((data) => {
      if (data.user === 'no user') {
        alert('you must be an admin to view this');
        return browserHistory.push('/login');
      } else {
        return this.loadModule(this.props.params.course_id);
      }
    });
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
      return <Loader />
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
ActiveModuleContainer.displayName = 'ActiveModuleContainer';

ActiveModuleContainer.contextTypes = {
  getUser: React.PropTypes.func.isRequired
};
export default ActiveModuleContainer;
