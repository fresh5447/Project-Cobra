import React from 'react';
import CheckPoints from './CheckPoints';
import NavLink from '../../widgets/NavLink';

const ModuleCard = (props) => {
  return (
    <div className="card markdown-card admin-card">
      <div className="card-block main-card-block">
        <h4 className="card-title">Title:{ props.title }</h4>
      </div>
      <div className="card-block">
        <p> {props.desc} </p>

        <button type="button" className="btn btn-primary my-primary-btn">
          <NavLink to={'/admin/modules/' + props.id }> Show Me</NavLink>
        </button>

        <CheckPoints checkpoints={ props.checkpoints }/>

      </div>
    </div>
  );
};

export default ModuleCard;

//
// <CheckPoints checkpoints={props.checkpoints}/>
