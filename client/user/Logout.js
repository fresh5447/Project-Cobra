import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="">
        <div className="container">
          <h1>Signup</h1>
          <p>create a new account</p>
            <form>
              <fieldset className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email"/>
                <small className="text-muted">Well never share your email with anyone else.</small>
              </fieldset>
              <fieldset className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
              </fieldset>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
      </div>

      )
  }
})