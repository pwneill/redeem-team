import axios from "axios";

export default {
  // Gets all events
  getEvents: function() {
    return axios.get("http://localhost:3001/api/events");
  },
  // Gets the book with the given id
  getEvent: function(id) {
    return axios.get("http://localhost:3001/api/events" + id);
  },
  // Deletes the book with the given id
  deleteEvent: function(id) {
    return axios.delete("http://localhost:3001/api/events" + id);
  },
  // Saves a book to the database
   saveEvent: function(eventData) {
    return axios.post("http://localhost:3001/api/events", eventData);
  },
  espnScrape: function() {
    return axios({
      method: "GET",
      url: "http://www.espn.com/esports/"
    })
  },
  theScoreScrape: function() {
    return axios({
      method: "GET",
      url: "https://www.thescoreesports.com/culture"
    })
  },
  LoLScrape: function() {
    return axios({
      method: "GET",
      url: "https://www.thescoreesports.com/lol/videos"
    })
  },
  DotaScrape: function() {
    return axios({
      method: "GET",
      url: "https://www.thescoreesports.com/dota2/videos"
    })
  },
  CSGOScrape: function() {
    return axios({
      method: "GET",
      url: "https://www.thescoreesports.com/csgo/videos"
    })
  },
  OverwatchScrape: function() {
    return axios({
      method: "GET",
      url: "https://www.thescoreesports.com/overwatch/videos"
    })
  },
  SmashScrape: function() {
    return axios({
      method: "GET",
      url: "https://www.thescoreesports.com/smash/videos"
    })
  },
  StreetFighterScrape: function() {
    return axios({
      method: "GET",
      url: "https://www.thescoreesports.com/streetfighter/videos"
    })
  }
};