var React = require('react');
var TimeForm = require('TimeForm');
var TimeMessage = require('TimeMessage');
var openTimezone = require('openTimezone');

var Timezone = React.createClass({
  getInitialState: function () {
    return {
        location: 'Miami',
        datetime: '2017-11-06 10:50'
        // hours: 10,
        // minutes: 50
    }
  },
  handleSearch: function (location) {
    var that = this;

    openTimezone.getTemp(location).then(function(localTime){
      that.setState({
        location: location,
        datetime: localTime
      });

    }, function(errorMessage){
      alert(errorMessage);
    });
    // this.setState({
    //   location: location,
    //   hours: 3,
    //   minutes: 30
    // });
  },
  render: function(){
    var {datetime, location} = this.state;

    return(
      <div>
        <h3> Timezone Component </h3>
        <TimeForm onSearch={this.handleSearch}/>
        <TimeMessage datetime={datetime} location={location}/>
      </div>
    )
  }
});

module.exports = Timezone;
