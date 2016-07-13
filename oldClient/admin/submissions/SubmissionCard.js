import React from 'react';
import ReactMarkdown from 'react-markdown';
import NavLink from '../../widgets/NavLink';

const SubmissionCard = (props) => {
  return (
        <div className="card markdown-card">
          <div className="card-block main-card-block">
            <h4 className="card-title">User: { props.username } CP: { props.cpTitle }</h4>
          </div>
          <div className="card-block">
            <ReactMarkdown source={ props.content } />
            <button type="button" className="btn btn-primary my-primary-btn" data-toggle="modal" data-target="#myModal">
              View Checkpoint
            </button>
            <button onClick={props.updateApproval.bind(null, props.id, true)} className="btn btn-primary my-primary-btn">Approve</button>
          </div>
        </div>

    );
}

export default SubmissionCard;
