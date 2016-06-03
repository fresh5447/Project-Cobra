// modules/NavLink.js
import React from 'react'
import ReactMarkdown from 'react-markdown'

export default React.createClass({
  render() {
    return (
      <div className="card-block">
        <div className="card card-block inner-checkpoint-cardblock">
          <h4 className="card-title">Preview Submissions</h4>

            <div className="card-block">
              <div className="card card-block inner-checkpoint-cardblock">
                <h4 className="card-title">Your Markdown</h4>
                <ReactMarkdown source={this.props.content ? this.props.content : "Nothing to preview"} />
              </div>
            </div>

        </div>
      </div>
      )
  }
})
