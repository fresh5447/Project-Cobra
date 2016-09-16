import React from 'react';
import { browserHistory } from 'react-router';
import PostModuleForm from './PostModuleForm';

class StatusButton extends React.Component {
  constructor(props, context) {
    super(props, context);


    this.state = {
      title: null,
      user: null
    };

  }

  showCorrectBtn() {
    if (this.props.status === "complete") {
      return <button className="btn btn-primary status-btn">complete</button>;
    } else if (this.props.status === "incomplete") {
      // return <button onClick={this.props.makeNewRequest.bind(this, this.props.cpId)}>request to complete</button>;
      return <button className="btn btn-primary status-btn">incomplete</button>;

    } else {
      return <button>pending</button>;
    }
  }

  render() {
    return this.showCorrectBtn()
  }

}

StatusButton.displayName = StatusButton;
StatusButton.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};
export default StatusButton;
