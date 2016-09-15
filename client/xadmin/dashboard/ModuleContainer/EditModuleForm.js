import React from 'react';
import ReactMarkdown from 'react-markdown';

const EditModuleForm = (props) =>
  <div className="cp-form-container">
    <div className="page-header">
      <h6>{props.title}</h6>
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
          <label>hours</label>
          <input onChange={ (event) => props.onFieldChange('hours', event.target.value)}
          type="number" className="form-control" id="" placeholder="..." value={props.hours}
          />
        </fieldset>
        <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
      </form>
    </div>
  </div>;


EditModuleForm.display = EditModuleForm;
export default EditModuleForm;
