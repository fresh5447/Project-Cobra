// modules/NavLink.js
import React from 'react'

export default React.createClass({
  handleSubmit(e) {
    e.preventDefault()
    console.log("found the thing in the form")
    this.props.submitContent()
  },
  render() {
    return (
      <div className="card-block">
        <div className="card card-block inner-checkpoint-cardblock">
          <h4 className="card-title">My Submissions</h4>

            <div className="card-block">
              <div className="card card-block inner-checkpoint-cardblock">
                <h4 className="card-title">Submission One</h4>
                <p className="card-text">Status</p>
              </div>
            </div>

        </div>
      </div>
      )
  }
})
