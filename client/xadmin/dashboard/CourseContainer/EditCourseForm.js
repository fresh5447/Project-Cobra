import React from 'react';
import ReactMarkdown from 'react-markdown';

const EditCourseForm = (props) =>
  <div className="cp-form-container">
    <div className="page-header">
      <h5>edit course</h5>
    </div>
    <div className="container cp-form">
      <form onSubmit={props.handleSubmit}>
        <fieldset className="form-group">
          <input required="true" onChange={ (event) => props.onFieldChange('title', event.target.value)}
            type="text" className="form-control" id="" placeholder="title" value={props.title}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>description</label>
          <input required="true" onChange={ (event) => props.onFieldChange('desc', event.target.value)}
          type="text" className="form-control" id="" placeholder="..." value={props.desc}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>start date</label>
          <input onChange={ (event) => props.onFieldChange('startDate', event.target.value)}
          type="date" className="form-control" id="" placeholder="..." value={props.startDate}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>end date</label>
          <input onChange={ (event) => props.onFieldChange('completionDate', event.target.value)}
          type="date" className="form-control" id="" placeholder="..." value={props.completionDate}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>Kind?</label>
          <input onChange={ (event) => props.onFieldChange('kind', event.target.value)}
          type="text" className="form-control" id="" placeholder="fulltime/online/parttime" value={props.kind}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>location</label>
          <input onChange={ (event) => props.onFieldChange('location', event.target.value)}
          type="text" className="form-control" id="" placeholder="if any" required="true" value={props.location}
          />
        </fieldset>
        <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
      </form>
    </div>
  </div>;


EditCourseForm.display = EditCourseForm;
export default EditCourseForm;
