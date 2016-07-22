import React from 'react';
import UserSubmissionsList from './UserSubmissionsList';

class UserSubmissionsData extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.updateApproval = this.updateApproval.bind(this);

    this.state = {
      submissions: null
    };

  }

  componentWillMount() {
    this.loadSubmissions();
  }

  loadSubmissions() {
    $.ajax({
      url: '/api/v1/submissions/all-student-submissions',
      method: 'GET',
    }).done((data) => {
      this.setState({ submissions: data });
      console.log(this.state.submissions);
    });
  }

  updateApproval(id, truthyness) {
    const data = { approved: truthyness };
    $.ajax({
      url: `/api/v1/submissions/edit-submission/${id}`,
      method: 'PUT',
      data
    }).done((d) => {
      this.context.sendNotification('submission approved');
      this.loadSubmissions();
    });
  }

  render() {
    return this.state.submissions ? <UserSubmissionsList
      submissions={this.state.submissions}
    /> : null;
  }

}

UserSubmissionsData.displayName = 'UserSubmissionsData';
UserSubmissionsData.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired,
};


export default UserSubmissionsData;
