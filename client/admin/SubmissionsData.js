import React from 'react'
import SubmissionCard from './SubmissionCard'

SubmissionCard.displayName = 'AdminSubmissionCard'


export default React.createClass({
  contextTypes: {
    sendNotification: React.PropTypes.func.isRequired,
  },
  updateApproval(id, truthyness) {
    const data = { approved: truthyness };
    $.ajax({
      url: '/api/v1/submissions/edit-submission/' + id,
      method: 'PUT',
      data: data
    }).done((data) => {
      this.context.sendNotification('submission approved');
      this.props.loadSubmissions()
    })
  },
  render() {
    console.log(this.props.submissions)

    const subs = this.props.submissions.filter((item) => {
      return item.approved == false
    }).map((item) => {
      return <SubmissionCard key={item._id} assignment={item.checkpoint.assignment}  updateApproval={this.updateApproval} id={item._id} username={item.user.local.username} cpTitle={item.checkpoint.title} content={item.content} cpAssignment={item.checkpoint.assignment} />
    }).reverse();

    return (
      <div>
        { subs }
      </div>
      )
  }
})
