// modules/NavLink.js
import React from 'react'
import SubmissionForm from './SubmissionForm'
import MySubs from './MySubs'
import PreviewSub from './PreviewSubs'

SubmissionForm.displayName = 'SubmissionForm';
MySubs.displayName = 'MySubs';
PreviewSub.displayName = 'PreviewSub';

export default React.createClass({
  getInitialState() {
    return {
      content: null,
      activeSub: 'mySubs',
      mySubs: null
    }
  },
  contextTypes: {
    sendNotification: React.PropTypes.func.isRequired,
  },
  updateContent(e) {
    this.setState({ content: e.target.value })
    console.log(this.state.content)
  },
  getUserSubs() {
    $.ajax({
      url: '/api/v1/submissions/student-submissions/' + this.props.cp_id,
      method: 'GET',
    }).done((data) => {
      this.setState({ mySubs: data })
    });
  },
  componentWillMount() {
    this.getUserSubs()
  },
  returnSub() {
    if(this.state.activeSub === 'mySubs') {
      return this.state.mySubs ? <MySubs subs={ this.state.mySubs } /> : null
    } else if(this.state.activeSub === 'newSub'){
      return <SubmissionForm updateContent={this.updateContent} submitContent={this.submitContent}/>
    } else if(this.state.activeSub === 'previewSub'){
      return <PreviewSub content={ this.state.content } />
    } else {
      return null;
    }
  },
  setActiveSub(name) {
    console.log("trying to change state", name)
    this.setState({ activeSub: name })
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
    }).done((data) => {
     console.log('SUCCESS', data) 
     this.getUserSubs()
     this.context.sendNotification('submission created')
    })
  },
  render() {
    return (
      <div>
        <div className="btn-group my-btn-group" data-toggle="buttons">
          <label className="btn btn-primary my-primary-btn" onClick={this.setActiveSub.bind(null, 'mySubs')}>
            <input type="radio" autocomplete="off" checked/>My Submissions
          </label>
          <label className="btn btn-primary my-primary-btn" onClick={this.setActiveSub.bind(null, 'newSub')}>
            <input type="radio" autocomplete="off"/> New Submission
          </label>
          <label className="btn btn-primary my-primary-btn" onClick={this.setActiveSub.bind(null, 'previewSub')}>
            <input type="radio" autocomplete="off"/> Preview Submission
          </label>
        </div>
        <div>
          { this.returnSub() }
        </div>
      </div>
      )
    
  }
})
