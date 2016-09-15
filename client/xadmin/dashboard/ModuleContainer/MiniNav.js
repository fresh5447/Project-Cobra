import React from 'react';
import NavLink from '../../.././widgets/NavLink';

const MiniNav = (props) => {

  const modules = props.modules.map((c) => {
    return <li key={c._id} className="list-group-item"><NavLink to={'/admin/dashboard/course/' + props.courseId + '/view/' + c._id}> {c.title} </NavLink> <i className="fa fa-minus-circle" onClick={() => alert('do you want to delete?')}></i></li>
  });

  return (

      <div className="container">
      <NavLink to={'/admin/dashboard/courses'}> <h4>back to courses</h4> </NavLink>
          <ul>
            { modules }
            <li key='999' className="list-group-item"><NavLink to={'/admin/dashboard/course/' + props.courseId + '/post'}> <h4>create module</h4> </NavLink></li>
          </ul>


      </div>
  );

};


export default MiniNav;
