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

// ADMIN
import ResourcesPage from '../resources/ResourcesPage';
import AdminDashContainer from '../adminDash/AdminDashContainer';
import OneCourseContainer from '../adminDash/OneCourseContainer';
import OneModuleContainer from '../adminDash/OneModuleContainer';



import CourseContainer from '../xadmin/dashboard/CourseContainer/CourseData';
import ActiveCourseContainer from '../xadmin/dashboard/CourseContainer/ActiveCourseContainer';
import PostCourseData from '../xadmin/dashboard/CourseContainer/PostCourseData';

import ModulesDashContainer from '../xadmin/dashboard/ModuleContainer/ModulesDashContainer';
import ActiveModuleData from '../xadmin/dashboard/ModuleContainer/ActiveModuleData';
import PostModuleData from '../xadmin/dashboard/ModuleContainer/PostModuleData';
import EditModuleData from '../xadmin/dashboard/ModuleContainer/EditModuleData';


import CheckpointsDashContainer from '../xadmin/dashboard/CheckpointContainer/CheckpointsDashContainer';
import ActiveCheckpointData from '../xadmin/dashboard/CheckpointContainer/ActiveCheckpointData';
import PostCheckpointData from '../xadmin/dashboard/CheckpointContainer/PostCheckpointData';
import EditCheckpointData from '../xadmin/dashboard/CheckpointContainer/EditCheckpointData';

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
      { /* END STUDENT */ }


      { /*BEGIN ADMIN*/ }
      <Route path="/new/resources" component={ResourcesPage} />

      <Route path="/students" component={StudentData} />

      <Route path="/admin/submissions" component={AllSubmissionsData} />


      {/*COURSES*/}
      <Route path="/a/dashboard/courses" component={CourseContainer}>
        <Route path=":course_id" component={ActiveCourseContainer} />
      </Route>

      <Route path="/a/post_course" component={PostCourseData} />




      {/*MODULES*/}
      <Route path="/a/dashboard/course/:course_id" component={ModulesDashContainer}>
        <Route path="view/:module_id" component={ActiveModuleData} />
        <Route path="post" component={PostModuleData} />
        <Route path="edit/:module_id" component={EditModuleData} />
      </Route>


      {/*CHECKPOINTS*/}
      <Route path="/a/dashboard/module/:module_id" component={CheckpointsDashContainer}>
        <Route path="view/:checkpoint_id" component={ActiveCheckpointData} />
        <Route path="post" component={PostCheckpointData} />
        <Route path="edit/:checkpoint_id" component={EditCheckpointData} />
      </Route>



      <Route path="/admin/dashboard" component={AdminDashContainer}>

        <Route path="view/:id" component={OneCourseContainer}>
          <Route path="module/:modId" component={OneModuleContainer} />
        </Route>


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
