import React from 'react';
import ReactMarkdown from 'react-markdown';

const PostCheckpointForm = (props) =>
  <div className="container">
    <form onSubmit={props.handleSubmit}>
      <h4> Create New Resource </h4>
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
        <label>link</label>
        <input onChange={ (event) => props.onFieldChange('link', event.target.value)}
          value={props.link} type="text" className="form-control" id="" placeholder="..."
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


PostCheckpointForm.display = PostCheckpointForm;
export default PostCheckpointForm;
