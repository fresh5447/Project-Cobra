import React from 'react';
// import CheckPoints from './CheckPoints';
import NavLink from '../widgets/NavLink';

const ModuleCard = (props) => {
  return (
    <div className="card markdown-card modules-card">
      <div className="card-block modules-card-header">
        <h4 className="card-title">{ props.title }</h4>
      </div>
      <div className="card-block modules-card-body">
        <p> {props.desc} </p>
        <p> complete: {props.complete.toString() } </p>

        <button type="button" className="btn btn-primary card-btn">
          <NavLink className="card-link" to={'/modules/' + props.id }> go </NavLink>
        </button>

        {/*<CheckPoints checkpoints={ props.checkpoints }/>*/}

      </div>
    </div>
  );
};

export default ModuleCard;

//
// <CheckPoints checkpoints={props.checkpoints}/>
