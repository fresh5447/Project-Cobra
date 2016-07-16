import React from 'react';
import ViewSubmissions from './ViewSubmissions';

class ProfileSubmissionsData extends React.Component {
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
      url: '/api/v1/submissions/all-student-submissions',
      method: 'GET'
    }).done((data) => this.setState({ submissions: data }));
  }

  render() {
    return (
      <div>
        <div className="tab-content">
          <div className="tab-pane active" id="submissions" role="tabpanel">
            <ViewSubmissions subs={this.state.submissions}/>
          </div>
        </div>
      </div>
    );
  }
}


ProfileSubmissionsData.displayName = ProfileSubmissionsData;
export default ProfileSubmissionsData;
