import React from 'react';

const EditProfileView = (props) =>
<div>
    <div className="container edit-profile-container">
      <form onSubmit={props.handleSubmit}>
        <h4> Edit Profile </h4>
        <fieldset className="form-group">
          <label>email</label>
          <input onChange={ (event) => props.onFieldChange('email', event.target.value)}
            type="email" className="form-control" id="" placeholder={props.user.local.email || "none yet"}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>first name</label>
          <input onChange={ (event) => props.onFieldChange('firstName', event.target.value)}
            type="text" className="form-control" id="" placeholder={props.user.local.firstName || "none yet"}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>last name</label>
          <input onChange={ (event) => props.onFieldChange('lastName', event.target.value)}
            type="text" className="form-control" id="" placeholder={props.user.local.lastName || "none yet"}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>linkedin ur</label>
          <input onChange={ (event) => props.onFieldChange('linkedIn', event.target.value)}
            type="text" className="form-control" id="" placeholder={props.user.local.linkedIn || "none yet"}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>twitter handle</label>
          <input onChange={ (event) => props.onFieldChange('twitterHandle', event.target.value)}
            type="text" className="form-control" id="" placeholder={props.user.local.twitterHandle || "none yet"}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>github handle</label>
          <input onChange={ (event) => props.onFieldChange('githubHandle', event.target.value)}
            type="text" className="form-control" id="" placeholder={props.user.local.githubHandle || "none yet"}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>skype username</label>
          <input onChange={ (event) => props.onFieldChange('skype', event.target.value)}
            type="text" className="form-control" id="" placeholder={props.user.local.skype || "none yet"}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>bio </label>
          <textarea onChange={ (event) => props.onFieldChange('bio', event.target.value)}
            className="form-control" value={props.content} rows="5"
            placeholder={props.user.local.bio || "none yet"}
          ></textarea>
        </fieldset>
        <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
      </form>
    </div>
</div>;

export default EditProfileView
