var React = require('react');

var About = React.createClass({
  render: function(){
    return(
      <div>
        <div>
          <h1 className="text-center page-title"> About Page </h1>
        </div>
        <div>
          <p>
            Welcome to the About page. This application is build on React!
          </p>
        </div>
      </div>

    );
  }
});

module.exports = About;
