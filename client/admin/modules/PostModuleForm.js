import React from 'react';
import ReactMarkdown from 'react-markdown';

const PostModuleForm = (props) =>
  <div className="cp-form-container">
    <div className="page-header">
      <h5>add module</h5>
    </div>
    <div className="container cp-form">
      <form onSubmit={props.handleSubmit}>
      <div className="form-group">
       <label for="exampleSelect1">course</label>
       <select required="true" className="form-control" onChange={ (event) => props.onFieldChange('course', event.target.value)}>
          { props.courses ? props.courses.map(item => <option value={item._id}>{item.title}</option>) : null }
       </select>
     </div>
        <fieldset className="form-group">
          <input required="true" onChange={ (event) => props.onFieldChange('title', event.target.value)}
            type="text" className="form-control" id="" placeholder="title"
          />
        </fieldset>
        <fieldset className="form-group">
          <label>description</label>
          <input required="true" onChange={ (event) => props.onFieldChange('desc', event.target.value)}
          type="text" className="form-control" id="" placeholder="..."
          />
        </fieldset>
        <fieldset className="form-group">
          <label>hours</label>
          <input required="true" onChange={ (event) => props.onFieldChange('hours', event.target.value)}
          type="text" className="form-control" id="" placeholder="..."
          />
        </fieldset>
        <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
      </form>
    </div>
  </div>;


PostModuleForm.display = PostModuleForm;
export default PostModuleForm;
