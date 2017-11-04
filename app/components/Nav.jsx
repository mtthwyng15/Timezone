var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return(
      <div>
        <h2> Nav Component </h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}> Timezone </IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}> About </Link>
      </div>
    );
  }
});

module.exports = Nav;
