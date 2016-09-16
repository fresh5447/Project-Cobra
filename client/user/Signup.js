import React from 'react';
import { browserHistory } from 'react-router';
import NavLink from '../widgets/NavLink';

class Signup extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.submitUserToServer = this.submitUserToServer.bind(this);

    this.state = {
      email: null,
      firstName: null,
      lastName: null,
      password: null
    };

  }

  handleEmailChange = (e) => this.setState({ email: e.target.value });

  handleFirstNameChange = (e) => this.setState({ firstName: e.target.value });

  handleLastNameChange = (e) => this.setState({ lastName: e.target.value });

  handlePasswordChange = (e) => this.setState({ password: e.target.value });

  submitUserToServer(e) {
    e.preventDefault();
    const User = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    };
    $.ajax({
      url: '/signup',
      data: User,
      method: 'POST'
    }).success((data) => {
      this.context.sendNotification(data.message);
      window.location = '/dashboard';
    })
      .error((data) => this.context.sendNotification(data.responseText));
  }

  render() {
    return (
      <div className="user-screen-container">
        <div className="container">
          <div className="row">
            <h3>CodeRange</h3>
              <NavLink className="btn btn-primary  register-btn pull-right" to="/login">login</NavLink>
          </div>
          <div className="col-xs-6 col-xs-offset-3">
            <h1>registration</h1>
            <p>pre-approved members only</p>
            <form onSubmit={this.submitUserToServer}>
              <fieldset className="form-group">
                <input onChange={this.handleFirstNameChange} type="text" className="form-control" placeholder="first"/>
              </fieldset>
              <fieldset className="form-group">
                <input onChange={this.handleLastNameChange} type="text" className="form-control" placeholder="last"/>
              </fieldset>
              <fieldset className="form-group">
                <input onChange={this.handleEmailChange} type="email" className="form-control" placeholder="email"/>
              </fieldset>
              <fieldset className="form-group">
                <input onChange={this.handlePasswordChange} type="password" className="form-control" id="" placeholder="password"/>
              </fieldset>
              <button type="submit" className="btn btn-primary btn-lg btn-block register-btn">Submit</button>
            </form>
          </div>

        </div>
      </div>

    );
  }
}


Signup.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired,
};

Signup.displayName = Signup;
export default Signup;
