import React from 'react';
import NavLink from '../widgets/NavLink';

const Module = (props) => {
  const cps = props.module.checkpoints && props.module.checkpoints.length > 0 ?
    props.module.checkpoints.map((item) => {
    return (
      <div className="card markdown-card modules-card">
        <div className="card-block main-card-block modules-card-header">
          <h4 className="card-title">{ item.title} </h4>
          <p>Complete???</p>
          <NavLink className="nav-link" to={"/modules/" + props.mId + "/checkpoints/" + item._id}>View</NavLink>
        </div>
      </div>);
  }) : <div>No CPS</div>;
  return (
    <div>
      <div className="card markdown-card all-modules-card">
        <div className="card-block modules-card-body">
          <h4 className="card-title">{ props.module.title} </h4>
        </div>
        <div className="card-block modules-card-body">
          <p>30/40 checkpoints complete </p>
          <p>{ props.module.desc}</p>

        </div>
      </div>
      <div className="checkpoints-flex">
        {cps}
      </div>

      <button>
        <NavLink className="nav-link" to={'/post/checkpoint/' + props.module._id}>
          New Checkpoint
        </NavLink>
      </button>

    </div>
  );
};

export default Module;
