// modules/NavLink.js
import React from 'react'
import SubmissionForm from './SubmissionForm'

export default React.createClass({
  getInitialState() {
    return {
      content: null
    }
  },
  updateContent(e) {
    this.setState({ content: e.target.value })
    console.log(this.state.content)
  },
  submitContent() {
    console.log("about to submit content in sub data")
    const data = {
      content: this.state.content,
      checkpoint: this.props.cp_id
    };
    $.ajax({
      url: '/api/v1/submissions',
      method: 'POST',
      data: data
    }).done((data) => console.log('SUCCESS', data))
  },
  render() {
    return <SubmissionForm updateContent={this.updateContent} submitContent={this.submitContent}/>
  }
})
