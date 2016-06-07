import React from 'react'

export default React.createClass({
  render() {
    console.log("modules made it", this.props.modules);
    return (<div> Found Modules Data </div>)
  }
})
