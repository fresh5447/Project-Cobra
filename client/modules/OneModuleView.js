import React from 'react';
import StatusButton from './StatusButton';
import NavLink from '../widgets/NavLink';

const OneModuleView = (props) => {
  const checkpointList = props.checkpoints && props.checkpoints.length > 0 ?
    props.checkpoints.map((item) => {
    return <li key={item.cp._id} className="list-group-item"><NavLink className="nav-link" to={"/modules/" + props.mId + "/checkpoints/" + item.cp._id}>{ item.cp.title}</NavLink></li>
  }) : <div>No CPS</div>;
  return (
    <div className="">
    <div className="page-header">
      <h5>{props.module.title}</h5>
      <h6 className="">0/5 checkponts complete </h6>
    </div>
      <div className="row">
        <div className="">
          <NavLink to={"/modules/"}><i className="fa fa-arrow-left" ><small> modules</small></i></NavLink> <br/>
        </div>
      </div>
      <div className="row module-row">
          <div className="col-xs-3">
            <div className="card one-module-card">
              <div className="card-block modules-card-body">
                <ul className="list-group tags-group">
                  { checkpointList }
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

export default OneModuleView;
