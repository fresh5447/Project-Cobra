import React from 'react';
import NavLink from '../../.././widgets/NavLink';
import moment from 'moment';


const CourseView = (props) =>
<div className="card">
  <div className="card-block">
    <h4 className="card-title admin-card-title">{ props.course.title }</h4>
    {window.m = moment}
    <p className="card-text admin-card-text"><span className="sub-text" >beginning </span>{ moment(props.course.startDate).format('MMM DD YYYY') }</p>
    <p className="card-text admin-card-text"><span className="sub-text" >ending </span> { moment(props.course.completionDate).format('MMM DD YYYY') }</p>
    <p className="card-text admin-card-text"><span className="sub-text" >type </span> { props.course.kind }</p>
    <p className="card-text admin-card-text"><span className="sub-text" >desc </span> { props.course.desc }</p>
    <p className="card-text admin-card-text"><span className="sub-text" >location </span> { props.course.location }</p>
    <NavLink to={"/admin/dashboard/course/" + props.course._id}> VIEW </NavLink>
    <button className="btn btn-primary gimme-margin" onClick={props.switchComp.bind(this, 'edit')}>edit</button>
  </div>
</div>

module.exports = CourseView;
