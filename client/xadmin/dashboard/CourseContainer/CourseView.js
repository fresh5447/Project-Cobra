import React from 'react';
import NavLink from '../../.././widgets/NavLink';

const CourseView = (props) =>
<div className="card">
  <div className="card-block">
    <h4 className="card-title">{ props.course.title }</h4>
    <p className="card-text">{ props.course.startDate }</p>
    <p className="card-text">{ props.course.completionDate }</p>
    <p className="card-text">{ props.course.kind }</p>
    <p className="card-text">{ props.course.desc }</p>
    <p className="card-text">{ props.course.location }</p>
    <NavLink to={"/a/dashboard/course/" + props.course._id}> VIEW </NavLink>
    <button className="btn btn-primary" onClick={props.switchComp.bind(this, 'edit')}>edit</button>
  </div>
</div>

module.exports = CourseView;
