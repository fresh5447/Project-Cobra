import React from 'react';
import ReactMarkdown from 'react-markdown';

const PostSubmissionForm = (props) =>
  <div className="container">
    <form onSubmit={props.submitSubmissionToServer}>
      <h4> Post Submission </h4>
      <fieldset className="form-group">
        <textarea onChange={ (event) => props.onFieldChange('content', event.target.value)}
          className="form-control" value={props.content} rows="5"
        ></textarea>
      </fieldset>
      <div className="card markdown-card">
        <div className="card-block main-card-block">
          <h4 className="card-title">Markdown Preview</h4>
        </div>
        <div className="card-block">
          <ReactMarkdown source={ props.content || "# none yet"} />
        </div>
      </div>
      <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
    </form>

  </div>;


export default PostSubmissionForm;
