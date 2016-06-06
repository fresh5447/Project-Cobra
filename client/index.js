import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router'
import App from './App'
import Repos from './Repos'
import Repo from './Repo'
import SingleProjectData from './students/SingleProjectData'
import SingleCheckpointData from './students/SingleCheckpointData'
import Home from './Home'
import StudentDashData from './students/StudentDashData'
import DashboardData from './students/DashboardData'
import Dashboard from './students/Dashboard'
import Modules from './students/Modules'
import Module from './students/Module'
import AdminDashData from './admin/DashboardData'
import PostContent from './admin/PostCheckpointView'
import PostProject from './admin/PostProjectView'
import Login from './user/Login'
import Signup from './user/Signup'

App.displayName = 'App';
AdminDashData.displayName = 'AdminDashData';
SingleProjectData.displayName = 'SingleProjectData';
DashboardData.displayName = 'DashboardData';
SingleCheckpointData.displayName = 'SingleCheckpointData';
PostContent.displayName = 'PostContent';
PostProject.displayName = 'PostProject';
Signup.displayName = 'Signup';
Login.displayName = 'Login';

require('./stylesheets/main.scss')



render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="dashboard" thing={"something"} component={Dashboard}>
        <Route path="modules" component={DashboardData}>
          <Route path=":modId/checkpoints" component={Module}>
            <Route path=":modName/checkpoints/:checkpointID" component={Module}/>
          </Route>
        </Route>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'));








{ /* 
      nested route example

      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>


      <IndexRoute component={Home}/>
      <Route path="/add-checkpoint" component={PostContent}/>
      <Route path="/add-project" component={PostProject}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={Login}/>
  */ }