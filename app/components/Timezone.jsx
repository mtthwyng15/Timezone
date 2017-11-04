var React = require('react');
var TimeForm = require('TimeForm');
var TimeMessage = require('TimeMessage');

var Timezone = React.createClass({
  render: function(){
    return(
      <div>
        <h3> Timezone Component </h3>
        <TimeForm/>
        <TimeMessage/>
      </div>
    )
  }
});

module.exports = Timezone;
