import React from 'react';
import ReactMarkdown from 'react-markdown';

const PostResourceForm = (props) => {

  const cats = props.categories ? props.categories.map((item) => <li onClick={props.addToCats.bind(this, item)}> {item.name} </li>) : null;
  const addedCats = props.resCats.length > 0 ? props.resCats.map((item) => <li> {item} </li>) : null;

  return (
      <div className="container">
        <form onSubmit={props.handleSubmit}>
          <h4> External Resource </h4>
          <fieldset className="form-group">
            <label>title</label>
            <input onChange={ (event) => props.onFieldChange('title', event.target.value)}
              type="text" className="form-control" id="" placeholder="..."
            />
          </fieldset>
          <fieldset className="form-group">
            <label>link</label>
            <input onChange={ (event) => props.onFieldChange('link', event.target.value)}
              type="text" className="form-control" id="" placeholder="..."
            />
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

PostResourceForm.display = PostResourceForm;
export default PostResourceForm;
