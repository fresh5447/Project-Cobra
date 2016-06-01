import React from 'react'
import NavLink from '../modules/NavLink'
import ReactMarkdown from 'react-markdown'

export default React.createClass({
  render() {
    let checkpoint = this.props.checkpoint;

    return (
      <div>
        <div className="container">
          <div className="card markdown-card">
            <div className="card-block main-card-block">
              <h2 className="card-title">{ checkpoint.title }</h2>
              <h6 className="card-subtitle text-muted">{ checkpoint.desc }</h6>
            </div>
            <div className="card-block">
              <div className="card card-block">
                <h3 className="card-title"></h3>
                <p className="card-text"><ReactMarkdown source={ checkpoint.content } /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
})