import React from 'react';
import NavLink from '../../widgets/NavLink';
import ReactMarkdown from 'react-markdown';

const ResourceCard = (props) => {


  const cats = props.categories && props.categories.length > 0 ?
  props.categories.map((item) =>
      <span key={item._id} className="label label-default cat-label">{item.name}</span>
    ) : null;
  return (
    <div className="card markdown-card resources-card">
      <div className="card-block res-card-block">
        <p className="card-title res-title">{ props.title }</p>
      </div>
      <div className="row">
        <div className="col-md-3 center-icon">
          <i onClick={props.role === 'admin' ? props.deleteResource.bind(this, props.id) : null }
            className={props.role === 'admin' ? 'fa  fa-minus-circle' : null}
          > </i>
        </div>
        <div className="col-md-3 center-icon">
          <i className={ props.internal ? 'fa fa-arrow-right' :
          null } onClick={props.setOneResource.bind(this, props.id)} aria-hidden="true">
          </i>
            <a href={props.link} target="_blank"><i className={ props.internal === false ? "fa fa-external-link" : null }>
          </i>
          </a>

        </div>
        <div className="col-md-3 center-icon">
          { props.role === "student" ? <i className={ props.fav ? 'fa fa-heart my-heart' : 'fa fa-heart-o my-heart' }
            aria-hidden="true"
            onClick={ props.fav ? props.toggleFav.bind(this, props.id, 'remove') :
            props.toggleFav.bind(this, props.id, 'post') }
          ></i> : null }
        </div>
        <div className="col-md-3 center-icon">
            { props.video ? <i className="fa fa-video-camera" aria-hidden="true"></i> : null}
        </div>
        { props.publish ? null : <p> Draft </p> }
      </div>
      <div className="resource-cats">
        { cats }
      </div>
    </div>
  );
};

ResourceCard.propTypes = {
  toggleFav: React.PropTypes.func.isRequired,
  setOneResource: React.PropTypes.func.isRequired,
  deleteResource: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired,
  fav: React.PropTypes.bool.isRequired,
  internal: React.PropTypes.bool.isRequired,
  categories: React.PropTypes.array.isRequired,
  id: React.PropTypes.string.isRequired
};

export default ResourceCard;
