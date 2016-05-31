import React from 'react'
import ReactMarkdown from 'react-markdown'

export default React.createClass({
  getInitialState() {
    return {
      title: null,
      content: null,
      desc: null,
      number: null,
    }
  },
  updateTitle(e) {
    this.setState({ title: e.target.value })
  },
  updateContent(e) {
    this.setState({ content: e.target.value })
  },
  updateDesc(e) {
    this.setState({ desc: e.target.value })
  },
  updateAssignment(e) {
    this.setState({ assignment: e.target.value })
  },
  render() {
    return (
      <div>
        <div className="container">
          <form>
            <h4> Create New Checkpoint </h4>
            <fieldset className="form-group">
              <label>title</label>
              <input onChange={this.updateTitle} type="text" className="form-control" id="" placeholder="..."/>
            </fieldset>
            <fieldset className="form-group">
              <label>description</label>
              <input onChange={this.updateDesc} type="text" className="form-control" id="" placeholder="..."/>
            </fieldset>
            <fieldset className="form-group">
              <label>project</label>
              <select className="form-control" id="exampleSelect1">
                <option>Project One</option>
                <option>Project Two</option>
                <option>Project Three</option>
                <option>Project Four</option>
                <option>Project Five</option>
              </select>
            </fieldset>
            <fieldset className="form-group">
              <label>content</label>
              <textarea onChange={this.updateContent} className="form-control" id="exampleTextarea" rows="3"></textarea>
            </fieldset>
            <fieldset className="form-group">
              <label>assignment</label>
              <textarea onChange={this.updateAssignment} className="form-control" id="exampleTextarea" rows="3"></textarea>
            </fieldset>
            <div className="checkbox">
              <label>
                <input type="checkbox"/> publish
              </label>
            </div>
            <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
          </form>
          <div className="card card-block">
            <h4> Markdown Previewer </h4>
            <div className="">
              <h5 className="card-title">{this.state.title ? this.state.title : "No title yet..."}</h5>
              <p className="card-text"> <ReactMarkdown source={this.state.content ? this.state.content : "No content yet..."} /> </p>
              <p className="card-text"> <ReactMarkdown source={this.state.assignment ? this.state.assignment : "No assignment yet..."} /> </p>
            </div>
          </div>
        </div>
      </div>
      )
  }
})
