var React = require('react');

var TimeMessage = React.createClass({
  render: function(){

    var {datetime, location} = this.props;
    return(
      <h3 className="text-center">It's {datetime} in {location}.</h3>
    );
  }
});

module.exports = TimeMessage;
