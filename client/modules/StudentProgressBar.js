import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="container dashboard-progress-container">
        <div className="row">
          <div className="col-sm-4">
            <h4> Start Date</h4>
            <h4> End Date </h4>
          </div>
          <div className="col-sm-4">
            <h4> 45% Time Left </h4>
          </div>
          <div className="col-sm-4">
            <h4> Currently on Project 3 </h4>
            <h4> 50% coursework completed </h4>
          </div>
        </div>
      </div>
      )
  }
})
