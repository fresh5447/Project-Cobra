import React from 'react';
import ReactMarkdown from 'react-markdown';

const EditCheckpointForm = (props) =>
  <div className="container">
    <form onSubmit={props.handleSubmit}>
      <h4> Edit Checkpoint: {props.title} </h4>
      <fieldset className="form-group">
        <label>title</label>
        <input onChange={ (event) => props.onFieldChange('title', event.target.value)}
          value={props.title} type="text" className="form-control" id="" placeholder={props.title}
        />
      </fieldset>
      <fieldset className="form-group">
        <label>description</label>
        <input onChange={ (event) => props.onFieldChange('desc', event.target.value)}
          value={props.desc} type="text" className="form-control" id="" placeholder={props.desc}
        />
      </fieldset>
      <fieldset className="form-group">
        <label>content</label>
        <textarea onChange={ (event) => props.onFieldChange('content', event.target.value)}
          className="form-control" value={props.content} rows="3"
          placeholder={props.content}
        ></textarea>
      </fieldset>
      <fieldset className="form-group">
        <label>assignment</label>
        <textarea onChange={ (event) => props.onFieldChange('assignment', event.target.value)}
          value={props.assignment} className="form-control" id="exampleTextarea" rows="3"
          placeholder={props.assignment}
        ></textarea>
      </fieldset>
      <div className="checkbox">
        <label>
          <input type="checkbox" /> publish
        </label>
      </div>
      <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
    </form>
    <div className="card markdown-card">
      <div className="card-block main-card-block">
        <h4 className="card-title">Markdown Previewer</h4>
        <h6 className="card-subtitle text-muted">
          Live preview of how the Markdown text will display
        </h6>
      </div>
      <div className="card-block">
            <h5 className="card-title">{props.title ? props.title : 'No title yet...'}</h5>
            <ReactMarkdown source={props.content ? props.content : 'No content yet...'} />
            <ReactMarkdown source={props.assignment ? props.assignment : 'No assignment yet...'} />
      </div>
    </div>
  </div>;


export default EditCheckpointForm;