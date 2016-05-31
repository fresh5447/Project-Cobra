import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App'
import Repos from './Repos'
import Repo from './Repo'
import Home from './Home'
import Dashboard from './students/Dashboard'
import PostContent from './admin/PostContentView'
import PostProject from './admin/PostProjectView'
import Login from './user/Login'
import Signup from './user/Signup'
import Logout from './user/Logout'

require('./stylesheets/main.scss')

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/dashboard" component={Dashboard}/>
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