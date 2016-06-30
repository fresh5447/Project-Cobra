import React from 'react';
import SubmissionView from './SubmissionView';

class SubmissionData extends React.Component {

  constructor(props, context) {
    super(props, context);

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
    return this.state.submissions ? <SubmissionView updateApproval={this.updateApproval} submissions={this.state.submissions}/> : null;
  }

}

SubmissionData.displayName = 'SubmissionData';

export default SubmissionData;
