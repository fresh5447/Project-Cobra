import React from 'react';
import NavLink from '../widgets/NavLink';
import AllResources from './AllResources';
import FavoriteResources from './FavoriteResources';
import PostResourceData from './PostResourceData';
import FilteredResources from './FilteredResources';

class ProfileData extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      resources: null,
      activeComp: 'all',
      favorites: null,
      activeFilter: null,
      categories: null
    };
    this.toggleResources = this.toggleResources.bind(this);
    this.deleteResource = this.deleteResource.bind(this);
    this.loadResources = this.loadResources.bind(this);
    this.loadFavorites = this.loadFavorites.bind(this);
    this.makeFave = this.makeFave.bind(this);
    this.triggerFilter = this.triggerFilter.bind(this);
  }

  componentWillMount() {
    this.loadResources();
    this.loadFavorites();
    this.loadCategories();
  }

  deleteResource(id) {
    $.ajax({
      url: `/api/v1/resources/id/${id}`,
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

  loadFavorites() {
    $.ajax({
      url: '/api/v1/resources/favorites',
      method: 'GET'
    }).done((data) => this.setState({ favorites: data }));
  }

  makeFave(id) {
    var d = { resource_id: id };
    $.ajax({
      url: '/api/v1/resources/favorites',
      method: 'POST',
      data: d
    }).done((s) => {
      this.context.sendNotification("resource favorited");
      this.loadFavorites();
    });
  }

  showComp() {
    if (this.state.resources && this.state.activeComp === 'all') {
      return <AllResources makeFave={this.makeFave} deleteResource={this.deleteResource} resources={this.state.resources} />;
    } else if (this.state.resources && this.state.activeComp === 'favs') {
      return <FavoriteResources resources={this.state.favorites} />;
    } else if (this.state.resources && this.state.activeComp === 'post') {
      return <PostResourceData toggleResources={this.toggleResources} loadResources={this.loadResources}/>;
    } else if (this.state.resources && this.state.activeComp === 'cats') {
      return <FilteredResources activeFilter={this.state.activeFilter} makeFave={this.makeFave} deleteResource={this.deleteResource} resources={this.state.resources} />;
    } else {
      return null;
    }
  }

  toggleResources(name) {
    if(name === 'all'){
      this.setState({ activeFilter: null })
    }
    this.setState({ activeComp: name });
  }

  loadCategories() {
    $.ajax({
      url: '/api/v1/cats',
      method: 'GET'
    }).done((data) => this.setState({ categories: data }));
  }

  triggerFilter(name) {
    console.log('triggered', name)
    this.setState({ activeComp: 'cats' });
    this.setState({ activeFilter: name })
  }

  render() {
    console.log(this.state.categories)
    const cats = this.state.categories ? this.state.categories.map((item) => {
      if(this.state.activeFilter === item.name) {
        return <li className="list-group-item hot-cat" onClick={this.triggerFilter.bind(this, item.name)}>{item.name}</li>
      } else {
        return <li className="list-group-item" onClick={this.triggerFilter.bind(this, item.name)}>{item.name}</li>
      }
    }) : null;
    return (
      <div>
      <div className="container tags-container">
         <h6>Categories</h6>
         <ul className="list-group">
          { cats }
         </ul>
      </div>
      <div className="container col-md-12 col-md-offset-1">

        <div className="row">
        <button
          onClick={this.toggleResources.bind(this,'all')}
          className="btn btn-primary  submit-btn res-btn"
        >
          <h6>All</h6>
        </button>
        <button
          onClick={this.toggleResources.bind(this,'favs')}
          className="btn btn-primary  submit-btn res-btn"
        >
          <h6>Favorites</h6>
        </button>
        <button
          onClick={this.toggleResources.bind(this,'post')}
          className="btn btn-primary  submit-btn res-btn"
        >
          <h6>Post</h6>
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
