import React from 'react';
import AllSubmissionCard from './AllSubmissionCard';

const AllSubmissionsList = (props) => {
  const unApproved = props.submissions.filter((item) =>
    !item.approved
  ).map((item) =>
    <AllSubmissionCard key={item._id} assignment={item.checkpoint.assignment}
      updateApproval={props.updateApproval}
      id={item._id} username={item.user.local.username}
      cpTitle={item.checkpoint.title} content={item.content}
      cpAssignment={item.checkpoint.assignment}
    />
  );
  return (
    <div>
      { unApproved }
    </div>
  );
};

AllSubmissionsList.propTypes = {
  submissions: React.PropTypes.array.isRequired
};

AllSubmissionsList.displayName = 'AllSubmissionsList';
export default AllSubmissionsList;
