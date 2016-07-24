import React from 'react';
import NavLink from '../../widgets/NavLink';

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
      <div className="card-block res-card-block">
        <p> {props.desc} </p>
      </div>
      <div className="resource-footer center-icon">
        <div className="col-md-3 center-icon">
          {/*<i onClick={props.deleteResource.bind(this, props.id)} className="fa fa-minus-circle my-circle" aria-hidden="true"></i>*/}
        </div>
        <div className="col-md-3 center-icon">
          {/*<a href={props.link} target="_blank"><i href={props.link} target="_blank" className="fa fa-external-link my-external-link" aria-hidden="true"></i></a>*/}
        </div>
        <div className="col-md-3 center-icon">
          <i className={ props.fav ? 'fa fa-heart my-heart' : 'fa fa-heart-o my-heart' }
            aria-hidden="true"
            onClick={ props.fav ? props.toggleFav.bind(this, props.id, 'remove') : props.toggleFav.bind(this, props.id, 'post') }
          ></i>
        </div>
      </div>
      <div className="resource-cats">
        { cats }
      </div>
    </div>
  );
};

ResourceCard.propTypes = {
  toggleFav: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired,
  desc: React.PropTypes.string.isRequired,
  fav: React.PropTypes.bool.isRequired,
  categories: React.PropTypes.array.isRequired,
  id: React.PropTypes.string.isRequired
};

export default ResourceCard;
