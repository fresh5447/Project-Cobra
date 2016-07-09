import React from 'react';

const EditModuleForm = (props) => {
  console.log(props)
  return (
    <div className="card markdown-card">
      <form onSubmit={props.handleSubmit}>
      <fieldset className="form-group">
        <label>Title</label>
        <input type="text" onChange={ (event) => props.onFieldChange('title', event.target.value ) } value={props.title} className="form-control" placeholder={props.title} />
      </fieldset>
      <fieldset className="form-group">
        <label>Desc</label>
        <input type="text" onChange={ (event) => props.onFieldChange('desc', event.target.value ) } value={props.desc} className="form-control" placeholder={props.desc} />
      </fieldset>
      <button>Submit</button>
      </form>
    </div>
  );
};

export default EditModuleForm;
