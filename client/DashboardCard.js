import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="card student-card">
        <div className="card-block">
          <h4 className="card-title">Card title</h4>
          <h6 className="card-subtitle text-muted">Support card subtitle</h6>
        </div>
        <img data-src="..." alt="Card image"/>
        <div className="card-block">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
      )
  }
})
