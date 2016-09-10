import React from 'react';
import NavLink from '../../widgets/NavLink';

const CourseCard = (props) =>
<div className="card card-block">
  <h4 className="card-title">{props.course.title || "none"}</h4>
  <p className="card-text">desc {props.course.desc || "none"}</p>
  <p className="card-text">begins {props.course.startDate || "none"}</p>
  <p className="card-text">ends {props.course.completionDate || "none"}</p>
  <p className="card-text">type (full/part/online){props.course.kind || "none"}</p>
  <p className="card-text">location {props.course.location || "none"}</p>
  <ul>
    <li><NavLink key={props.course._id} className="nav-link" to={'/admin/course/view/' + props.course._id}> view </NavLink></li>
    <li><NavLink key={props.course._id} className="nav-link" to={'/admin/course/edit/' + props.course._id}> edit </NavLink></li>
  </ul>

</div>;


export default CourseCard;
