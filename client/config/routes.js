import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';
import App from '../App';

// AUTHORIZATION
import UserSignup from '../user/Signup';
import UserSignin from '../user/UserSignin';
import UserForgot from '../user/Forgot';
import UserReset from '../user/Reset';

// STUDENT
import ModulesData from '../modules/ModulesData';
import OneCheckpointData from '../checkpoints/OneCheckpointData';
import OneCheckpointContainer from '../checkpoints/OneCheckpointContainer';
import StudentData from '../students/StudentsData.js';
import AllSubmissionsData from '../submissions/AllSubmissionsData.js';
import UserSubmissionsData from '../submissions/UserSubmissionsData.js';
import ProfileData from '../profile/ProfileAccountData';
import StudentResourcesPage from '../resources/ResourcesPage';

// ADMIN
import ResourcesPage from '../xadmin/resources/ResourcesContainer';
import CourseContainer from '../xadmin/dashboard/CourseContainer/CourseData';
import ActiveCourseContainer from '../xadmin/dashboard/CourseContainer/ActiveCourseContainer';
import PostCourseData from '../xadmin/dashboard/CourseContainer/PostCourseData';
import ModulesDashContainer from '../xadmin/dashboard/ModuleContainer/ModulesDashContainer';
import ActiveModuleData from '../xadmin/dashboard/ModuleContainer/ActiveModuleData';
import PostModuleData from '../xadmin/dashboard/ModuleContainer/PostModuleData';
import EditModuleData from '../xadmin/dashboard/ModuleContainer/EditModuleData';
import CheckpointsDashContainer
    from '../xadmin/dashboard/CheckpointContainer/CheckpointsDashContainer';
import ActiveCheckpointData from '../xadmin/dashboard/CheckpointContainer/ActiveCheckpointData';
import PostCheckpointData from '../xadmin/dashboard/CheckpointContainer/PostCheckpointData';
import EditCheckpointData from '../xadmin/dashboard/CheckpointContainer/EditCheckpointData';
import StudentContainer from '../xadmin/students/StudentsContainer';


var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>

    { /* BEGIN STUDENT */ }
      <Route path="/modules" component={ModulesData} />

      <Route path="/modules/:id" component={OneCheckpointContainer}>
        <Route path="/modules/:id/checkpoints/:cp_id" component={OneCheckpointData} />
      </Route>

      <Route path="/submissions" component={UserSubmissionsData} />

      <Route path="/dashboard" component={ProfileData} />
      <Route path="/resources" component={StudentResourcesPage} />
    { /* END STUDENT */ }


    { /*BEGIN ADMIN*/ }

      {/*RESOURCES*/}
      <Route path="/admin/resources" component={ResourcesPage} />

      {/*STUDENTS*/}
      <Route path="/admin/students" component={StudentContainer} />
      <Route path="/admin/submissions" component={AllSubmissionsData} />


      {/*COURSES*/}
      <Route path="/admin/dashboard/courses" component={CourseContainer}>
        <Route path=":course_id" component={ActiveCourseContainer} />
      </Route>

      <Route path="/admin/post_course" component={PostCourseData} />




      {/*MODULES*/}
      <Route path="/admin/dashboard/course/:course_id" component={ModulesDashContainer}>
        <Route path="view/:module_id" component={ActiveModuleData} />
        <Route path="post" component={PostModuleData} />
        <Route path="edit/:module_id" component={EditModuleData} />
      </Route>


      {/*CHECKPOINTS*/}
      <Route path="/admin/dashboard/module/:module_id" component={CheckpointsDashContainer}>
        <Route path="view/:checkpoint_id" component={ActiveCheckpointData} />
        <Route path="post" component={PostCheckpointData} />
        <Route path="edit/:checkpoint_id" component={EditCheckpointData} />
      </Route>

    { /*END ADMIN*/ }



      {/* BEGIN AUTHERIZATION */}
      <Route path="/signup" component={UserSignup} />
      <Route path="/login" component={UserSignin} />
      <Route path="/forgot" component={UserForgot} />
      <Route path="/user/reset/:reset_token" component={UserReset} />
      {/* END AUTHERIZATION */}

    </Route>
  </Router>
);

module.exports = routes;
