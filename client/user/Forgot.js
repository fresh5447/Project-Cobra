import React from 'react';
import { browserHistory } from 'react-router';

class Forgot extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.submitUserToServer = this.submitUserToServer.bind(this);

    this.state = {
      email: null,
    };

  }

  handleEmailChange = (e) => this.setState({ email: e.target.value });

  submitUserToServer(e) {
    e.preventDefault();
    const User = {
      email: this.state.email,
    };
    $.ajax({
      url: '/forgot',
      data: User,
      method: 'POST'
    }).success((d) => {
      console.log(d)
      // this.context.sendNotification(data.message);
    })
      .error((data) => console.log(data));
  }

  render() {
    return (
      <div className="container">
        <div className="user-screen-container">
          <h3>Forgot your password?</h3>
            <form onSubmit={this.submitUserToServer}>
              <fieldset className="form-group">
                <input onChange={this.handleEmailChange} type="email" className="form-control" placeholder="enter email address"/>
              </fieldset>
              <button type="submit" className="btn btn-primary  submit-btn">Reset Password</button>
            </form>
        </div>
      </div>

    );
  }
}


Forgot.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired,
};

Forgot.displayName = Forgot;
export default Forgot;
