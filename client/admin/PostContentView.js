import React from 'react'
import ReactMarkdown from 'react-markdown'

export default React.createClass({
  getInitialState() {
    return {
      title:      null,
      content:    null,
      desc:       null,
      number:     null,
      assignment: null,
      projects:   null,
      project:    null,
    }
  },
  contextTypes: {
    sendNotification: React.PropTypes.func.isRequired,
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
  updateupdateProject(e) {
    this.setState({ project: e.target.value })
    console.log(this.state.project)
  },
  getProjects() {
    $.ajax({
      url: '/api/v1/projects',
      method: 'GET'
    }).done((data) => this.setState({ projects: data }))
  },
  componentWillMount() {
    this.getProjects()
  },
  handleCheckpointSubmit(e) {
    e.preventDefault();
    let checkpoint = {
      title:      this.state.title,
      desc:       this.state.desc,
      content:    this.state.content,
      assignment: this.state.assignment
    };
    var self = this;
    $.ajax({
      url:    '/api/v1/projects',
      method: 'POST',
      data:    project
    }).done(function(data){
      self.context.sendNotification("Project Created");
      console.log('SUCCESS', data);
    });
  },
  render() {
    if(this.state.projects){
      let projects = this.state.projects.map(function(item){
        return <option value={item._id} > { item.title } </option>
      });
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
              <select onChange={ this.updateProject } className="form-control" id="exampleSelect1">
                { projects }
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
          <div className="card markdown-card">
            <div className="card-block main-card-block">
              <h4 className="card-title">Markdown Previewer</h4>
              <h6 className="card-subtitle text-muted">Live preview of how the Markdown text will display</h6>
            </div>
            <div className="card-block">
                  <h5 className="card-title">{this.state.title ? this.state.title : "No title yet..."}</h5>
                  <p className="card-text"> <ReactMarkdown source={this.state.content ? this.state.content : "No content yet..."}/> </p>
                  <p className="card-text"> <ReactMarkdown source={this.state.assignment ? this.state.assignment : "No assignment yet..."} /> </p>
            </div>
          </div>
        </div>
      </div>
      )
    }else {
    return (<div> Loading </div>)
  }
  } 
})



