import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("localhost3001/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("localhost3001/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("localhost3001/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("localhost3001/api/books", bookData);
  },
  findBooks: function(name) {
    return axios({
        method: "GET",
        url: "https://www.googleapis.com/books/v1/volumes?q=" + name + "&orderBy=relevance&key=AIzaSyAt7wN2sdvRMRkEX4NeR2nivYfLm9OevPs"
    });
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
  }
};