import React from 'react';

const ViewProfile = (props) =>
<div>

  <div className="page-header">
    <h5>Dashboard</h5>
    <h6 className="">{props.user.local.firstName + " " + props.user.local.lastName} </h6>
  </div>
  <div className="container">
    <div className="card profile-card">
      <div className="card-block lg-card-block">
        <h4 className="card-title">Courses</h4>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Fullstack JavaScript <i className="fa fa-arrow-right"> </i></li>
        <li className="list-group-item">Cyber Security <i className="fa fa-arrow-right"> </i></li>
        <li className="list-group-item">Database Administration <i className="fa fa-arrow-right"> </i></li>
      </ul>
    </div>

    <div className="card profile-card">
      <div className="card-block lg-card-block">
        <h4 className="card-title">Profile</h4>
      </div>
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
    </div>

    <div className="card profile-card">
      <div className="card-block lg-card-block">
        <h4 className="card-title">Notifications</h4>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Fullstack JavaScript <i className="fa fa-arrow-right"> </i></li>
        <li className="list-group-item">Cyber Security <i className="fa fa-arrow-right"> </i></li>
        <li className="list-group-item">Database Administration <i className="fa fa-arrow-right"> </i></li>
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
