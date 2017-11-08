var React = require('react');
var TimeForm = require('TimeForm');
var TimeMessage = require('TimeMessage');
var openTimezone = require('openTimezone');

var Timezone = React.createClass({
  getInitialState: function () {
    return {
        isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({isLoading: true});

    openTimezone.getTemp(location).then(function(localTime){
      that.setState({
        location: location,
        datetime: localTime,
        isLoading: false
      });

    }, function(errorMessage){
      that.setState({isLoading: false});
      alert(errorMessage);
    });
  },
  render: function(){
    var {isLoading, datetime, location} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching date and time</h3>;
      } else if (datetime && location) {
        return <TimeMessage datetime={datetime} location={location}/>;
      }
    }

    return(
      <div>
        <h1 className="text-center page-title" > Get Timezone </h1>
        <TimeForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Timezone;
