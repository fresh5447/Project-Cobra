// modules/NavLink.js
import React from 'react'
import ReactMarkdown from 'react-markdown'

export default React.createClass({
  handleSubmit(e) {
    e.preventDefault()
    console.log("found the thing in the form")
    this.props.submitContent()
  },
  truthify(isIt) {
    console.log("FINDING VAL", isIt)
    if(isIt == true){
      return 'Approved'
    } else {
      return 'In Limbo'
    }
  },
  render() {
    if(this.props.subs.length > 0){
      const subs = this.props.subs.map((item) => {
        const ap = item.approved
        return (
              <div key={item._id} className="card-block">
                <div className="card card-block inner-checkpoint-cardblock">
                  <h6 className="card-title pull-right"><span className="a-status"> status </span>{this.truthify(ap)}</h6>
                  <ReactMarkdown source={item.content} />
                </div>
              </div>
          )
      }).reverse();
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
