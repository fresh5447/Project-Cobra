import React from 'react'

export default React.createClass({
  render() {
    console.log("submissions made it", this.props.submissions);
    return (<div> Found Submissions Data </div>)
  }
})
