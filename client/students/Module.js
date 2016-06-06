import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>{this.props.params.modName}</h2>
      </div>
    )
  }
})
