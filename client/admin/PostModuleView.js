import React from 'react'
import { browserHistory } from 'react-router'

export default React.createClass({
  getInitialState() {
    return {
      title: null,
      desc: null,
      hours: null,
    }
  },
  contextTypes: {
    sendNotification: React.PropTypes.func.isRequired,
  },
  updateTitle(e) {
    this.setState({ title: e.target.value })
  },
  updateDesc(e) {
    this.setState({ desc: e.target.value })
  },
  updateHours(e) {
    this.setState({ hours: e.target.value })
  },
  handleModuleSubmit(e) {
    e.preventDefault();

    let module = {
      title: this.state.title,
      desc:  this.state.desc,
      hours: this.state.hours
    };

    $.ajax({
      url:    '/api/v1/modules',
      method: 'POST',
      data:    module
    }).done((data) => {
      this.context.sendNotification("Project Created");
      const path = `/add-checkpoint`
      browserHistory.push(path)
      console.log('SUCCESS', data);
    });
  },
  render() {
    return (
      <div>
        <div className="container">
          <form onSubmit={ this.handleModuleSubmit }>
            <h4> Create New Module </h4>
            <fieldset className="form-group">
              <label>title</label>
              <input onChange={this.updateTitle} type="text" className="form-control" id="" placeholder="..."/>
            </fieldset>
            <fieldset className="form-group">
              <label>description</label>
              <input onChange={this.updateDesc} type="text" className="form-control" id="" placeholder="..."/>
            </fieldset>
            <fieldset className="form-group">
              <label>estimated hours</label>
              <input type="number" onChange={this.updateHours} className="form-control" id=""></input>
            </fieldset>
            <div className="checkbox">
              <label>
                <input type="checkbox"/> publish
              </label>
            </div>
            <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
          </form>
        </div>
      </div>
      )
  }
})
