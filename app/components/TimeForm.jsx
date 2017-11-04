var React = require('react');

var TimeForm = React.createClass({
  render: function () {
    return (
        <div>
          <form>
            <input type="text"/>
            <button>Get Time</button>
          </form>
        </div>
    );
  }
});

module.exports = TimeForm;
