import React from 'react';
import ReactMarkdown from 'react-markdown';
import NavLink from '../../widgets/NavLink';
import SubmissionData from '../submissions/SubmissionData';

const CheckpointView = (props) =>
<div>
  <div className="container">
    <div className="card profile-card">
      <div className="card-block lg-card-block">
        <h4 className="card-title">{props.checkpoint.title}</h4>
      </div>
      <div className="card-block">
        <div className="card card-block inner-checkpoint-cardblock">
          <ReactMarkdown source={ props.checkpoint.content } />
        </div>
      </div>
    </div>

    <div className="card profile-card">
      <div className="card-block lg-card-block">
        <h4 className="card-title">Assignment</h4>
      </div>
      <div className="card-block">
        <div className="card card-block inner-checkpoint-cardblock">
          <ReactMarkdown source={ props.checkpoint.assignment } />
        </div>
      </div>
    </div>

    <div className="card profile-card">
      <div className="card-block lg-card-block">
        <h4 className="card-title">Submission</h4>
      </div>
      <div className="card-block">
        <div className="card card-block inner-checkpoint-cardblock">
          <SubmissionData cpId={props.checkpoint._id} />
        </div>
      </div>
    </div>

  </div>
</div>;

CheckpointView.displayName = CheckpointView;
export default CheckpointView;
