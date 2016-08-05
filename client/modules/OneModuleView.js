import React from 'react';
import StatusButton from './StatusButton';
import NavLink from '../widgets/NavLink';

const Module = (props) => {
  const cats = props.checkpoints && props.checkpoints.length > 0 ?
    props.checkpoints.map((item) => {
    return <li className="list-group-item"><NavLink className="nav-link" to={"/modules/" + props.mId + "/checkpoints/" + item.cp._id}>{ item.cp.title}</NavLink></li>
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
            <NavLink className="fa fa-arrow-right bottom-right-icon" to={"/modules/" + props.mId + "/checkpoints/" + item.cp._id}> </NavLink>
          </i>
            {item.cp.complete ? <i className='fa  fa-check-square-o bottom-left-icon'> </i> : null}          </div>
        </div>
      </div>);
  }) : <div>No CPS</div>;
  return (
    <div className="">
      <div className="row">
        <div className="">
          <NavLink to={"/modules/"}><i className="fa fa-arrow-left" ><small> modules</small></i></NavLink> <br/>
        </div>
      </div>
      <div className="row module-row">
          <div className="col-xs-3">
            <div className="card one-module-card">
              <div className="card-block res-card-block">
                  <h6 className="card-title res-title">{props.module.title}</h6>
              </div>

              <div className="card-block modules-card-body">
                <ul className="list-group tags-group">
                  { cats }
                  <li className="list-group-item new-cp"><NavLink className="" to={'/post/checkpoint/' + props.module._id}>
                  New Checkpoint
                  </NavLink></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-9">
            { props.children }
          </div>

        </div>
      </div>
  );
};

export default Module;
