import React from 'react';
import AllResources from '../student/AllResources';
import PostData from '../PostResourceData';
import Categories from '../student/Categories';
import ViewResource from '../student/ViewResource';
import Drafts from './Drafts';

class AdminData extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      resources: null,
      activeComp: 'all',
      catFilter: null,
      resource: null,
      adminResources: null
    };
    this.toggleFav = this.toggleFav.bind(this);
    this.toggleComp = this.toggleComp.bind(this);
    this.loadStudentResources = this.loadStudentResources.bind(this);
    this.setOneResource = this.setOneResource.bind(this);
    this.deleteResource = this.deleteResource.bind(this);
  }

  componentDidMount() {
    this.loadStudentResources();
    this.loadCategories();
    this.loadAdminResources();
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

  toggleFav = (id, action) => {
    $.ajax({
      url: `/api/v1/resources/student/favorite/${id}/${action}`,
      method: 'PUT'
    }).done((d) => this.loadStudentResources());
  }

  loadStudentResources = () => $.get('/api/v1/resources/student',
    (data) => {
      if (this.props.role === "student"){
        const studentResources = data.filter((item) => item.publish);
        this.setState({ resources: studentResources });
      } else {
        this.setState({ resources: data });
      }

    });

  loadAdminResources = () => $.get('/api/v1/resources/student',
    (data) => {
      this.setState({ adminResources: data });
      console.log('set state for admin', this.state.adminResources)
    });

  deleteResource(id) {
    if (confirm('must you deletet')) {
      $.ajax({
        url: `/api/v1/resources/id/${id}`,
        method: 'DELETE'
      }).done((d) => {
        console.log(d, 'deleted');
        this.context.sendNotification('Resource Deleted');
        this.loadStudentResources();
      });
    }

  }



  showComponent() {
    if (this.state.resources && this.state.activeComp === 'all') {

      return (<AllResources userRole={this.props.userRole} deleteResource={this.deleteResource}
        setOneResource={this.setOneResource}
        toggleFav={this.toggleFav} resources={this.state.resources}
      />);

    } else if (this.state.resources && this.state.activeComp === 'post') {

      return (<PostData loadStudentResources={this.loadStudentResources}
        toggleFav={this.toggleFav} toggleComp={this.toggleComp}
      />);

    } else if (this.state.resources &&
      this.state.activeComp === 'drafts' && this.state.catFilter) {
      return (<AllResources setOneResource={this.setOneResource} toggleFav={this.toggleFav}
        resources={this.state.resources.filter((item) => !item.publish)}
        catFilter={this.state.catFilter}
      />);

    } else if (this.state.resources &&
      this.state.activeComp === 'categories' && this.state.catFilter) {
      return (<Categories setOneResource={this.setOneResource} toggleFav={this.toggleFav}
        resources={this.state.resources} catFilter={this.state.catFilter}
      />);

    } else if (this.state.resource &&
       this.state.activeComp === 'viewOne') {
      return (<ViewResource resource={this.state.resource}
        toggleFav={this.toggleFav} catFilter={this.state.catFilter}
      />);

    } else {
      return null;
    }
  }

  render() {
    const cats = this.state.categories ? this.state.categories.map((item) =>
      <li className={this.state.catFilter === item.name ? 'activeResLink' : null}
      onClick={this.setCagegoryFilter.bind(this, item.name)}>{item.name}</li>) : null;
    return (
      <div className="container student-page-container">
        <div className="row resources-nav">
          <ul className="">
            <li className={this.state.activeComp === 'all' ? 'activeResLink' : null}
            onClick={this.toggleComp.bind(this,'all')}>All</li>
            <li className={this.state.activeComp === 'drafts' ? 'activeResLink' : null}
            onClick={this.toggleComp.bind(this,'drafts')}>Drafts</li>
            <li className={this.state.activeComp === 'post' ? 'activeResLink' : null}
            onClick={this.toggleComp.bind(this,'post')}>Post</li>
          </ul>
        </div>
        <div className="col-xs-2">
          <div>
            <h6>Categories</h6>
            <ul>
              { cats }
            </ul>
          </div>
        </div>
        <div className="col-xs-10">
          { this.showComponent() }
        </div>
      </div>
    );
  }

}

AdminData.displayName = AdminData;

AdminData.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};

// AdminData.propTypes = {
//   resources: React.PropTypes.array.isRequired
// };

export default AdminData;
