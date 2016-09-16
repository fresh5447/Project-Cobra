import React from 'react';
import ReactMarkdown from 'react-markdown';
import NavLink from '../../widgets/NavLink';

// TODO: Tried to remove the bind, and produced an infinite loop.

const UserSubmissionCard = (props) =>
        <div className="card markdown-card">
          <div className="card-block main-card-block">
            <h4 className="card-title">Checkpoint: { props.cpTitle }</h4>
            <span className={props.status === 'approved' ? 'approved' : 'pending'}>{ props.status }</span>
          </div>
          <div className="card-block">
            <ReactMarkdown source={ props.content } />
          </div>
        </div>;


export default UserSubmissionCard;
