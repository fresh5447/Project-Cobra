import React from 'react';
import NavLink from '../widgets/NavLink';

const Module = (props) => {
  const cps = props.module.checkpoints && props.module.checkpoints.length > 0 ?
    props.module.checkpoints.map((item) => {
    return (
      <div className="card markdown-card">
        <div className="card-block main-card-block">
          <h4 className="card-title">{ item.title} </h4>
          <p>Complete???</p>
          <NavLink className="nav-link" to={"/modules/" + props.mId + "/checkpoints/" + item._id}>View</NavLink>
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

        </div>
      </div>
      <h4> Checkpoints </h4>
      <div className="checkpoints-flex">
        {cps}
      </div>

    </div>
  );
};

export default Module;
