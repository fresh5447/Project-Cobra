import React from 'react';

const ModuleView = (props) =>
<div className="card">
  <div className="card-block">
    <h4 className="card-title">title: { props.module.title }</h4>
    <p className="card-text">desc: { props.module.desc }</p>
    <p className="card-text">hours: { props.module.hours }</p>
    <button className="btn btn-primary" onClick={props.switchComp.bind(this, 'edit', props.module._id)}>edit</button>
  </div>
</div>

export default ModuleView;
