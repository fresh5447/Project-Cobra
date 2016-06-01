import React from 'react'

export default React.createClass({
  render() {
    console.log(this.props.params.projectName)
    return (
      <div>
        <h2>{this.props.params.projectName}</h2>
      </div>
    )
  }
})
