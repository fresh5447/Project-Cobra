import React from 'react';
import NavLink from '../../widgets/NavLink';

const CP = (props) =>
<div className="card markdown-card">
  <div className="card-block main-card-block">
    <h4 className="card-title">Title: { props.item.title} </h4>
    <NavLink className="nav-link" to={"/admin/checkpoints/" + props.item._id}>View</NavLink>
  </div>
</div>;

export default CP;
