import React from 'react'

export default React.createClass({
  render() {
    console.log("students made it", this.props.students);
    return (<div> Found Students Data </div>)
  }
})
