import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './student/App';
import Profile from './student/profile/ProfileData';
import Module from './student/modules/Module';
import Modules from './student/modules/Modules';
import Dashboard from './student/dashboard/DashboardData';

require('./stylesheets/main.scss');

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/modules" component={Modules}>
        <Route path="/modules/:moduleName" component={Module} />
      </Route>
      <Route path="/profile" component={Profile} />
    </Route>
  </Router>
), document.getElementById('app'));
