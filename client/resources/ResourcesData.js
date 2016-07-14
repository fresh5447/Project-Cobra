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
      <div className="container">
        <div className="row">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/resources/all">Resources</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/resources/favorites" className="nav-link">
              Favorites
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/resources/categories">categories</NavLink>
          </li>
        </ul>
        </div>
        <div className="row">
          {this.props.children && React.cloneElement(this.props.children, {
            resources: this.state.resources
          })}
        </div>

      </div>
    );
  }
}

ProfileData.displayName = ProfileData;
export default ProfileData;
