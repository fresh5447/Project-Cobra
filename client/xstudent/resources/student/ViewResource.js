import React from 'react';
import ReactMarkdown from 'react-markdown';


const ViewResource = (props) => {
  const vid = props.resource.video ? (
    <div>
      <video width="100%" controls poster="/images/main-logo.gif">
        <source src={props.resource.video} type="video/webm"/>
        <source src={props.resource.video} type="video/mp4"/>
        <source src={props.resource.video} type="video/ogg"/>
        Your browser does not support HTML5 video.
      </video>
    </div>
  ) : null;
  const item = props.resource;
  return (
    <div>
      <div className="container">
        <div className="card markdown-card">
          <div className="card-block main-card-block checkpoint-cardblock">
            <h5 className="card-title"> {item.title} </h5>

          </div>
          <div className="card-block">
            <div className="card card-block inner-checkpoint-cardblock">
              { vid }
            </div>
          </div>
          <div className="card-block">
            <div className="card card-block inner-checkpoint-cardblock">
              <ReactMarkdown source={item.content} />
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}



ViewResource.displayName = ViewResource;
export default ViewResource;
