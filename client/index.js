var React = require('react');
var ReactDom = require('react-dom');

require('./stylesheets/main.scss');


var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1> Goodbye, world! </h1>
      </div>
      );
  }
});

ReactDom.render(
  <App />, document.getElementById('app')
);
