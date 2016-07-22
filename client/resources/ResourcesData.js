import React from 'react';
import NavLink from '../widgets/NavLink';
import AllResources from './AllResources';
import FavoriteResources from './FavoriteResources';
import PostResourceData from './PostResourceData';

class ProfileData extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      resources: null,
      activeComp: 'all'
    };
    this.toggleResources = this.toggleResources.bind(this);
    this.deleteResource = this.deleteResource.bind(this);
    this.loadResources = this.loadResources.bind(this);
  }

  componentWillMount() {
    this.loadResources();
  }

  deleteResource(id) {
    $.ajax({
      url: `/api/v1/resources/${id}`,
      method: 'DELETE'
    }).done((d) => {
      console.log(d, 'deleted');
      this.context.sendNotification('Resource Deleted');
      this.loadResources();
    })
  }

  loadResources() {
    $.ajax({
      url: '/api/v1/resources',
      method: 'GET'
    }).done((data) => this.setState({ resources: data }));
  }

  showComp() {
    if (this.state.resources && this.state.activeComp === 'all') {
      return <AllResources deleteResource={this.deleteResource} resources={this.state.resources} />;
    } else if (this.state.resources && this.state.activeComp === 'favs') {
      return <FavoriteResources resources={this.state.resources} />;
    } else if (this.state.resources && this.state.activeComp === 'post') {
      return <PostResourceData toggleResources={this.toggleResources} loadResources={this.loadResources}/>;
    } else {
      return null;
    }
  }

  toggleResources(name) {
    this.setState({ activeComp: name });
  }

  render() {
    return (
      <div>
      <div className="tags-container">
         <h6>Categories</h6>
         <ul className="list-group">
           <li className="list-group-item"><NavLink className="nav-link" to="/resources/categories/html">html</NavLink></li>
           <li className="list-group-item"><NavLink className="nav-link" to="/resources/categories/css">css</NavLink></li>
           <li className="list-group-item"><NavLink className="nav-link" to="/resources/categories/html">javascript</NavLink></li>
           <li className="list-group-item"><NavLink className="nav-link" to="/resources/categories/node">node</NavLink></li>
           <li className="list-group-item"><NavLink className="nav-link" to="/resources/categories/dev-env">dev env</NavLink></li>
         </ul>
      </div>
      <div className="container col-md-12 col-md-offset-1">

        <div className="row">
        <button
          onClick={this.toggleResources.bind(this,'all')}
          className="btn btn-primary  submit-btn"
        >
          <h3>All</h3>
        </button>
        <button
          onClick={this.toggleResources.bind(this,'favs')}
          className="btn btn-primary  submit-btn"
        >
          <h3>Favorites</h3>
        </button>
        <button
          onClick={this.toggleResources.bind(this,'post')}
          className="btn btn-primary  submit-btn"
        >
          <h3>Post</h3>
        </button>

        </div>
        <div className="row">
          { this.showComp() }
        </div>

      </div>
      </div>
    );
  }
}

ProfileData.displayName = ProfileData;

ProfileData.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};

export default ProfileData;


//
// <ul className="nav navbar-nav">
//   <li className="nav-item">
//     <NavLink className="nav-link" to="/resources/categories/javascript">javascript</NavLink>
//   </li>
//   <li className="nav-item">
//     <NavLink className="nav-link" to="/resources/categories/html" className="nav-link">
//       html
//     </NavLink>
//   </li>
//   <li className="nav-item">
//     <NavLink className="nav-link" to="/resources/categories/css">css</NavLink>
//   </li>
// </ul>
