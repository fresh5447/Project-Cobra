import React from 'react';
import AllSubmissionsList from './AllSubmissionsList';

class AllSubmissionsData extends React.Component {

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
      url: '/api/v1/submissions',
      method: 'GET',
    }).done((data) => {
      this.setState({ submissions: data });
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
    return this.state.submissions ? <AllSubmissionsList
      updateApproval={this.updateApproval} submissions={this.state.submissions}
    /> : null;
  }

}

AllSubmissionsData.displayName = 'AllSubmissionsData';
AllSubmissionsData.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired,
};


export default AllSubmissionsData;
