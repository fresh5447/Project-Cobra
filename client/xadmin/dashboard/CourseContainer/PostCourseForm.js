import React from 'react';
import ReactMarkdown from 'react-markdown';

const PostCourse = (props) =>
  <div className="cp-form-container">
    <div className="page-header">
      <h5>add course</h5>
    </div>
    <div className="container cp-form">
      <form onSubmit={props.handleSubmit}>
        <fieldset className="form-group">
          <input onChange={ (event) => props.onFieldChange('title', event.target.value)}
            type="text" className="form-control" id="" placeholder="title" required="true"
          />
        </fieldset>
        <fieldset className="form-group">
          <label>description</label>
          <input onChange={ (event) => props.onFieldChange('desc', event.target.value)}
          type="text" className="form-control" id="" placeholder="..." required="true"
          />
        </fieldset>
        <fieldset className="form-group">
          <label>start date</label>
          <input onChange={ (event) => props.onFieldChange('startDate', event.target.value)}
          type="date" className="form-control" id="" placeholder="..." required="true"
          />
        </fieldset>
        <fieldset className="form-group">
          <label>end date</label>
          <input onChange={ (event) => props.onFieldChange('completionDate', event.target.value)}
          type="date" className="form-control" id="" placeholder="..." required="true"
          />
        </fieldset>
        <fieldset className="form-group">
          <label>kind</label>
          <input onChange={ (event) => props.onFieldChange('kind', event.target.value)}
          type="text" className="form-control" id="" placeholder="immersive, flex, online" required="true"
          />
        </fieldset>
        <fieldset className="form-group">
          <label>location</label>
          <input onChange={ (event) => props.onFieldChange('location', event.target.value)}
          type="text" className="form-control" id="" placeholder="..." required="true"
          />
        </fieldset>
        <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
      </form>
    </div>
  </div>;


PostCourse.display = PostCourse;
export default PostCourse;
