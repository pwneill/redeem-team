import axios from "axios";

export default {
  // Gets all events
  getEvents: function() {
    return axios.get("http://localhost:3001/api/events");
  },
  // Gets the book with the given id
  getEvent: function(id) {
    return axios.get("http://localhost:3001/api/events/" + id);
  },
  // Deletes the book with the given id
  deleteEvent: function(id) {
    return axios.delete("http://localhost:3001/api/events" + id);
  },
  register: function(id, eventData) {
    return axios.post("http://localhost:3001/api/events/" + id, eventData)
  },
  // Saves a book to the database
   saveEvent: function(eventData) {
    return axios.post("http://localhost:3001/api/events", eventData);
  }

};
