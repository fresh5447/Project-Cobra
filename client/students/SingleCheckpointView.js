import React from 'react'
import NavLink from '../modules/NavLink'
import ReactMarkdown from 'react-markdown'

export default React.createClass({
  render() {
    let checkpoint = this.props.checkpoint;
    window.checkpoint = this.props.checkpoint;
    return (
      <div>
        <div className="container">
          <div className="card markdown-card">
            <div className="card-block main-card-block ">
              <h2 className="card-title">{checkpoint.project.title}</h2>
              <NavLink to={"/dashboard/" + checkpoint.project.title }><span className="back-link">Back to Project</span></NavLink>
            </div>
            <div className="card-block">
              <div className="card card-block inner-checkpoint-cardblock">
                <h4 className="card-title">{checkpoint.title}</h4>
                <p className="card-text"><ReactMarkdown source={ checkpoint.content } /></p>
              </div>
            </div>
            <div className="card-block">
              <div className="card card-block inner-checkpoint-cardblock">
                <h4 className="card-title">Additional Resources</h4>
                <p className="card-text">Gonna be some more resources here ya know son?</p>
              </div>
            </div>
            <div className="card-block">
              <div className="card card-block inner-checkpoint-cardblock">
                <h4 className="card-title">Assignment</h4>
                <p className="card-text"><ReactMarkdown source={ checkpoint.assignment } /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
})