// modules/NavLink.js
import React from 'react'

export default React.createClass({
  handleSubmit(e) {
    e.preventDefault()
    console.log("found the thing in the form")
    this.props.submitContent()
  },
  render() {
    return (
      <div className="card-block">
        <div className="card card-block inner-checkpoint-cardblock">
          <h4 className="card-title">Submit Assignment</h4>

          <form onSubmit={this.handleSubmit}>
            <fieldset className="form-group">
              <label>Post your assignement, or a link to your assignment here. </label>
              <textarea onChange={this.props.updateContent} className="form-control" id="exampleTextarea" rows="3" placeholder="I am Markdown friendly"></textarea>
            </fieldset>
            <button type="submit" className="btn btn-primary my-primary-btn">Submit</button>
          </form>

        </div>
      </div>
      )
  }
})
