import React from 'react';
import UserSubmissionCard from './UserSubmissionCard';

const UserSubmissionsList = (props) => {
  const all = props.submissions.map((item) =>
    <UserSubmissionCard key={item._id} assignment={item.checkpoint.assignment}
      id={item._id} cpTitle={item.checkpoint.title} content={item.content}
      cpAssignment={item.checkpoint.assignment}
      status={item.approved ? 'approved' : 'pending'}
    />
  );
  return (
    <div>
    <h4>All My Submissions</h4>
      { all }
    </div>
  );
};

UserSubmissionsList.propTypes = {
  submissions: React.PropTypes.array.isRequired
};

UserSubmissionsList.displayName = 'UserSubmissionsList';
export default UserSubmissionsList;
