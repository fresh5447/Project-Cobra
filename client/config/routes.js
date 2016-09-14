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
import PostCourseData from '../admin/courses/PostCourseData';

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

      <Route path="/admin/dashboard" component={AdminDashContainer}>

        <Route path="view/:id" component={OneCourseContainer}>
          <Route path="module/:modId" component={OneModuleContainer} />
        </Route>

        <Route path="post_course" component={PostCourseData} />

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
