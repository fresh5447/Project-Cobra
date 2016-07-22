import React from 'react';
import ReactMarkdown from 'react-markdown';

const EditCheckpointForm = (props) =>
  <div className="container">
    <form onSubmit={props.handleSubmit}>
      <h4> Edit Checkpoint: {props.title} </h4>
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
        <label>content</label>
        <textarea onChange={props.onDescChange.bind(this, 'content')}
          className="form-control" rows="3"
          placeholder={props.content} value={props.content}
        ></textarea>
      </fieldset>
      <fieldset className="form-group">
        <label>assignment</label>
        <textarea onChange={props.onDescChange.bind(this, 'assignment')}
          className="form-control" id="exampleTextarea" rows="3"
          placeholder={props.assignment} value={props.assignment}
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
