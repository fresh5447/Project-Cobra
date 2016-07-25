import React from 'react';
import StatusButton from './StatusButton';
import NavLink from '../widgets/NavLink';

const Module = (props) => {
  const cats = props.checkpoints && props.checkpoints.length > 0 ?
    props.checkpoints.map((item) => {
    return <li className="list-group-item"><NavLink className="" to={"/modules/" + props.mId + "/checkpoints/" + item.cp._id}>{ item.cp.title}</NavLink></li>
  }) : <div>No CPS</div>;
  const cps = props.checkpoints && props.checkpoints.length > 0 ?
    props.checkpoints.map((item) => {
    return (
      <div className="card markdown-card resources-card">
        <div className="card-block res-card-block">
          <p className="card-title res-title">{ item.cp.title} </p>
          <div className="card-block modules-card-body">
            <p className="resource-p"> {item.cp.desc} </p>
          </div>
          {/*<div className="requestCompletion center">
            <StatusButton makeNewRequest={props.makeNewRequest} status={item.status} cpId={item.cp._id} />
          </div>*/}
          <div className="row">
          <i className="" type="button">
            <NavLink className="fa fa-arrow-right bottom-left-icon" to={"/modules/" + props.mId + "/checkpoints/" + item.cp._id}> </NavLink>
          </i>
            {!item.cp.complete ? <i className='fa  fa-check-square-o bottom-right-icon'> </i> : null}          </div>
        </div>
      </div>);
  }) : <div>No CPS</div>;
  return (
    <div className="container">
    <div className="row">
      <div className="center-it">
        <h4><strong> {props.module.title} </strong> </h4>
      </div>

    </div>

    <div className="">

      <div className="container tags-container">
        <ul className="list-group tags-group">
          <li><NavLink to={"/modules/"}><i className="fa fa-arrow-left" ></i></NavLink></li>
          <li><i className="fa fa-check-square-o"> 0/10 </i></li>
          { cats }
        </ul>
      </div>
    </div>
    <div className="container col-xs-12 col-xs-offset-1 ">
      <div className="modules-flex">
        {cps}
      </div>
    </div>



        <NavLink className="" to={'/post/checkpoint/' + props.module._id}>
          <button className="btn btn-primary submit-btn new-cp-btn">New Checkpoint</button>
        </NavLink>


    </div>
  );
};

export default Module;
