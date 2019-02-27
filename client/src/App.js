import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Launch from "./pages/launch";
import News from "./pages/news";
import createEvent from "./pages/createEvent";
import Events from "./pages/viewEvents";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import newUser from "./pages/newUser"
import login from "./pages/login"
import Auth0Lock from "auth0-lock"
import "./App.css"

var App = React.createClass({

  componentWillMount: function () {
    this.lock = new Auth0Lock('YOUR_CLIENT_ID', 'YOUR_CLIENT_DOMAIN');
  },

  render() {

    return (
      <Router>
        <div>
          <Nav lock={this.lock} />
          <Switch>
            <Route exact path="/" component={Launch} />
            <Route exact path="/news" component={News} />
            <Route exact path="/create_event" component={createEvent} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/newUser" component={newUser} />
            <Route exact path="/login" component={login} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }


})

export default App;
