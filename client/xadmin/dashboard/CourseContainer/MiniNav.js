import React from 'react';
import NavLink from '../../.././widgets/NavLink';

const MiniNav = (props) => {

  const courses = props.courses.map((c) => {
    return <li key={c._id} className="list-group-item"><NavLink to={'/admin/dashboard/courses/' + c._id}> {c.title} </NavLink> </li>
  });

  return (

      <div className="container">
          <ul>
            { courses }
            <li key='999' className="list-group-item"><NavLink to={'/admin/post_course'}> <h4><i className="fa fa-plus-circle"></i> add course</h4> </NavLink></li>
          </ul>


      </div>
  );

};


export default MiniNav;
