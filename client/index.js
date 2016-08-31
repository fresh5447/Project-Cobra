import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';

import App from './App';
import ModulesData from './modules/ModulesData';
import dummy from './modules/dummy';
import PostModuleData from './modules/PostModuleData';
import OneCheckpointData from './checkpoints/OneCheckpointData';
import OneCheckpointContainer from './checkpoints/OneCheckpointContainer';
import UserSignup from './user/Signup';
import UserSignin from './user/UserSignin';
import UserForgot from './user/Forgot';
import UserReset from './user/Reset';
import StudentData from './students/StudentsData.js';
import AllSubmissionsData from './submissions/AllSubmissionsData.js';
import UserSubmissionsData from './submissions/UserSubmissionsData.js';
import PostCheckpointData from './checkpoints/PostCheckpointData';
import EditCheckpointData from './checkpoints/EditCheckpointData';

import ProfileData from './profile/ProfileAccountData';
import ProfileResourcesData from './profile/ProfileResourcesData';
import ProfileSubmissionsData from './profile/ProfileSubmissionsData';
import ProfileAccountData from './profile/ProfileAccountData';

import ResourcesData from './resources/ResourcesData';
import AllResources from './resources/AllResources';
import FavoriteResources from './resources/FavoriteResources';
import CategoryResources from './resources/CategoryResources';
import PostResourceData from './resources/PostResourceData';

import ResourcesPage from './resources/ResourcesPage';

import AdminDashContainer from './adminDash/AdminDashContainer';
import OneCourseContainer from './adminDash/OneCourseContainer';
import PostCourseData from './adminDash/PostCourseData';
import OneModuleContainer from './adminDash/OneModuleContainer';


require('./stylesheets/main.scss');




render((
  <Router history={browserHistory}>
    { /* Student Stuff*/ }
    <Route path="/" component={App}>

      <Route path="/modules" component={ModulesData} />

      <Route path="/modules/:id" component={OneCheckpointContainer}>
        <Route path="/modules/:id/checkpoints/:cp_id" component={OneCheckpointData} />
      </Route>

      <Route path="/edit/checkpoints/:cp_id" component={EditCheckpointData} />
      <Route path="/post/module" component={PostModuleData} />
      <Route path="/post/checkpoint/:mod_id" component={PostCheckpointData} />

      <Route path="/students" component={StudentData} />


      <Route path="/admin/submissions" component={AllSubmissionsData} />
      <Route path="/submissions" component={UserSubmissionsData} />

      <Route path="/dashboard" component={ProfileData}>
        {/*<Route path="resources" component={ProfileResourcesData} />
        <Route path="submissions" component={ProfileSubmissionsData} />
        <Route path="account" component={ProfileAccountData} />*/}
      </Route>

      <Route path="/resources/post" component={PostResourceData} />
      <Route path="/resources" component={ResourcesData}>
        <Route path="all" component={AllResources} />
        <Route path="favorites" component={FavoriteResources} />
        <Route path="categories/:category_name" component={CategoryResources} />
      </Route>

      <Route path="/admin/dashboard" component={AdminDashContainer}>
        <Route path="view/:id" component={OneCourseContainer}>
          <Route path="module/:modId" component={OneModuleContainer} />
        </Route>
        <Route path="post" component={PostCourseData} />
      </Route>


      {/*NEW REFACTOR*/}

      <Route path="/new/resources" component={ResourcesPage} />


      <Route path="/submissions" component={AllSubmissionsData} />

      {/*USER STUFF*/}
      <Route path="/signup" component={UserSignup} />
      <Route path="/login" component={UserSignin} />
      <Route path="/forgot" component={UserForgot} />
      <Route path="/user/reset/:reset_token" component={UserReset} />

    </Route>
  </Router>
), document.getElementById('app'));

// 1) View All Modules
// 2) View One Module
//   - Edit Module
//   - New Module
// 3) View All Submissions
// 4) View My Submissions
