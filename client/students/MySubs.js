// modules/NavLink.js
import React from 'react'

export default React.createClass({
  handleSubmit(e) {
    e.preventDefault()
    console.log("found the thing in the form")
    this.props.submitContent()
  },
  render() {
    console.log("FOUND SUBSS", this.props.subs)
    if(this.props.subs.length > 0){
      const subs = this.props.subs.map((item) => {
        return (
              <div className="card-block">
                <div className="card card-block inner-checkpoint-cardblock">
                  <h6 className="card-title pull-right">Approved/ Rejected</h6>
                  <p className="card-text">{ item.content }</p>
                </div>
              </div>
          )
      });
      return (
        <div className="card-block">
          <div className="card card-block inner-checkpoint-cardblock">
            <h4 className="card-title">My Submissions</h4>
            { subs }
          </div>
        </div>
        )
    } else {
      return (
        <div className="card-block">
          <div className="card card-block inner-checkpoint-cardblock">
            <h4 className="card-title">My Submissions</h4>

              <div className="card-block">
                <div className="card card-block inner-checkpoint-cardblock">
                  <h5 className="card-title">nothing submitted yet for this checkpoint</h5>
                </div>
              </div>

          </div>
        </div>
        )
    }
  }
})
