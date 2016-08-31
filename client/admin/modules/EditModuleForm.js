import React from 'react';
import ReactMarkdown from 'react-markdown';

const EditModuleForm = (props) =>
  <div className="container">
    <form onSubmit={props.handleSubmit}>
      <h4> Edit Module: {props.title} </h4>
      <fieldset className="form-group">
        <label>title</label>
        <input onChange={props.onTitleChange}
         type="text" className="form-control" id="" placeholder={props.title}
         value={props.title}
        />
      </fieldset>
      <fieldset className="form-group">
        <label>description</label>
        <input onChange={props.onDescChange.bind(this, 'desc')}
          type="text" className="form-control" id="" placeholder={props.desc}
          value={props.desc}
        />
      </fieldset>
      <fieldset className="form-group">
        <label>hours</label>
        <input onChange={props.onDescChange.bind(this, 'hours')}
          type="text" className="form-control" id="" placeholder={props.hours}
          value={props.hours}
        />
      </fieldset>

      <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
    </form>
  </div>;


export default EditModuleForm;
