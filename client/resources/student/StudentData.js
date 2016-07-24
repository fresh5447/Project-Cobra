import React from 'react';
import AllResources from './AllResources';

class StudentData extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      resources: null,
    };
    this.toggleFav = this.toggleFav.bind(this);
  }

  componentDidMount() {
    this.loadStudentResources();
  }

  toggleFav = (id, action) => {
    $.ajax({
      url: `/api/v1/resources/student/favorite/${id}/${action}`,
      method: 'PUT'
    }).done((d) => this.loadStudentResources())
  }

  loadStudentResources = () => $.get('/api/v1/resources/student',
    (data) => { this.setState({ resources: data })});

  render() {
    return (
      <div className="container student-page-container">
        <div className="row resources-nav">
          <ul className="">
            <li>All</li>
            <li>Favorites</li>
            <li>Post</li>
          </ul>
        </div>
        <div className="col-xs-2">
          <div>
            <h6>Categories</h6>
            <ul>
              <li> One </li>
              <li> Two </li>
              <li> Three </li>
              <li> One </li>
              <li> Two </li>
              <li> Three </li>
              <li> One </li>
              <li> Two </li>
              <li> Three </li>
              <li> One </li>
              <li> Two </li>
              <li> Three </li>
            </ul>
          </div>
        </div>
        <div className="col-xs-10">
          { this.state.resources ? <AllResources
            toggleFav={this.toggleFav}
            resources={this.state.resources} /> : null }
        </div>
      </div>
    );
  }

}

StudentData.displayName = StudentData;

// StudentData.propTypes = {
//   resources: React.PropTypes.array.isRequired
// };

export default StudentData;
