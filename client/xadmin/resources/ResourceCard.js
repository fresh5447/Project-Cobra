import React from 'react';
import NavLink from '../../widgets/NavLink';

const ResourceCard = (props) => {
  console.log(props.link)
  const cats = props.categories && props.categories.length > 0 ?
  props.categories.map((item) =>
      <span className="label label-default cat-label">{item.name}</span>
    ) : null;
  return (
    <div className="card markdown-card resources-card">
      <div className="card-block res-card-block">
        <p className="card-title res-title">{ props.title }</p>
      </div>
      <div className="resource-footer center-icon">
        <div className="col-md-3 center-icon">
          <i onClick={props.deleteResource.bind(this, props.id)} className="fa fa-minus-circle my-circle" aria-hidden="true"></i>
        </div>
        <div className="col-md-3 center-icon">
        {
          props.kind === "external" ?
            <a href={props.link.toString()} target="_blank"><i className="fa fa-external-link my-external-link" aria-hidden="true"></i></a>
            : <button onClick={props.setOneResource.bind(this, props.id)}> view </button>
        }

        </div>
      </div>
      <div className="resource-cats">
        { cats }
      </div>

    </div>
  );
};

export default ResourceCard;
