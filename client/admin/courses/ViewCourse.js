import React from 'react';
import NavLink from '../../widgets/NavLink';

const ViewCourse = (props) =>
<div className="card card-block">
  <h4 className="card-title">{props.course.title}</h4>
  <p className="card-text">{props.course.desc}</p>
  <p className="card-text">start: {props.course.startDate ? props.course.startDate : "anytime"}</p>
  <p className="card-text">finish: {props.course.completionDate ? props.course.completionDate : "never"}</p>
  <NavLink key={props.course._id} className="nav-link" to={'/admin/courses/edit/' + props.course._id}> Edit </NavLink>

</div>;


export default ViewCourse;
