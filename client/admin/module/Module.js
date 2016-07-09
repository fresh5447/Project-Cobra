import React from 'react';


const Module = (props) => {
  const cps = props.module.checkpoints && props.module.checkpoints.length > 0 ?
    props.module.checkpoints.map((item) => {
    return (
      <div className="card markdown-card">
        <div className="card-block main-card-block">
          <h4 className="card-title">Title: { item.title} </h4>
        </div>
        <div className="card-block">
          <p> Content: { item.content}</p>

        </div>
      </div>);
  }) : <div>No CPS</div>;
  return (
    <div><h4>Module</h4>
      <div className="card markdown-card">
        <div className="card-block main-card-block">
          <h4 className="card-title">Title: { props.module.title} </h4>
          <p className="pull-right"> module #1 </p>
        </div>
        <div className="card-block">
          <p> Description: { props.module.desc}</p>

          <button
            type="button"
            className="btn btn-primary my-primary-btn"
          >
            Edit
          </button>

        </div>
      </div>
      <h4> Checkpoints </h4>
      {cps}
    </div>
  );
};

export default Module;

//
// <CheckPoints checkpoints={props.checkpoints}/>
