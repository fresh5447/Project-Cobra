import React from 'react';
import ReactMarkdown from 'react-markdown';

const PostModuleForm = (props) =>
  <div className="container">
    <form onSubmit={props.handleSubmit}>
      <h4> Add Module </h4>
      <fieldset className="form-group">
        <label>title</label>
        <input onChange={ (event) => props.onFieldChange('title', event.target.value)}
          type="text" className="form-control" id="" placeholder="..."
        />
      </fieldset>
      <fieldset className="form-group">
        <label>description</label>
        <input onChange={ (event) => props.onFieldChange('desc', event.target.value)}
          value={props.desc} type="text" className="form-control" id="" placeholder="..."
        />
      </fieldset>
      <fieldset className="form-group">
        <label>hours</label>
        <input onChange={ (event) => props.onFieldChange('hours', event.target.value)}
          value={props.hours} type="number" className="form-control" id="" placeholder="..."
        />
      </fieldset>
      <div className="checkbox">
        <label>
          <input type="checkbox" /> publish
        </label>
      </div>
      <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
    </form>
  </div>;


export default PostModuleForm;
