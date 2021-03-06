// We need to require the libraries we'll use to write our code in the 
// below 'CommonJS' style. These live in the node_modules folder
var React = require('react');
var ReactDOM = require('react-dom');

// Write JSX here!
var ClickCounter = React.createClass({

});

// We wait until the document has fully loaded to call ReactDOM.render,
// otherwise document.getElementById('my-component') would look for a
// DOM element that wasn't yet on the page and nothing would render. 
document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<ClickCounter />, document.getElementById('my-component'));
});