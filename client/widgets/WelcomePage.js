import React from 'react';

const WelcomePage = () =>
<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <div>
      <img src="/images/main-logo.gif" className="landing-img" />
      <h1 className="center-text">CodeRange</h1>
    </div>
    <div className="row">
      <div className="col-sm-4">
        <h3>Resources</h3>
        <p>Browse a library of resources relevant to your training.</p>
      </div>
      <div className="col-sm-4">
        <h3>Modules</h3>
        <p>Content is broken down into core modules.</p>
      </div>
      <div className="col-sm-4">
        <h3>Checkpoints</h3>
        <p>Knowledge checkpoints throught the modules, keep you on track.</p>
      </div>
    </div>
  </div>
</div>;

export default WelcomePage;
