import axios from "axios";

export default {
  // Gets all books
  getEvents: function() {
    return axios.get("localhost:3001/api/events");
  },
  // Gets the book with the given id
  getEvent: function(id) {
    return axios.get("localhost:3001/api/events/" + id);
  },
  // Deletes the book with the given id
  deleteEvent: function(id) {
    return axios.delete("localhost:3001/api/events/" + id);
  },
  // Saves a book to the database
  saveEvent: function(eventData) {
    return axios.post("http://localhost:3001/api/events", eventData);
  }
};
