import React from 'react';
import NavLink from '../widgets/NavLink';

const CheckpointNav = (props) => {
  const checkpointList = props.checkpoints && props.checkpoints.length > 0 ?
    props.checkpoints.map((item) => {
      return <li key={item.cp._id} className="list-group-item">
      <NavLink className="nav-link" to={"/modules/" + props.mid + "/checkpoints/" + item.cp._id}>
      { item.cp.title}</NavLink></li>
    }) : <div>No CPS</div>;
  return (
    <div className="card one-module-card">
      <div className="card-block modules-card-body">
        <ul className="list-group tags-group">
          { checkpointList }
          <li className="list-group-item new-cp"><NavLink className=""
            to={'/post/checkpoint/' + props.mid}
          >
            New Checkpoint
          </NavLink></li>
        </ul>
      </div>
    </div>
  );

};

// CheckpointNav.propTypes = {
//   checkpoints: React.PropTypes.array.isRequired
// };

export default CheckpointNav;
