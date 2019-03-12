import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Launch from "./pages/launch";
import News from "./pages/news";
import createEvent from "./pages/createEvent";
import Events from "./pages/viewEvents";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import newUser from "./pages/newUser";
import signIn from "./pages/signin";
import Artists from "./pages/artists";
import Register from "./pages/register";
import Details from "./pages/details";
// import signIn from "./pages/signin"
import Callback from "./callback.js"
// import Profile from "./pages/Profile/profile"
import "./App.css"
import auth0Client from "./components/Auth/Auth"
import User from "./pages/user";


class App extends Component {

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
            <Route exact path="/signIn" component={signIn} lock={this.lock}/>
            {/* <Route exact path ="/profile" component={Profile}  /> */}
            <Route exact path="/artists" component={Artists} />
            <Route path="/register/:id" component={Register} />
            <Route path="/details/:id" component={Details} />
            <Route path="/user/:id" component={User} />
            {/* <Route exact path component={signIn} lock={this.lock}/> */}
            {/* <Route exact path ="/profile" component={Profile}  /> */}
            <Route exact path="/callback" component={Callback} />
            <Route component={NoMatch} />
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    );
  }


}

export default App;
