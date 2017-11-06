var React = require('react');
var TimeForm = require('TimeForm');
var TimeMessage = require('TimeMessage');

var Timezone = React.createClass({
  getInitialState: function () {
    return {
        location: 'Miami',
        hours: 10,
        minutes: 50
    }
  },
  handleSearch: function (location) {
    this.setState({
      location: location,
      hours: 3,
      minutes: 30
    });
  },
  render: function(){
    var {hours, minutes, location} = this.state;

    return(
      <div>
        <h3> Timezone Component </h3>
        <TimeForm onSearch={this.handleSearch}/>
        <TimeMessage hours={hours} minutes={minutes} location={location}/>
      </div>
    )
  }
});

module.exports = Timezone;
