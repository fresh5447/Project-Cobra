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
      $.ajax({
        url: 'getUser',
        method: 'GET'
      }).done(function(data){
        return cb(data)
      })
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