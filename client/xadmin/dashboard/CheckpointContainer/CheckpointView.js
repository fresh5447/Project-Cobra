import React from 'react';
import ReactMarkdown from 'react-markdown';
import NavLink from '../../.././widgets/NavLink';

const CheckpointView = (props) =>
<div>
  <div className="container">
    <div className="card profile-card">
      <div className="card-block lg-card-block">
        <h4 className="card-title">title: {props.checkpoint.title}</h4>
        <h4>live: {props.checkpoint.publish.toString()}</h4>
        <button className="btn btn-primary" onClick={props.switchComp.bind(this, 'edit')}>FUCK IT</button>

      </div>
      <div className="card-block">
        <div className="card card-block inner-checkpoint-cardblock">
          desc: <ReactMarkdown source={ props.checkpoint.desc } />
        </div>
      </div>
      <div className="card-block">
        <div className="card card-block inner-checkpoint-cardblock">
          content: <ReactMarkdown source={ props.checkpoint.content } />
        </div>
      </div>
      <div className="card-block">
        <div className="card card-block inner-checkpoint-cardblock">
          assignment: <ReactMarkdown source={ props.checkpoint.assignment } />
        </div>
      </div>
    </div>


  </div>
</div>;

export default CheckpointView;
