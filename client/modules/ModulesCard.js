import React from 'react';
// import CheckPoints from './CheckPoints';
import NavLink from '../widgets/NavLink';

const ModuleCard = (props) => {
  return (
    <div className="card markdown-card modules-card">
      <div className="card-block modules-card-header">
        <h4 className="card-title">Title:{ props.title }</h4>
      </div>
      <div className="card-block modules-card-body">
        <p> {props.desc} </p>

        <button type="button" className="btn btn-primary card-btn">
          <NavLink className="card-link" to={'/modules/' + props.id }> Show Me</NavLink>
        </button>

        {/*<CheckPoints checkpoints={ props.checkpoints }/>*/}

      </div>
    </div>
  );
};

export default ModuleCard;

//
// <CheckPoints checkpoints={props.checkpoints}/>
