import React from 'react';
import Snackbar from 'material-ui/lib/snackbar';

class Feedback extends React.Component {
  constructor(props) {
    super(props);

    this.submitFeedback = this.submitFeedback.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
    this.showOrHideBtn = this.showOrHideBtn.bind(this);

    this.state = {
      content: null
    };
  }


  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }


  submitFeedback(e) {
    $('#myModal').modal('hide');
    e.preventDefault();
    const goods = {
      content: this.state.content,
      page: window.location.href
    };
    $.ajax({
      url: '/api/v1/feedback',
      method: 'POST',
      data: goods
    }).done((msg) => {
      this.context.sendNotification('thank you for your feedback');
      $('#myModal').modal('hide');
    });
  }
  showOrHideBtn() {
    if (window.location.href === "http://localhost:3000/" || "http://localhost:3000/signup/" || "http://localhost:3000/login") {
      return null;
    } else {
      return (
        <div className='fb-contaienr'>
          <button type="button" className="btn btn-primary btn-lg submit-btn feedback-btn" data-toggle="modal" data-target="#myModal">
            Submit Feedback
          </button>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        { this.props.children }
        <div className='fb-contaienr'>
          <button type="button" className="btn btn-primary btn-lg submit-btn feedback-btn" data-toggle="modal" data-target="#myModal">
            Submit Feedback
          </button>
        </div>
        <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="myModalLabel">Bug or Feedback</h4>
              </div>
              <div className="modal-body">
                Please explain if the bug is specific to the content or the application. If content, specify if it is an error, or request more information for clarity.
              </div>

              <form onSubmit={this.submitFeedback}>
                <fieldset className="form-group">
                  <textarea onChange={ (event) => this.onFieldChange('content', event.target.value)}
                    className="form-control"rows="3"
                    placeholder="..what sucks and why"
                  ></textarea>
                </fieldset>
                <button type="submit" className="btn btn-primary my-primary-btn fb-close">Save</button>
                <button type="button" className="btn btn-primary my-primary-btn fb-close" data-dismiss="modal">Cancel</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }

}

Feedback.propTypes = {
  children: React.PropTypes.node.isRequired
};

Feedback.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired,
};

export default Feedback;
