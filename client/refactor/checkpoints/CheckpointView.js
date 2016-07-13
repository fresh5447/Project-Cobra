import React from 'react';
import ReactMarkdown from 'react-markdown';
import SubmissionData from '../submissions/SubmissionData';

const CheckpointView = (props) =>
<div>
  <div className="container">
    <div className="card markdown-card">
      <div className="card-block main-card-block ">
        <h2 className="card-title">{props.checkpoint.title}</h2>
        {/*<NavLink to={"/dashboard/" + props.checkpoint.title }><span className="back-link">Back to Module</span></NavLink>*/}
      </div>
      <div className="card-block">
        <div className="card card-block inner-checkpoint-cardblock">
          <h4 className="card-title">content</h4>
          <ReactMarkdown source={ props.checkpoint.content } />
        </div>
      </div>
      <div className="card-block">
        <div className="card card-block inner-checkpoint-cardblock">
          <h4 className="card-title">resources</h4>
          <p className="card-text">Gonna be some more resources here ya know son?</p>
        </div>
      </div>
      <div className="card-block">
        <div className="card card-block inner-checkpoint-cardblock">
          <h4 className="card-title">assignment</h4>
          <ReactMarkdown source={ props.checkpoint.assignment } />
        </div>
      </div>
    </div>
  </div>
  <SubmissionData user={props.user} cpId={props.checkpoint._id}/>
</div>;

CheckpointView.displayName = CheckpointView;
export default CheckpointView;
