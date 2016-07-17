import React from 'react';
import NavLink from '../widgets/NavLink';

class ProfileData extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      resources: null
    };
  }

  componentWillMount() {
    this.loadResources();
  }

  loadResources() {
    $.ajax({
      url: '/api/v1/resources',
      method: 'GET'
    }).done((data) => this.setState({ resources: data }));
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
        <NavLink className="nav-link" to="/resources/all" className="nav-link">
        <h3>All</h3>
        </NavLink>
        /
        <NavLink className="nav-link" to="/resources/favorites" className="nav-link">
        <h3>Favorites</h3>
        </NavLink>
        </div>
        <div className="row">
          {this.props.children && React.cloneElement(this.props.children, {
            resources: this.state.resources
          })}
        </div>

      </div>
      </div>
    );
  }
}

ProfileData.displayName = ProfileData;
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
