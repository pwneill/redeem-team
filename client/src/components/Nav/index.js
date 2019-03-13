import React from "react";
import "./style.css";
import {withRouter} from 'react-router-dom';
import auth0Client from '../Auth/Auth';


function Nav(props) {
  const logout = () => {
    auth0Client.logout();
    props.history.replace('/');
  }

  const Events = withRouter(({ history }) => (
    <a className="nav-item nav-link" href="" onClick={(e) => {
      e.preventDefault();
      history.push('/events');
    }}>Events</a>
  ))

  const Home = withRouter(({ history }) => (
    <a className="nav-item nav-link" href="" onClick={(e) => {
      e.preventDefault();
      history.push('/');
    }}>Home</a>
  ))

  const Create_event = withRouter(({ history }) => (
    <a className="nav-item nav-link" href="" onClick={(e) => {
      e.preventDefault();
      history.push('/create_event');
    }}>Create Event</a>
  ))

  const News = withRouter(({ history }) => (
    <a className="nav-item nav-link" href="" onClick={(e) => {
      e.preventDefault();
      history.push('/news');
    }}>News</a>
  ))
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a href="/"><h3 className="navbar-brand" >Gamers United</h3></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Home></Home>
          <Events></Events>
          <News></News>
          <Create_event></Create_event>
          
           
          
          <div className="navbar-nav signInLinks">
          {
            !auth0Client.isAuthenticated() &&
            <div id="signIn">
            <button className="btn btn-dark navbarButtons" onClick={auth0Client.signIn}>Sign In</button>
            </div>
          }
          {
            auth0Client.isAuthenticated() && 
            <div id="userInfo">
              <label id="signinIdentity" className="mr-2 text-white">{auth0Client.getProfile().name}</label>
              <br />
              <button className="btn btn-dark navbarSignOut" href="/" onClick={() => {logout()}}>Sign Out</button>
              </div>
          }
          
          </div>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Nav);
