import React from 'react';

const CheckPoints = (props) => {
  if (!props.checkpoints || props.checkpoints.length <= 0) {
    return (
      <div> No CheckPoints </div>
    );
  } else {
    var cps = props.checkpoints.map((item) => {
      return (

        <div>
          <div className="card card-block">
          <h3> {item.title} </h3>
          <p> {item.content}</p>
        </div>
      </div>
    );
    });
    return (<div> checkpoints: { props.checkpoints.length } </div>)
  }
};

export default CheckPoints;
