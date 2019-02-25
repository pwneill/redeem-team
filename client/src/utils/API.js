import axios from "axios";

export default {
  // Gets all events
  getEvents: function() {
    return axios.get("/api/events");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("https://obscure-harbor-14924.herokuapp.com/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("https://obscure-harbor-14924.herokuapp.com/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(eventData) {
    return axios.post("/create_events", eventData);
  },
  findBooks: function(name) {
    return axios({
        method: "GET",
        url: "https://www.googleapis.com/books/v1/volumes?q=" + name + "&orderBy=relevance&key=AIzaSyAt7wN2sdvRMRkEX4NeR2nivYfLm9OevPs"
    });
  }
};