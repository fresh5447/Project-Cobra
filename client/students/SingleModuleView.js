import React from 'react'
import NavLink from '../modules/NavLink'

NavLink.displayName = 'NavLink';

export default React.createClass({
  render() {
    let module = this.props.module[0];
    
    let checkpoints = module.checkpoints.map(function(item){
      return (
            <div key={item._id} className="card card-block">
              <h3 className="card-title">{ item.title }</h3>
              <p className="card-text">{ item.desc }</p>
              <NavLink to={"/modules/" + item.title }>VIEW module</NavLink>
            </div>
        )
    })
    return (
      <div>
        <div className="container">
          <div className="card markdown-card">
            <div className="card-block main-card-block">
              <h4 className="card-title">{ module.title }</h4>
              <h6 className="card-subtitle text-muted">{ module.desc }</h6>
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