import React from 'react';
import NavLink from '../../.././widgets/NavLink';

const MiniNav = (props) => {

  const checkpoints = props.checkpoints.map((c) => {
    return <li key={c._id} className="list-group-item"><NavLink to={'/admin/dashboard/module/' + props.modId + '/view/' + c._id}> {c.title} </NavLink> <i className="fa fa-minus-circle" onClick={() => alert('do you want to delete?')}></i></li>
  });

  return (

      <div className="container">
      <h3>checkpoints</h3>
          <ul>
            { checkpoints }
            <li key='999' className="list-group-item"><NavLink to={'/admin/dashboard/module/' + props.modId + '/post'}> <h4>new checkpoint</h4> </NavLink></li>
          </ul>


      </div>
  );

};


export default MiniNav;
