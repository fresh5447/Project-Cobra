import React from 'react';
import SubmissionCard from './SubmissionCard';

const SubmissionView = (props) => {
  const subs = props.submissions.map((item) => {
    return <SubmissionCard key={item._id} assignment={item.checkpoint.assignment}  updateApproval={props.updateApproval} id={item._id} username={item.user.local.username} cpTitle={item.checkpoint.title} content={item.content} cpAssignment={item.checkpoint.assignment} />
  });
  return (
    <div>
      { subs }
    </div>
  );
};

SubmissionView.propTypes = {
  submissions: React.PropTypes.array.isRequired
};

SubmissionView.displayName = 'SubmissionView';
export default SubmissionView;
