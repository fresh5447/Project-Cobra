import React from 'react';
import NavLink from '../../widgets/NavLink';
import ViewStudentProfile from './ViewStudentProfile';
import EditStudentView from './EditStudentView';

class OneStudentData extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: null,
      activeComp: null
    };
    this.changeActiveComp = this.changeActiveComp.bind(this);
  }
  componentWillMount() {
    this.loadUser();
    this.setState({ activeComp: 'show' })
  }


  loadUser() {
    $.ajax({
      url: `/editStudent/${this.props.params.student_id}`,
      method:  'GET'
    }).done((data) => this.setState({user: data}))
  }

  changeActiveComp(name) {
    this.setState({ activeComp: name });
  }

  showComp() {
    if (this.state.activeComp === 'show' && this.state.user) {
      return <ViewStudentProfile user={this.state.user} changeActiveComp={this.changeActiveComp} />;
    } else if (this.state.activeComp === 'edit' && this.state.user) {
      return (<EditStudentView onFieldChange={(...args) => this.onFieldChange(...args)}
        user={this.state.user}
        handleSubmit={this.handleSubmit}
      />);
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        {this.showComp()}
      </div>
    );
  }
}

OneStudentData.displayName = OneStudentData;
OneStudentData.contextTypes = {
  getUser: React.PropTypes.func.isRequired,
  sendNotification: React.PropTypes.func.isRequired,
};
export default OneStudentData;
