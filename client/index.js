import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

{ /* Student Stuff*/}
import StudentApp from './student/App';
import Profile from './student/profile/ProfileData';
import Module from './student/modules/Module';
import Modules from './student/modules/Modules';
import Dashboard from './student/dashboard/DashboardData';

{ /* Admin Stuff*/}
import AdminApp from './admin/App';
import AdminDashboard from './admin/dashboard/DashboardData';
import Students from './admin/students/StudentData';
import Submissions from './admin/submissions/SubmissionData';
import AdminModule from './admin/module/ModuleData';
import AdminCheckpointData from './admin/checkpoints/CheckpointData';

require('./stylesheets/main.scss');

render((
  <Router history={browserHistory}>
    { /* Student Stuff*/ }
    <Route path="/" component={StudentApp}>
      <IndexRoute component={Dashboard} />
      <Route path="/modules" component={Modules}>
        <Route path="/modules/:moduleName" component={Module} />
      </Route>
      <Route path="/profile" component={Profile} />
    </Route>
    <Route path="/admin" component={AdminApp}>
      { /* Admin Stuff*/ }
      <IndexRoute component={AdminDashboard} />
      <Route path="/admin/students" component={Students} />
      <Route path="/admin/submissions" component={Submissions} />
      <Route path="/admin/modules/:id" component={AdminModule} />
      <Route path="/admin/checkpoints/:id" component={AdminCheckpointData} />
    </Route>
  </Router>
), document.getElementById('app'));
