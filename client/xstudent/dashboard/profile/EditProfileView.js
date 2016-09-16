import React from 'react';

const EditProfileView = (props) =>
<div>
    <div className="container edit-profile-container">
      <form onSubmit={props.handleSubmit}>
        <h4> Edit Profile </h4>
        <fieldset className="form-group">
          <label>email</label>
          <input onChange={ (event) => props.onFieldChange('email', event.target.value)}
            type="email" className="form-control" id="" value={props.email || "none yet"}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>first name</label>
          <input onChange={ (event) => props.onFieldChange('firstName', event.target.value)}
            type="text" className="form-control" id="" value={props.firstName || "none yet"}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>last name</label>
          <input onChange={ (event) => props.onFieldChange('lastName', event.target.value)}
            type="text" className="form-control" id="" value={props.lastName || "none yet"}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>linkedin ur</label>
          <input onChange={ (event) => props.onFieldChange('linkedIn', event.target.value)}
            type="text" className="form-control" id="" value={props.linkedIn || "none yet"}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>twitter handle</label>
          <input onChange={ (event) => props.onFieldChange('twitterHandle', event.target.value)}
            type="text" className="form-control" id="" value={props.twitterHandle || "none yet"}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>github handle</label>
          <input onChange={ (event) => props.onFieldChange('githubHandle', event.target.value)}
            type="text" className="form-control" id="" value={props.githubHandle || "none yet"}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>skype username</label>
          <input onChange={ (event) => props.onFieldChange('skype', event.target.value)}
            type="text" className="form-control" id="" value={props.skype || "none yet"}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>bio </label>
          <textarea onChange={ (event) => props.onFieldChange('bio', event.target.value)}
            className="form-control" rows="5"
            value={props.bio || "none yet"}
          ></textarea>
        </fieldset>
        <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
      </form>
    </div>
</div>;

export default EditProfileView
