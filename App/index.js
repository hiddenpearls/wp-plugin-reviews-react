var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css')

var App = require('./components/App')

for( var i = 0; i < document.getElementsByClassName("app").length; i++ ) {
  var _div =  document.getElementsByClassName('app')[i];
  ReactDOM.render( <App slug={_div.dataset.slug} />, _div );

}
