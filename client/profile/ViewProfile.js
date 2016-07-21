import React from 'react';

const ViewProfile = (props) =>
<div>
    <div className="container">

        <ul className="profile-links">
        <h5>User Info
        </h5>
        <button
          onClick={props.changeActiveComp.bind(this, 'edit')}
          className="btn btn-primary submit-btn"
        >
        Edit<
        /button>
          <li><span className="profile-field"> first </span> <span className="profile-field-value"> {props.user.local.firstName || "edit profile to complete.."}</span></li>
          <li><span className="profile-field"> last </span> <span className="profile-field-value">{props.user.local.lastName || "edit profile to complete.."}</span></li>
          <li><span className="profile-field"> email </span><span className="profile-field-value"> {props.user.local.email || "edit profile to complete.."}</span></li>
          <li><span className="profile-field"> linkedIn Url </span><span className="profile-field-value"> {props.user.local.linkedIn || "edit profile to complete.."}</span></li>
          <li><span className="profile-field"> twitter handle </span> <span className="profile-field-value">{props.user.local.twitterHandle || "edit profile to complete.."}</span></li>
          <li><span className="profile-field"> github handle </span><span className="profile-field-value"> {props.user.local.twitterHandle || "edit profile to complete.."}</span></li>
          <li><span className="profile-field"> skype username </span><span className="profile-field-value"> {props.user.local.skype || "edit profile to complete.."}</span></li>
          <li><span className="profile-field"> bio </span><span className="profile-field-value"> {props.user.local.bio || "edit profile to complete.."}</span></li>
        </ul>

    </div>
</div>;

export default ViewProfile
