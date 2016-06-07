import React from 'react';
import NavLink from '../modules/NavLink'

const DBModulesCard = (props) => {
  console.log(props.modules)
  const mods = props.modules.map((item) => {
    return (
        <li className="list-group-item" key={item._id}>
          { item.title } | {item.checkpoints ? item.checkpoints.length : null} checkpoints | {item.hours} hours |  Status
          <NavLink to={"/dashboard/projects/" + item._id}>Go</NavLink>
        </li>  
      )
  });
  return (
      <div className="card last-student-card">
        <div className="card-block main-card-block">
          <h4 className="card-title">Course Modules</h4>
        </div>
        <div className="card-block">
          <ul className="list-group list-group-flush">
            { mods }
          </ul>
        </div>
      </div>
    )
}

export default DBModulesCard;