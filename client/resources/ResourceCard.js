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
        {/*<CheckPoints checkpoints={ props.checkpoints }/>*/}
        <ul>
          <li><span className="label label-default">Cat One</span></li>
          <li><span className="label label-default">Cat Two</span></li>
          <li><span className="label label-default">Cat Three</span></li>
          <li><span className="label label-default">Cat Four</span></li>
        </ul>
      </div>
    </div>
  );
};

export default ResourceCard;
