import React from 'react'
import NavLink from '../modules/NavLink'

export default React.createClass({
  render() {
    let project = this.props.project[0];
    
    let checkpoints = project.checkpoints.map(function(item){
      return (
            <div className="card card-block">
              <h3 className="card-title">{ item.title }</h3>
              <p className="card-text">{ item.desc }</p>
              <NavLink to={"/projects/" + item.title }>VIEW PROJECT</NavLink>
            </div>
        )
    })
    return (
      <div>
        <div className="container">
          <div className="card markdown-card">
            <div className="card-block main-card-block">
              <h4 className="card-title">{ project.title }</h4>
              <h6 className="card-subtitle text-muted">{ project.desc }</h6>
            </div>
            <div className="card-block">
              <h4 className="card-title">checkpoints</h4>
              { checkpoints }
            </div>
          </div>
        </div>
      </div>
      )
  }
})
