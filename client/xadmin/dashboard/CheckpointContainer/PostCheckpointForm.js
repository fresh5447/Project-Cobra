import React from 'react';
import ReactMarkdown from 'react-markdown';

const PostCheckpointForm = (props) =>
  <div className="cp-form-container">
    <div className="page-header">
      <h5>new checkpoint</h5>
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
            required="true" type="text" className="form-control" id="" placeholder="..."
          />
        </fieldset>
        <fieldset className="form-group">
          <label>content</label>
          <textarea onChange={ (event) => props.onFieldChange('content', event.target.value)}
            className="form-control" required="true" rows="7"
          ></textarea>
        </fieldset>
        <div className="card markdown-card">
          <div className="card-block main-card-block">
            <h4 className="card-title">Markdown Previewer</h4>
            <h6 className="card-subtitle text-muted">
              Live preview of how the Markdown text will display
            </h6>
          </div>
          <div className="card-block markdown-preview-text">
                <h5 className="card-title">{props.title ? props.title : 'No title yet...'}</h5>
                <ReactMarkdown className="color-me-black" source={props.content ? props.content : 'No content yet...'} />
                <ReactMarkdown className="color-me-black" source={props.assignment ? props.assignment : 'No assignment yet...'} />
          </div>
        </div>
        <fieldset className="form-group">
          <label>assignment</label>
          <textarea onChange={ (event) => props.onFieldChange('assignment', event.target.value)}
            required="true" className="form-control" id="exampleTextarea" rows="5"
          ></textarea>
        </fieldset>
        <button type="submit" className="btn btn-primary my-primary-btn">Post</button>
      </form>
    </div>
  </div>;


PostCheckpointForm.display = PostCheckpointForm;
export default PostCheckpointForm;
