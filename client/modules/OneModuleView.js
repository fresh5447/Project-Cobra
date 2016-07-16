import React from 'react';
import NavLink from '../widgets/NavLink';

const Module = (props) => {
  const cps = props.module.checkpoints && props.module.checkpoints.length > 0 ?
    props.module.checkpoints.map((item) => {
    return (
      <div className="card markdown-card modules-card">
        <div className="card-block main-card-block modules-card-header">
          <h4 className="card-title">{ item.title} </h4>
          <span className="fa fa-check-circle-o complete-icon pull-right"></span>
          <NavLink className="" to={"/modules/" + props.mId + "/checkpoints/" + item._id}><i className="fa fa-eye view pull-left" aria-hidden="true"></i></NavLink>
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
          <p>{ props.module.desc}</p>
          <p>30/40 checkpoints complete </p>
          <p className="">1.5 hours</p>

        </div>
      </div>
      <div className="checkpoints-flex">
        {cps}
      </div>


        <NavLink className="" to={'/post/checkpoint/' + props.module._id}>
          <button className="btn btn-primary submit-btn new-cp-btn">New Checkpoint</button>
        </NavLink>


    </div>
  );
};

export default Module;
