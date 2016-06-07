import React from 'react';
import DBModulesCard from './DBModulesCard'

const DBView = (props) => {
  return (
    <div className="container student-card-container">
      
      { /* S_ACCOUNT_DATA */ }  
      <div className="card student-card">
        <div className="card-block main-card-block">
          <h4 className="card-title">Account</h4>
        </div>
        { /* <img data-src="..." alt="Card image"/> */ }
        <div className="card-block">
          <p className="card-text">name: Doug Walter</p>
          <p className="card-text">email: doug@walter.com</p>
          <p className="card-text">linkedin: here it be</p>
          <p className="card-text">github: hereitbe</p>
        </div>
      </div>

      { /* S_COURSE_INFO */ }
      <div className="card student-card">
        <div className="card-block main-card-block">
          <h4 className="card-title">Fullstack JavaScript</h4>
        </div>
        { /* <img data-src="..." alt="Card image"/> */ }
        <div className="card-block">
          <p className="card-text">mentor: Doug Walter</p>
          <p className="card-text">email: doug@walter.com</p>
          <p className="card-text">course begins: 09/12/16</p>
          <p className="card-text">course ends: 12/12/16</p>        
        </div>
      </div>

      { /* S_PROGRESS_DATA */ }
      <div className="card student-card">
        <div className="card-block main-card-block">
          <h4 className="card-title">Progress</h4>
        </div>
        { /* <img data-src="..." alt="Card image"/> */ }
        <div className="card-block">
          <p className="card-text">Time: 45%</p>
          <p className="card-text">Modules: 14/45 </p>
          <p className="card-text">Total Checkpoints: 37</p>
          <p className="card-text">Ahead of schedule</p>        
        </div>
      </div>

      { /* S_NOTIFICATIONS_DATA */ }
      <div className="card student-card">
        <div className="card-block main-card-block">
          <h4 className="card-title">Notifications</h4>
        </div>
        { /* <img data-src="..." alt="Card image"/> */ }
        <div className="card-block">
          <p className="card-text">Some Submission Was Approved</p>
          <p className="card-text">New Resource Posted</p>
          <p className="card-text">New Module Added</p>       
        </div>
      </div>

      { /* S_MODULES_VIEW */ }
      <DBModulesCard modules={ props.modules } />

    </div>
    )
};


export default DBView;