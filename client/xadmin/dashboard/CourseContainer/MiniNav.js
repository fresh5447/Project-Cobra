import React from 'react';
import NavLink from '../../.././widgets/NavLink';

const MiniNav = (props) => {

  const courses = props.courses.map((c) => {
    return <li key={c._id} className="list-group-item"><NavLink to={'/a/dashboard/courses/' + c._id}> {c.title} </NavLink> <i className="fa fa-minus-circle" onClick={() => alert('do you want to delete?')}></i></li>
  });

  return (

      <div className="container">
      <h3>Courses</h3>
          <ul>
            { courses }
            <li key='999' className="list-group-item"><NavLink to={'/a/post_course'}> <h4>create course</h4> </NavLink></li>
          </ul>


      </div>
  );

};


export default MiniNav;
