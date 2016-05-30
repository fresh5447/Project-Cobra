import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
        <img src="./images/main-logo.gif" className="img-responsive" alt="Image"/>
          <p>Learning Management Platform</p>
          <div className="row">
            <p>
              <a className="btn btn-primary btn-lg dash-btn">Signup</a>
              <a className="btn btn-primary btn-lg dash-btn">Login</a>
            </p>
          </div>
        </div>
      </div>
      )
  }
})
