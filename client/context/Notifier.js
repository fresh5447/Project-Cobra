import React from 'react';
import Snackbar from 'material-ui/lib/snackbar';

class Notifier extends React.Component {
  constructor(props) {
    super(props);

    this.sendNotification = this.sendNotification.bind(this);

    this.state = {
      open: false,
      message: ''
    };
  }

  getChildContext() {
    return {
      sendNotification: this.sendNotification
    };
  }

  handleRequestClose = () => this.setState({ open: false });

  sendNotification = (message) => this.setState({ open: true, message: message });

  render() {
    return (
      <div>
        { this.props.children }
        <Snackbar
          className={'my-snack-bar'}
          bodyStyle={{ backgroundColor: '#3E7697', fontSize: '30px !important' }}
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }

}

Notifier.propTypes = {
  children: React.PropTypes.node.isRequired
};

Notifier.childContextTypes = {
  sendNotification: React.PropTypes.func
};

export default Notifier;
