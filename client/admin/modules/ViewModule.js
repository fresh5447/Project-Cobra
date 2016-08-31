import React from 'react';
import NavLink from '../../widgets/NavLink';

const ViewCourse = (props) =>
<div className="card card-block">
  <h4 className="card-title">{props.module.title}</h4>
  <p className="card-text">{props.module.desc}</p>
  <p className="card-text">{props.module.hours}</p>
  <NavLink key={props.module._id} className="nav-link" to={'/admin/modules/edit/' + props.module._id}> Edit </NavLink>

</div>;


export default ViewCourse;
