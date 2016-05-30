import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      email: null,
      username: null,
      password: null,
    }
  },
  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  },
  handleUsernameChange(e) {
    this.setState({ username: e.target.value })
  },
  handlePasswordChange(e) {
  this.setState({ password: e.target.value })
  },
  submitUserToServer(e) {
    e.preventDefault();
    const User = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    $.ajax({
      url: '/signup',
      data: User,
      method: 'POST'
    }).done((data) => console.log(data) )
  },
  render() {
    return (
      <div className="">
        <div className="container">
          <h1>Signup</h1>
          <p>create a new account</p>
            <form onSubmit={this.submitUserToServer}>
              <fieldset className="form-group">
                <label>Username</label>
                <input onChange={this.handleUsernameChange} type="text" className="form-control" placeholder="Enter username"/>
              </fieldset>
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