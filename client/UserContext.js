var React = require('react');

var GetUser = React.createClass({
    getInitialState: function() {
      return {
        user: { name: "Douglas", role: "student"}
      }
    },
    propTypes: {
      children: React.PropTypes.node.isRequired
    },
    childContextTypes: {
      getUser: React.PropTypes.func
    },
    getChildContext: function() {
      return {
          getUser: this.getUser
        }
    },
    getUser: function(cb) {
      return cb(this.state.user);
    },
    render: function() {
        return (
            <div>
              { this.props.children }
            </div>
            )
    }

});

module.exports = GetUser;