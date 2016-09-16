import React from 'react';
import AllResources from './AllResources';
import PostData from './PostResourceData';
import Categories from './Categories';
import ViewResource from './ViewResource';

class ResourcesData extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      resources: null,
      activeComp: 'all',
      catFilter: null,
      resource: null,
      adminResources: null,
      categories: null
    };
    this.setOneResource = this.setOneResource.bind(this);
    this.deleteResource = this.deleteResource.bind(this);
    this.setCagegoryFilter = this.setCagegoryFilter.bind(this);
    this.toggleComp = this.toggleComp.bind(this);

  }

  componentDidMount() {
    this.loadResources();
    this.loadCategories();
  }
  setCagegoryFilter(name) {
    this.setState({ catFilter: name, activeComp: 'categories' });
  }
  setOneResource(id) {
    $.ajax({
      url: `/api/v1/resources/id/${id}`,
      method: 'GET'
    }).done((data) => this.setState({ resource: data, activeComp: 'viewOne' }));
  }
  loadCategories() {
    $.ajax({
      url: '/api/v1/cats',
      method: 'GET'
    }).done((data) => this.setState({ categories: data }));
  }

  toggleComp = (name) => this.setState({ activeComp: name, catFilter: null });

  loadResources = () => $.get('/api/v1/resources',
    (data) => {
      this.setState({ resources: data });
    });

  deleteResource(id) {
    if (confirm('must you deletet')) {
      $.ajax({
        url: `/api/v1/resources/id/${id}`,
        method: 'DELETE'
      }).done((d) => {
        console.log(d, 'deleted');
        this.context.sendNotification('Resource Deleted');
        this.loadResources();
      });
    }
  }



  showComponent() {
    if (this.state.resources && this.state.activeComp === 'all') {

      return (<AllResources deleteResource={this.deleteResource}
        setOneResource={this.setOneResource} toggleComp={this.toggleComp}
        resources={this.state.resources}
      />);

    } else if (this.state.resources && this.state.activeComp === 'post') {

      return (<PostData loadStudentResources={this.loadResources}
        toggleComp={this.toggleComp}
      />);

    } else if (this.state.resources &&
      this.state.activeComp === 'categories' && this.state.catFilter) {
      return (<Categories setOneResource={this.setOneResource}
        resources={this.state.resources} catFilter={this.state.catFilter}
      />);

    } else if (this.state.resource &&
       this.state.activeComp === 'viewOne') {
      return (<ViewResource resource={this.state.resource}
        catFilter={this.state.catFilter}
      />);

    } else {
      return null;
    }
  }

  render() {
    const cats = this.state.categories ? this.state.categories.map((item) =>
      <li key={item._id} className={this.state.catFilter === item.name ? 'activeResLink' : null}
      onClick={this.setCagegoryFilter.bind(this, item.name)}>{item.name}</li>) : null;
    return (
      <div className="container student-page-container">
        <div className="row resources-nav">
          <ul className="">
            <li key={33} className={this.state.activeComp === 'all' ? 'activeResLink' : null}
            onClick={this.toggleComp.bind(this,'all')}>all</li>
            <li key={35} className={this.state.activeComp === 'post' ? 'activeResLink' : null}
            onClick={this.toggleComp.bind(this,'post')}>new</li>
          </ul>
        </div>
        <div className="col-xs-10">
          { this.showComponent() }
        </div>
      </div>
    );
  }

}

ResourcesData.displayName = ResourcesData;

ResourcesData.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};


export default ResourcesData;
