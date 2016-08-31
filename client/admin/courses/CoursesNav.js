import React from 'react';
import NavLink from '../../widgets/NavLink';

const CoursesContainer = (props) => {

  const courses = props.courses.map((c) => {
    return <NavLink key={c._id} className="nav-link" to={'/admin/courses/view/' + c._id}> {c.title} </NavLink>
  });

  return (

      <div className="container">

          <nav className="nav nav-inline">
            { courses }
            <NavLink key={999} className="nav-link" to={'/admin/courses/post/'}> create course </NavLink>
          </nav>


      </div>
  );

};

CoursesContainer.propTypes = {
  courses: React.PropTypes.array.isRequired
};

export default CoursesContainer;
