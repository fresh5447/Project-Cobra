import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="container dashboard-progress-container">
        <div className="row">
          <div className="col-md-4">
            <h5>4/10/16 - 2/10/16 </h5>
          </div>
          <div className="col-md-4">
            <h5> 45% Time Left </h5>
          </div>
          <div className="col-md-4">
            <h5> 50% coursework completed </h5>
          </div>
        </div>
      </div>
      )
  }
})
