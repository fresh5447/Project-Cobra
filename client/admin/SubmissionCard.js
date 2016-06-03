import React from 'react';
import ReactMarkdown from 'react-markdown'
import NavLink from '../modules/NavLink'

export default React.createClass({
  render() {
    console.log("projects made it", this.props.projects);
    return (
          <div className="card markdown-card">
            <div className="card-block main-card-block">
              <h4 className="card-title">User: { this.props.username } CP: { this.props.cpTitle }</h4>
            </div>
            <div className="card-block">
              <p className="card-text"> <ReactMarkdown source={ this.props.content }/> </p>
              <button className="btn btn-primary my-primary-btn"><NavLink to={'/projects/' + this.props.cpTitle }>View Checkpoint</NavLink></button>
              <button className="btn btn-primary my-primary-btn">Approve</button>
              <button className="btn btn-primary my-primary-btn">Reject</button>
            </div>
          </div>
      )
  }
})
