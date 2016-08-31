import React from 'react';
import ReactMarkdown from 'react-markdown';

const EditCourseForm = (props) =>
  <div className="container">
    <form onSubmit={props.handleSubmit}>
      <h4> Edit Course: {props.title} </h4>
      <fieldset className="form-group">
        <label>title</label>
        <input onChange={props.onFieldChange.bind(this, 'title')}
         type="text" className="form-control" id="" placeholder={props.title}
         value={props.title}
        />
      </fieldset>
      <fieldset className="form-group">
        <label>description</label>
        <input onChange={props.onFieldChange.bind(this, 'desc')}
          type="text" className="form-control" id="" placeholder={props.desc}
          value={props.desc}
        />
      </fieldset>
      <fieldset className="form-group">
        <label>start date</label>
        <input onChange={props.onFieldChange.bind(this, 'startDate')}
          type="text" className="form-control" id="" placeholder={props.startDate}
          value={props.startDate}
        />
      </fieldset>
      <fieldset className="form-group">
        <label>completion</label>
        <input onChange={props.onFieldChange.bind(this, 'completionDate')}
          type="text" className="form-control" id="" placeholder={props.completionDate}
          value={props.completionDate}
        />
      </fieldset>

      <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
    </form>
  </div>;


export default EditCourseForm;
