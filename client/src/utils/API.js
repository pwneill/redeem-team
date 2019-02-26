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
    return axios.post("http://localhost3001/create_events", eventData);
  },
  // findBooks: function(name) {
  //   return axios({
  //       method: "GET",
  //       url: "https://www.googleapis.com/books/v1/volumes?q=" + name + "&orderBy=relevance&key=AIzaSyAt7wN2sdvRMRkEX4NeR2nivYfLm9OevPs"
  //   });
  // }
};