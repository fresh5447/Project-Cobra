import React from 'react';
import ReactMarkdown from 'react-markdown';

const PostSubmissionForm = (props) =>
  <div className="container">
    <form onSubmit={props.submitSubmissionToServer}>
      <h4> Post Submission </h4>
      <fieldset className="form-group">
        <label>content</label>
        <input onChange={ (event) => props.onFieldChange('content', event.target.value)}
          type="text" className="form-control" id="" placeholder="..."
        />
      </fieldset>
      <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
    </form>
  </div>;


export default PostSubmissionForm;
