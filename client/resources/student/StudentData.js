import React from 'react';
import AllResources from './AllResources';
import Favorites from './Favorites';
import PostData from '../PostResourceData';
import Categories from './Categories'

class StudentData extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      resources: null,
      activeComp: 'all',
      catFilter: null
    };
    this.toggleFav = this.toggleFav.bind(this);
  }

  componentDidMount() {
    this.loadStudentResources();
    this.loadCategories();
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
    }).done((d) => this.loadStudentResources())
  }

  loadStudentResources = () => $.get('/api/v1/resources/student',
    (data) => { this.setState({ resources: data })});

  setCagegoryFilter(name) {
    this.setState({ catFilter: name, activeComp: 'categories' });
  }

    showComponent() {
      if (this.state.resources && this.state.activeComp === 'all') {

        return <AllResources toggleFav={this.toggleFav} resources={this.state.resources} />
      } else if (this.state.resources && this.state.activeComp === 'favorites') {

        return <Favorites toggleFav={this.toggleFav} resources={this.state.resources} />
      } else if(this.state.resources && this.state.activeComp === 'post') {

        return <PostData toggleFav={this.toggleFav} />
      } else if(this.state.resources && this.state.activeComp === 'categories' && this.state.catFilter) {
         return <Categories toggleFav={this.toggleFav} resources={this.state.resources} catFilter={this.state.catFilter}   />
        } else {
        return null;
      }
    }

  render() {
    console.log(this.state.categories);
    const cats = this.state.categories ? this.state.categories.map((item) =>
      <li className={this.state.catFilter === item.name ? 'activeResLink' : null} onClick={this.setCagegoryFilter.bind(this, item.name)}>{item.name}</li>) : null;
    return (
      <div className="container student-page-container">
        <div className="row resources-nav">
          <ul className="">
            <li className={this.state.activeComp === 'all' ? 'activeResLink' : null} onClick={this.toggleComp.bind(this,'all')}>All</li>
            <li className={this.state.activeComp === 'favorites' ? 'activeResLink' : null} onClick={this.toggleComp.bind(this,'favorites')}>Favorites</li>
            <li className={this.state.activeComp === 'post' ? 'activeResLink' : null} onClick={this.toggleComp.bind(this,'post')}>Post</li>
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

StudentData.displayName = StudentData;

// StudentData.propTypes = {
//   resources: React.PropTypes.array.isRequired
// };

export default StudentData;
