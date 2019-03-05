import React from "react";
import "./style.css";
import {withRouter} from 'react-router-dom';
import auth0Client from '../Auth/Auth';


function Nav(props) {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a href="/"><h3 className="navbar-brand" >Gamers United</h3></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/">Home</a>
          <a className="nav-item nav-link" href="/events">Events</a>
          <a className="nav-item nav-link" href="/create_event">Create Event</a>
          <a className="nav-item nav-link" href="/news">News</a>
           
          
          <div className="navbar-nav signInLinks">
          {
            !auth0Client.isAuthenticated() &&
            <button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button>

          }
          {
            auth0Client.isAuthenticated() && 
            <div>
              <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
              <a className="nav-item nav-link" href="/" onClick={() => {signOut()}}>Sign Out</a>
              </div>
          }

          
          
          </div>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Nav);
