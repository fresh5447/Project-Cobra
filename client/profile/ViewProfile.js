import React from 'react';
import NavLink from '../widgets/NavLink';

const ViewProfile = (props) =>
<div>

  <div className="page-header">
    <h5>Dashboard</h5>
    <h6 className="">{props.user.local.firstName + " " + props.user.local.lastName} </h6>
  </div>
  <div className="container">
    <div className="card profile-card">
      <div className="card-block lg-card-block">
        <h4 className="card-title">profile</h4>
      </div>
      <ul className="profile-links">
        <h5>{props.user.local.firstName + " " + props.user.local.lastName} </h5>
      <button
        onClick={props.changeActiveComp.bind(this, 'edit')}
        className="btn btn-primary submit-btn"
      >
      Edit</button>
        <li><span className="profile-field-value"> email </span><span className="profile-field"> {props.user.local.email || "edit profile to complete.."}</span></li>
        <li><span className="profile-field-value"> linkedIn Url </span><span className="profile-field"> {props.user.local.linkedIn || "edit profile to complete.."}</span></li>
        <li><span className="profile-field-value"> twitter handle </span> <span className="profile-field">{props.user.local.twitterHandle || "edit profile to complete.."}</span></li>
        <li><span className="profile-field-value"> github handle </span><span className="profile-field"> {props.user.local.twitterHandle || "edit profile to complete.."}</span></li>
        <li><span className="profile-field-value"> skype username </span><span className="profile-field"> {props.user.local.skype || "edit profile to complete.."}</span></li>
        <li><span className="profile-field-value"> bio </span><span className="profile-field"> {props.user.local.bio || "edit profile to complete.."}</span></li>
      </ul>
    </div>

    <div className="card profile-card">
      <div className="card-block lg-card-block">
        <h4 className="card-title">enrolled courses</h4>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
        { props.user.courses.length > 0 ? props.user.courses.map((item) =><li><NavLink className="" to={'/modules/'}> {item.title}</NavLink></li>) : null }
        </li>
      </ul>
    </div>




    <div className="card profile-card">
      <div className="card-block lg-card-block">
        <h4 className="card-title">notifications</h4>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">none</li>
      </ul>
    </div>

  </div>
</div>;

export default ViewProfile;




{/*<div className="container user-container">

    <ul className="profile-links">
      <h5>{props.user.local.firstName + " " + props.user.local.lastName} </h5>
    <button
      onClick={props.changeActiveComp.bind(this, 'edit')}
      className="btn btn-primary submit-btn"
    >
    Edit<
    /button>
      <li><span className="profile-field"> email </span><span className="profile-field-value"> {props.user.local.email || "edit profile to complete.."}</span></li>
      <li><span className="profile-field"> linkedIn Url </span><span className="profile-field-value"> {props.user.local.linkedIn || "edit profile to complete.."}</span></li>
      <li><span className="profile-field"> twitter handle </span> <span className="profile-field-value">{props.user.local.twitterHandle || "edit profile to complete.."}</span></li>
      <li><span className="profile-field"> github handle </span><span className="profile-field-value"> {props.user.local.twitterHandle || "edit profile to complete.."}</span></li>
      <li><span className="profile-field"> skype username </span><span className="profile-field-value"> {props.user.local.skype || "edit profile to complete.."}</span></li>
      <li><span className="profile-field"> bio </span><span className="profile-field-value"> {props.user.local.bio || "edit profile to complete.."}</span></li>
    </ul>

</div>*/}
