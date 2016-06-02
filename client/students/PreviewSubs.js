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
                <p className="card-text"><ReactMarkdown source={this.props.content} /></p>
              </div>
            </div>

        </div>
      </div>
      )
  }
})
