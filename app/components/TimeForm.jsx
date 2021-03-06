var React = require('react');

var TimeForm = React.createClass({

  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="search" ref="location" placeholder="Enter a City"/>
            <button className="button expanded"> Get Timezone </button>
          </form>
        </div>
    );
  }
});

module.exports = TimeForm;

// type="button" className="btn btn-success"
