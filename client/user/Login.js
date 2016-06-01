import React from 'react'
import { browserHistory } from 'react-router'

export default React.createClass({
  getInitialState() {
    return {
      email: null,
      password: null,
    }
  },
  contextTypes: {
    sendNotification: React.PropTypes.func.isRequired,
  },
  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  },
  handlePasswordChange(e) {
  this.setState({ password: e.target.value })
  },
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
      const path = `/dashboard`
      browserHistory.push(path)
    })
      .error((data) => this.context.sendNotification(data.responseText))
  },
  render() {
    return (
      <div className="">
        <div className="container">
          <h1>Login</h1>
            <form onSubmit={this.submitUserToServer}>
              <fieldset className="form-group">
                <label>Email address</label>
                <input onChange={this.handleEmailChange} type="email" className="form-control" placeholder="Enter email"/>
                <small className="text-muted">Well never share your email with anyone else.</small>
              </fieldset>
              <fieldset className="form-group">
                <label>Password</label>
                <input onChange={this.handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
              </fieldset>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
      </div>

      )
  }
})