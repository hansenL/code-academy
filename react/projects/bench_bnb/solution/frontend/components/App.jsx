var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');

var App = React.createClass({
  
  componentDidMount: function () {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },
  
  greeting: function(){
    if (SessionStore.isUserLoggedIn()) {
      var numFavoriteBenches = SessionStore.currentUser().favorite_benches.length;
      
    	return (
    		<hgroup>
    			<h2>Hi, {SessionStore.currentUser().username}!</h2>
    			<input type="submit" value="logout" onClick={ SessionApiUtil.logout } />
    			<h3>You have {numFavoriteBenches} favorite benches!</h3>
    		</hgroup>
    	);
    } else if (["/login", "/signup"].indexOf(this.props.location.pathname) === -1) {
      return (
        <nav>
          <Link to="/login" activeClassName="current">Login</Link>
          &nbsp;or&nbsp;
          <Link to="/signup" activeClassName="current">Sign up!</Link>
        </nav>
      );
    }
  },
  
  render: function() {
    return (
      <div>
        <header>
          <h1>Bench BnB</h1>
          { this.greeting() }
        </header>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;