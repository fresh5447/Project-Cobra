import React from 'react';
import NavLink from '../widgets/NavLink';
import AdminNav from './AdminNav';
import GuestNav from './GuestNav';
import StudentNav from './StudentNav';

class NavBar extends React.Component {

  constructor(props, context) {

    super(props, context);

    this.state = {
      user: null
    };

  }

  componentWillMount() {
    this.context.getUser((data) => this.setState({ user: data }));
  }

  showCorrectNav() {
    if (this.state.user && this.state.user.local && this.state.user.local.role){
      if (this.state.user.local.role === 'admin') {
        return <AdminNav />
      } else if (this.state.user.local.role === 'student') {
        return <StudentNav />
      } else {
         return <GuestNav />
      }
    } else {
      return <GuestNav />;
    }
  }

  render() {
    return (<div>
      { this.showCorrectNav() }
      { this.props.children }
    </div>)
  }
}

NavBar.contextTypes = {
  getUser: React.PropTypes.func.isRequired
};

NavBar.displayName = NavBar;

export default NavBar;
