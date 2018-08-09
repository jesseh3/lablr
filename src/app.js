var React = require('react');
var styles = require('./styles/main.styl');

var Hello = React.createClass({
  displayName: "Hello",
  render: function() {
    return <div><h1>Hello, {this.props.name}</h1></div>
  }
})

React.render(<Hello name="PEOPLE!"/>, document.body)