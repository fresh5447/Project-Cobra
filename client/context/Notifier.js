var React = require('react');
var Snackbar = require('material-ui/lib/snackbar');

var Notifier = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired
  },
  childContextTypes: {
    sendNotification: React.PropTypes.func
  },
  getInitialState: function() {
    return {
      open: false,
      message: ''
    }
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
             className={'my-snack-bar'}
             bodyStyle={{backgroundColor: '#3E7697', fontSize: '30px !important'}}
             open={this.state.open}
             message={this.state.message}
             autoHideDuration={4000}
             onRequestClose={this.handleRequestClose} />
      </div>
          )
  }

});

module.exports = Notifier;
