import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <div className="container">
          <form>
            <h4> Create New Checkpoint </h4>
            <fieldset className="form-group">
              <label>title</label>
              <input type="text" className="form-control" id="" placeholder="..."/>
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
              <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
            </fieldset>
            <div className="checkbox">
              <label>
                <input type="checkbox"/> publish
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
      )
  }
})
