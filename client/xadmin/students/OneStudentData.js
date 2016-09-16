import React from 'react';
import { browserHistory } from 'react-router';
import Loader from '../../widgets/Loader';
import NavLink from '../../widgets/NavLink';
import ViewStudentProfile from './ViewStudentProfile';
import EditStudentView from './EditStudentView';

class OneStudentData extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: null,
      email: null,
      firstName: null,
      lastName: null,
      linkedIn: null,
      twitterHandle: null,
      githubHandle: null,
      skype: null,
      bio: null,
      activeComp: null
    };
    this.changeActiveComp = this.changeActiveComp.bind(this);
  }

  componentWillMount(nextState, replace) {

    this.setState({ activeComp: 'show' })
    this.context.getUser((data) => {
      if (data.user === 'no user') {
        alert('you must be an admin to view this');
        return browserHistory.push('/login');
      } else {
        return this.loadUser();
      }
    });
  }

  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      linkedIn: this.state.linkedIn,
      twitterHandle: this.state.twitterHandle,
      githubHandle: this.state.githubHandle,
      skype: this.state.skype,
      bio: this.state.bio
    };
    $.ajax({
      url: '/editUser',
      method: 'PUT',
      data
    }).done((d) => {
      this.context.sendNotification("User Edited");
      const path = `/dashboard`
      browserHistory.push(path);
    });
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
      return (<EditStudentView user={this.state.user}
        email={this.state.user.local.email}
        firstName={this.state.user.local.firstName}
        lastName={this.state.user.local.lastName}
        linkedIn={this.state.user.local.linkedIn}
        twitterHandle={this.state.user.local.twitterHandle}
        githubHandle={this.state.user.local.githubHandle}
        skype={this.state.user.local.skype}
        bio={this.state.user.local.bio}
        onFieldChange={this.onFieldChange}
        handleSubmit={this.handleSubmit}
      />);
    } else {
      return <Loader />;
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
