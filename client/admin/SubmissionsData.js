import React from 'react'
import SubmissionCard from './SubmissionCard'

export default React.createClass({
  render() {
    const subs = this.props.submissions.map((item)=>{
      return <SubmissionCard username={item.user.local.username} cpTitle={item.checkpoint.title} content={item.content} cpAssignment={item.checkpoint.assignment} />
    });
    return (
      <div>
        { subs }
      </div>
      )
  }
})
