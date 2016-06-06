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
              <button type="button" className="btn btn-primary my-primary-btn" data-toggle="modal" data-target="#myModal">
                View Checkpoint
              </button>
              <button onClick={this.handleApproval.bind(null, this.props.id, true)} className="btn btn-primary my-primary-btn">Approve</button>            
            </div>




          { /*  MODAL CODE  */ }

          <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 className="modal-title" id="myModalLabel">{ this.props.cpTitle }</h4>
                </div>
                <div className="modal-body">
                  <ReactMarkdown source={this.props.assignment }/>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary my-primary-btn" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          </div>
      )
  }
})
