import React from 'react'
import ReactMarkdown from 'react-markdown'
import { browserHistory } from 'react-router'

export default React.createClass({
  getInitialState() {
    return {
      title:      null,
      content:    null,
      desc:       null,
      number:     null,
      assignment: null,
      modules:   null,
      module:    null,
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
  updateModule(e) {
    this.setState({ module: e.target.value })
    console.log(this.state.module)
  },
  getModules() {
    $.ajax({
      url: '/api/v1/modules',
      method: 'GET'
    }).done((data) => this.setState({ modules: data }))
  },
  componentWillMount() {
    this.getModules()
  },
  handleCheckpointSubmit(e) {
    e.preventDefault();
    let checkpoint = {
      title:      this.state.title,
      desc:       this.state.desc,
      content:    this.state.content,
      assignment: this.state.assignment,
    };
    var self = this;
    $.ajax({
      url:    '/api/v1/modules/one/' + this.state.module + '/checkpoints',
      method: 'POST',
      data:    checkpoint
    }).done(function(data){
      self.context.sendNotification("Checkpoint Created");
      const path = `/dashboard`
      browserHistory.push(path)
    });
  },
  render() {
    if(this.state.modules){
      let modules = this.state.modules.map(function(item){
        return <option key={item._id} value={item._id} > { item.title } </option>
      });
    return (
      <div>
        <div className="container">
          <form onSubmit={ this.handleCheckpointSubmit }>
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
              <label>module</label>
              <select onChange={this.updateModule} value={ this.state.module } className="form-control" id="exampleSelect1">
                { modules }
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
                  <ReactMarkdown source={this.state.content ? this.state.content : "No content yet..."}/>
                  <ReactMarkdown source={this.state.assignment ? this.state.assignment : "No assignment yet..."} />
            </div>
          </div>
        </div>
      </div>
      )
    }else {
    return (<div> </div>)
  }
  } 
})



