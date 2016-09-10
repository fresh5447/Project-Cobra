import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';

import App from './App';

//AUTHENTICATION
import UserSignup from './user/Signup';
import UserSignin from './user/UserSignin';
import UserForgot from './user/Forgot';
import UserReset from './user/Reset';

// ADMIN
import PublishContainer from './admin/containers/PublishContainer';
import PostCourseData from './admin/components/PostCourseData';
import PostResourceData from './admin/components/PostResourceData';




// new admin

require('./stylesheets/main.scss');




render((
  <Router history={browserHistory}>
    { /* Student Stuff*/ }
    <Route path="/" component={App}>

    {/*AUTHENTICATION*/}
    <Route path="/signup" component={UserSignup} />
    <Route path="/login" component={UserSignin} />
    <Route path="/forgot" component={UserForgot} />
    <Route path="/user/reset/:reset_token" component={UserReset} />

    {/*ADMIN PAGES*/}
    <Route path="/admin/publish" component={PublishContainer} >
      <Route path="course" component={PostCourseData} />
      <Route path="resource" component={PostResourceData} />
    </Route>


    </Route>
  </Router>
), document.getElementById('app'));

// 4) View My Submissions
