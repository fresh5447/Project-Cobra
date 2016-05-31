var React = require('react');
var Snackbar = require('material-ui/lib/snackbar');

var Notifier = React.createClass({
    getInitialState: function() {
      return {
        open: false,
        message: ''
      }
    },
    propTypes: {
      children: React.PropTypes.node.isRequired
    },
    childContextTypes: {
      sendNotification: React.PropTypes.func
    },
    getChildContext: function() {
      return {
          sendNotification: this.sendNotification
        }
    },
    handleRequestClose: function() {
      this.setState({ open: false })
    },
    sendNotification: function(message) {
      this.setState({ open: true, message: message })
    },
    render: function() {
        return (
            <div>
              { this.props.children }
              <Snackbar
               open={this.state.open}
               message={this.state.message}
               autoHideDuration={4000}
               onRequestClose={this.handleRequestClose} />
        </div>
            )
    }

});

module.exports = Notifier;