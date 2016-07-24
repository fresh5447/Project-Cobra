import React from 'react';
import ReactMarkdown from 'react-markdown';


const ViewResource = (props) => {
  const item = props.resource;
  return (
    <div>
      <div className="container">
        <div className="card markdown-card">
          <div className="card-block main-card-block checkpoint-cardblock">
            <h2 className="card-title"> {item.title} </h2>

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
