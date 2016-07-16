import React from 'react';
import ViewSubmissions from './ViewSubmissions';
import PostSubmissionData from './PostSubmissionData';

class SubmissionData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      submissions: null
    };

  }

  componentWillMount() {
    this.loadSubsFromServer();
  }

  loadSubsFromServer() {
    $.ajax({
      url: `/api/v1/submissions/student-submissions/${this.props.cpId}`,
      method: 'GET'
    }).done((data) => this.setState({ submissions: data }));
  }

  render() {
    return (
      <div>
        <ul className="nav nav-pills" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#submissions" role="tab">Submissions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#new" role="tab">New Submission</a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active" id="submissions" role="tabpanel">
            <ViewSubmissions subs={this.state.submissions}/>
          </div>
          <div className="tab-pane" id="new" role="tabpanel">
            <PostSubmissionData cpId={this.props.cpId}/>
          </div>
        </div>
      </div>
    );
  }
}

SubmissionData.displayName = SubmissionData;
export default SubmissionData;
