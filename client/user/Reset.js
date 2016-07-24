import React from 'react';
import { browserHistory } from 'react-router';

class Reset extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.submitUserToServer = this.submitUserToServer.bind(this);

    this.state = {
      password: null,
      confirm: null,
    };

  }

  handlePasswordChange = (e) => this.setState({ password: e.target.value });
  handleConfirmChange = (e) => this.setState({ confirm: e.target.value });

  submitUserToServer(e) {
    e.preventDefault();
    const User = {
      password: this.state.password,
      confirm: this.state.confirm,
    };
    $.ajax({
      url: '/reset/' + this.props.params.reset_token,
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
          <h1>Reset Password</h1>
            <form onSubmit={this.submitUserToServer}>
              <fieldset className="form-group">
                <label>new password</label>
                <input onChange={this.handlePasswordChange} type="password" className="form-control" placeholder="password"/>
              </fieldset>
              <fieldset className="form-group">
                <label>confirm</label>
                <input onChange={this.handleConfirmChange} type="password" className="form-control" placeholder="re-enter"/>
              </fieldset>
              <button type="submit" className="btn btn-primary  submit-btn">Update Password</button>
            </form>
        </div>
      </div>

    );
  }
}


Reset.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired,
};

Reset.displayName = Reset;
export default Reset;
