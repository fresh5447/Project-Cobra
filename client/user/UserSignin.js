import React from 'react';
import { browserHistory } from 'react-router';
import NavLink from '../widgets/NavLink';

class UserSignin extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.submitUserToServer = this.submitUserToServer.bind(this);

    this.state = {
      email: null,
      password: null
    };
  }

  handleEmailChange = (e) => this.setState({ email: e.target.value });

  handlePasswordChange = (e) => this.setState({ password: e.target.value });

  submitUserToServer(e) {
    e.preventDefault();
    const User = {
      email: this.state.email,
      password: this.state.password
    };
    $.ajax({
      url: '/login',
      data: User,
      method: 'POST'
    }).success((data) => {
      this.context.sendNotification(data.message);
      console.log(data);
      if(data.user.local.role == "student") {
        window.location = '/dashboard';
      } else {
        window.location = '/admin/publisher';
      }

    })
      .error((data) => this.context.sendNotification(data.responseText));
  }

  render() {
    // hack: used br for line break. bu bueno. You have such bad habits douglas.
    return (
      <div className="user-screen-container">
        <div className="container">
          <div className="row">
            <h3>CodeRange</h3>
            <NavLink className="btn btn-primary  register-btn pull-right" to="/signup">register</NavLink>

          </div>
          <div className="col-xs-6 col-xs-offset-3">
            <h1>student login</h1>
            <form onSubmit={this.submitUserToServer}>
              <fieldset className="form-group">
                <input onChange={this.handleEmailChange} type="email" className="form-control" placeholder="email"/>
              </fieldset>
              <fieldset className="form-group">
                <input onChange={this.handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
              </fieldset>
              <button type="submit" className="btn btn-primary btn-lg btn-block register-btn">Submit</button>
              <NavLink className="nav-link" to="/forgot"><p>forgot password?</p></NavLink>
            </form>
          </div>

        </div>
      </div>

    );
  }
}

UserSignin.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};

UserSignin.displayName = UserSignin;

export default UserSignin;
