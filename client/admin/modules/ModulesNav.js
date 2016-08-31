import React from 'react';
import NavLink from '../../widgets/NavLink';

const ModulesContainer = (props) => {

  const modules = props.modules.map((item) => {
    return <NavLink key={item._id} className="nav-link" to={'/admin/modules/view/' + item._id}> {item.title} </NavLink>
  });

  return (

      <div className="container">

          <nav className="nav nav-inline">
            { modules }
            <NavLink key={999} className="nav-link" to={'/admin/modules/post/'}> create module </NavLink>
          </nav>


      </div>
  );

};

ModulesContainer.propTypes = {
  modules: React.PropTypes.array.isRequired
};

export default ModulesContainer;
