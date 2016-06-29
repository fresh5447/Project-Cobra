import React from 'react'
import NavLink from '../modules/NavLink'

NavLink.displayName = 'NavLink';


export default React.createClass({
  render() {
    return (
      <div className="card student-card">
        <div className="card-block main-card-block">
          <h4 className="card-title">{ this.props.title }</h4>
          <div className="row">
            <div className="col-xs-3">
              <h6 className="card-subtitle text-muted pull-right"><i className="fa fa-clock-o" aria-hidden="true"></i> { this.props.hours } hours</h6>
            </div>
            <div className="col-xs-3">
              <h6 className="card-subtitle text-muted pull-right">34 checkpoints</h6>
            </div>
            <div className="col-xs-3">
              <h6 className="card-subtitle text-muted pull-right"><i className="fa fa-check-circle-o" aria-hidden="true"></i> complete</h6>
            </div>
          </div>

        </div>
        { /* <img data-src="..." alt="Card image"/> */ }
        <div className="card-block">
          <NavLink to={"/dashboard/" + this.props.title }>View Module</NavLink>
          <p className="card-text">{ this.props.desc }</p>
        </div>
      </div>
      )
  }
})
