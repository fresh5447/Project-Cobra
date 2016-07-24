import React from 'react';

class AdminData extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      resources: null,
    };
  }

  componentDidMount() {
    this.loadResources();
  }

  loadResources = () => $.get('/api/v1/resources', (data) => this.setState({ resources: data }));

  render() {
    return (
      <div className="container">
        <div className="row">
          <ul>
            <li>All</li>
            <li>Favorites</li>
            <li>Post</li>
          </ul>
        </div>
        <div className="col-xs-4">
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
        <div className="col-xs-8">
          {/*<AllResources resources={this.state.studentResources} />*/}
        </div>
      </div>
    )
  }

}

AdminData.displayName = AdminData;

AdminData.propTypes = {
  resources: React.PropTypes.array.isRequired
};

export default AdminData;
