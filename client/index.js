import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App'
import Repos from './Repos'
import Repo from './Repo'
import SingleModuleData from './students/SingleModuleData'
import SingleCheckpointData from './students/SingleCheckpointData'
import Home from './Home'
import DashboardData from './students/DashboardData'
import AdminDashData from './admin/DashboardData'
import PostContent from './admin/PostCheckpointView'
import PostModule from './admin/PostModuleView'
import Login from './user/Login'
import Signup from './user/Signup'

import ProfileData from './students/profile/ProfileData';

import TestDBData from './students/DBData'

App.displayName = 'App';
AdminDashData.displayName = 'AdminDashData';
SingleModuleData.displayName = 'SingleModuleData';
DashboardData.displayName = 'DashboardData';
SingleCheckpointData.displayName = 'SingleCheckpointData';
PostContent.displayName = 'PostContent';
PostModule.displayName = 'PostModule';
Signup.displayName = 'Signup';
Login.displayName = 'Login';

require('./stylesheets/main.scss')

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>

      <Route path="/test" component={TestDBData}/>

      <Route path="/profile" component={ProfileData}/>

      <Route path="/admin-dashboard" component={AdminDashData}/>

      <Route path="/dashboard" component={TestDBData}/>

      <Route path="/dashboard/projects/:id" component={SingleModuleData}/>
      <Route path="/dashboard/projects/checkpoints/:cp_id" component={SingleCheckpointData}/>

      <Route path="/modules/:checkpointName" component={SingleCheckpointData}/>

      <Route path="/add-checkpoint" component={PostContent}/>
      <Route path="/add-project" component={PostModule}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={Login}/>
    </Route>
  </Router>
), document.getElementById('app'))





{ /*
      nested route example

      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
  */ }
