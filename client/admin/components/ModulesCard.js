import React from 'react';
import NavLink from '../../widgets/NavLink';

const ModulesCard = (props) =>
<div className="card card-block">
  <h4 className="card-title">{props.module.title}</h4>
  <p className="card-text">{props.module.desc}</p>
  <p className="card-text">{props.module.hours}</p>
  <ul>
    <li><NavLink key={props.module._id} className="nav-link" to={'/admin/modules/edit/' + props.module._id}> view </NavLink></li>
    <li><NavLink key={props.module._id} className="nav-link" to={'/admin/modules/edit/' + props.module._id}> Edit </NavLink></li>
  </ul>
  <ul>
    {
      props.module.checkpoints && props.module.checkpoints.length > 0 ? props.module.checkpoints.map((item) => <li>{item.desc}</li>) : "none yet"
    }
  </ul>

</div>;


export default ModulesCard;
