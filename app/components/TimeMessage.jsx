var React = require('react');

var TimeMessage = React.createClass({
  render: function(){

    var {hours, minutes, location} = this.props;
    return(
      <h3>It's {hours}:{minutes} in {location}.</h3>
    );
  }
});

module.exports = TimeMessage;
