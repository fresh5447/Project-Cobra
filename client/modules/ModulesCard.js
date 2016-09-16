import React from 'react';
// import CheckPoints from './CheckPoints';
import NavLink from '../widgets/NavLink';

const ModuleCard = (props) => {
  return (
    <div className="card markdown-card resources-card">
      <div className="card-block res-card-block">
        <p className="card-title res-title">{ props.title }</p>
      </div>
      <div className="card-block modules-card-body">
        <p className="resource-p"> {props.desc} </p>
      </div>
      <div className="row">
      <i className="" type="button">
        <NavLink className="fa  fa-arrow-right bottom-right-icon" to={'/modules/' + props.id }> </NavLink>
      </i>
      {props.complete ? <i className='fa  fa-check-square-o bottom-left-icon'> </i> : null}
      </div>
    </div>
  );
};

export default ModuleCard;

//
// <CheckPoints checkpoints={props.checkpoints}/>
