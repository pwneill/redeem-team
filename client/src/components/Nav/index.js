import React from "react";
import "./style.css";

function Nav() {
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
        </div>
      </div>
    </nav>
  );
}

export default Nav;
