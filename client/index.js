import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App'
import Repos from './Repos'
import Repo from './Repo'
import SingleProjectData from './students/SingleProjectData'
import SingleCheckpointData from './students/SingleCheckpointData'
import Home from './Home'
import DashboardData from './students/DashboardData'
import PostContent from './admin/PostCheckpointView'
import PostProject from './admin/PostProjectView'
import Login from './user/Login'
import Signup from './user/Signup'
import Logout from './user/Logout'

require('./stylesheets/main.scss')

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>

      <Route path="/dashboard" component={DashboardData}/>

      <Route path="/dashboard/:projectName" component={SingleProjectData}/>

      <Route path="/projects/:checkpointName" component={SingleCheckpointData}/>

      <Route path="/add-checkpoint" component={PostContent}/>
      <Route path="/add-project" component={PostProject}/>
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