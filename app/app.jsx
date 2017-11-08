var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timezone = require('Timezone');
var About = require('About');

require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path ="/" component={Main}>
    <Route path="about" component={About}/>
      <IndexRoute component={Timezone}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
