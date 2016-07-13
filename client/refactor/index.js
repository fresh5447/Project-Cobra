import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import ModulesData from './modules/ModulesData';
import OneModuleData from './modules/OneModuleData';
import PostModuleData from './modules/PostModuleData';
import OneCheckpointData from './checkpoints/OneCheckpointData';
import UserSignup from './user/Signup';
import UserSignin from './user/UserSignin';
import StudentData from './students/StudentsData.js';
import AllSubmissionsData from './submissions/AllSubmissionsData.js';


require('./stylesheets/main.scss');

render((
  <Router history={browserHistory}>
    { /* Student Stuff*/ }
    <Route path="/" component={App}>
      <IndexRoute component={App} />
      <Route path="/modules" component={ModulesData} />
      <Route path="/modules/:id" component={OneModuleData} />
      <Route path="/modules/:id/checkpoints/:cp_id" component={OneCheckpointData} />
      <Route path="/post/module" component={PostModuleData} />

      <Route path="/students" component={StudentData} />

      <Route path="/submissions" component={AllSubmissionsData} />

      {/*USER STUFF*/}
      <Route path="/signup" component={UserSignup} />
      <Route path="/login" component={UserSignin} />
    </Route>
  </Router>
), document.getElementById('app'));

// 1) View All Modules
// 2) View One Module
//   - Edit Module
//   - New Module
// 3) View All Submissions
// 4) View My Submissions
