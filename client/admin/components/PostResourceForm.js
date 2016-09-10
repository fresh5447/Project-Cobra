import React from 'react';
import ReactMarkdown from 'react-markdown';

const PostCheckpointForm = (props) => {

  const cats = props.categories ? props.categories.map((item) => <li onClick={props.addToCats.bind(this, item)}> {item.name} </li>) : null;
  const addedCats = props.resCats.length > 0 ? props.resCats.map((item) => <li> {item} </li>) : null;

  return (
      <div className="container">
        <form onSubmit={props.handleSubmit}>
          <h4> Create New Resource </h4>
          <fieldset className="form-group">
            <label>title</label>
            <input onChange={ (event) => props.onFieldChange('title', event.target.value)}
              required="true" type="text" className="form-control" id="" placeholder="..."
            />
          </fieldset>
          <fieldset className="form-group">
            <label>content</label>
            <textarea onChange={ (event) => props.onFieldChange('content', event.target.value)}
              required="true" className="form-control" value={props.content} rows="3"
            ></textarea>
          </fieldset>
          <div className="card card-block inner-checkpoint-cardblock">
            <ReactMarkdown source={props.content} />
          </div>
          <fieldset className="form-group">
            <label>link</label>
            <input onChange={ (event) => props.onFieldChange('link', event.target.value)}
              type="text" className="form-control" id="" placeholder="..."
            />
          </fieldset>
          <fieldset className="form-group">
            <label>video</label>
            <textarea onChange={ (event) => props.onFieldChange('video', event.target.value)}
              className="form-control" rows="5"
            ></textarea>
          </fieldset>
          <fieldset className="form-group">
            <label>publish</label>
            <input onChange={ (event) => props.onFieldChange('live', event.target.value)}
              type="checkbox" className="form-control" id="" placeholder="..."
            />
          </fieldset>
          <fieldset className="form-group">
            <label>type</label>
            <select>
              <option value="external">external</option>
              <option value="post">post</option>
              <option value="tutorial">tutorial</option>
              <option value="video">video</option>
            </select>
          </fieldset>
          <fieldset className="form-group">
            <label>categories: click to add</label>
            <ul>
              { props.resCats }
            </ul>
          </fieldset>
          <div>
            <ul>
              {cats}
            </ul>
          </div>
          <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
        </form>
      </div>
  );
};

PostCheckpointForm.display = PostCheckpointForm;
export default PostCheckpointForm;
