import React from 'react';
import NavLink from '../widgets/NavLink';

const ResourceCard = (props) => {
  return (
    <div className="card markdown-card admin-card">
      <div className="card-block main-card-block">
        <p className="card-title">{ props.title }</p>
      </div>
      <div className="card-block">
        <p> {props.desc} </p>
        <p> {props.link} </p>
        <button type="button" className="btn btn-primary my-primary-btn">
          <NavLink to={'/modules/' + props.id }> Take Me: not working yet</NavLink>
        </button>

        {/*<CheckPoints checkpoints={ props.checkpoints }/>*/}

      </div>
    </div>
  );
};

export default ResourceCard;
