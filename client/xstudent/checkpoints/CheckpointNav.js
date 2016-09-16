import React from 'react';
import NavLink from '../../widgets/NavLink';

const CheckpointNav = (props) => {
  const checkpointList = props.checkpoints && props.checkpoints.length > 0 ?
    props.checkpoints.map((item) => {
      return <li key={item.cp._id} className="list-group-item">
      <NavLink className="nav-link" to={"/modules/" + props.mid + "/checkpoints/" + item.cp._id}>
      { item.cp.title}<i onClick={props.toggleCompletion.bind(this, item.cp._id,
        item.status === "complete" ? "remove" : "add")} className={item.status === "complete"
        ? "fa fa-check-circle-o  comp-circle done" : "fa fa-circle-o  comp-circle not" }> </i></NavLink>

       </li>
    }) : <div>No CPS</div>;
  return (
    <div className="card one-module-card">
      <div className="card-block modules-card-body">
        <ul className="list-group tags-group">
          { checkpointList }
          {/*<button type="button" className="btn btn-outline-primary btn-lg btn-block"><NavLink className=""to={'/post/checkpoint/' + props.mid}>
            New Checkpoint
          </NavLink></button>*/}
        </ul>
      </div>
    </div>
  );

};

// CheckpointNav.propTypes = {
//   checkpoints: React.PropTypes.array.isRequired
// };

export default CheckpointNav;
