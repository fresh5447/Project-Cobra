import React from 'react';
import NavLink from '../widgets/NavLink';

const ResourceCard = (props) => {
  const cats = props.categories && props.categories.length > 0 ?
  props.categories.map((item) =>
      <span className="label label-default cat-label">{item.name}</span>
    ) : null;
  return (
    <div className="card markdown-card resources-card">
      <div className="card-block res-card-block">
        <p className="card-title res-title">{ props.title }</p>
      </div>
      <div className="card-block">
        <p> {props.desc} </p>
      </div>
      <div className="resource-footer">
        <div className="col-md-6">
          <a href={props.link} target="_blank">view</a>
        </div>
        <div className="col-md-6">
          <button> un-favorite [todo]</button>
        </div>
      </div>
      <div className="resource-cats">
        { cats }
      </div>
    </div>
  );
};

export default ResourceCard;
