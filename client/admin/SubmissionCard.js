import React from 'react';
import ReactMarkdown from 'react-markdown'
import NavLink from '../modules/NavLink'

NavLink.displayName = 'NavLink'


export default React.createClass({
  handleApproval(one, two){
    this.props.updateApproval(one, two)
  },
  render() {
    console.log("projects made it", this.props.projects);
    return (
          <div className="card markdown-card">
            <div className="card-block main-card-block">
              <h4 className="card-title">User: { this.props.username } CP: { this.props.cpTitle }</h4>
            </div>
            <div className="card-block">
              <ReactMarkdown source={ this.props.content }/>
              <NavLink to={'/projects/' + this.props.cpTitle }><button className="btn btn-primary my-primary-btn">View Checkpoint</button></NavLink>
              <button onClick={this.handleApproval.bind(null, this.props.id, true)} className="btn btn-primary my-primary-btn">Approve</button>
              <button onClick={this.handleApproval.bind(null, this.props.id, false)} className="btn btn-primary my-primary-btn">Reject</button>
            </div>
          </div>
      )
  }
})
