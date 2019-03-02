import axios from "axios";

export default {
  // Gets all events
  getEvents: function() {
    return axios.get("https://powerful-beyond-98279.herokuapp.com/api/events");
  },
  // Gets the book with the given id
  getEvent: function(id) {
    return axios.get("https://powerful-beyond-98279.herokuapp.com/api/events" + id);
  },
  // Deletes the book with the given id
  deleteEvent: function(id) {
    return axios.delete("https://powerful-beyond-98279.herokuapp.com/api/events" + id);
  },
  // Saves a book to the database
   saveEvent: function(eventData) {
    return axios.post("https://powerful-beyond-98279.herokuapp.com/api/events", eventData);
  },
  espnScrape: function() {
    return axios({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/https://www.espn.com/esports/"
    })
  },
  theScoreScrape: function() {
    return axios({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/https://www.thescoreesports.com/culture"
    })
  },
  LoLScrape: function() {
    return axios({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/https://www.thescoreesports.com/lol/videos"
    })
  },
  DotaScrape: function() {
    return axios({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/https://www.thescoreesports.com/dota2/videos"
    })
  },
  CSGOScrape: function() {
    return axios({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/https://www.thescoreesports.com/csgo/videos"
    })
  },
  OverwatchScrape: function() {
    return axios({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/https://www.thescoreesports.com/overwatch/videos"
    })
  },
  SmashScrape: function() {
    return axios({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/https://www.thescoreesports.com/smash/videos"
    })
  },
  StreetFighterScrape: function() {
    return axios({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/https://www.thescoreesports.com/streetfighter/videos"
    })
  },
  PS4Scrape: function() {
    return axios({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/https://www.metacritic.com/browse/games/release-date/coming-soon/ps4/date"
    })
  },
  XBoneScrape: function() {
    return axios({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/https://www.metacritic.com/browse/games/release-date/coming-soon/xboxone/date"
    })
  },
  PCScrape: function() {
    return axios({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/https://www.metacritic.com/browse/games/release-date/coming-soon/pc/date"
    })
  },
  SwitchScrape: function() {
    return axios({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/https://www.metacritic.com/browse/games/release-date/coming-soon/switch/date"
    })
  }
};