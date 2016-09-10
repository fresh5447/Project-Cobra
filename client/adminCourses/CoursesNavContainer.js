import React from 'react';
import NavLink from '../widgets/NavLink';

const CoursesNavContainer = (props) => {

  const courses = props.courses.map((c) => {
    return <li key={c._id} className="list-group-item"><NavLink to={'/admin/dashboard/view/' + c._id}> {c.title} </NavLink> <i className="fa fa-minus-circle" onClick={() => alert('do you want to delete?')}></i></li>
  });

  return (

      <div className="container">
          <ul>
            { courses }
            <li key='999' className="list-group-item"><NavLink to={'/admin/dashboard/post'}> <h4>create course</h4> </NavLink></li>
          </ul>


      </div>
  );

};

CoursesNavContainer.propTypes = {
  courses: React.PropTypes.array.isRequired
};

export default CoursesNavContainer;
