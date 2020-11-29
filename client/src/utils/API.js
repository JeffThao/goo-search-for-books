import axios from "axios";

// const BASEURL = "https://www.omdbapi.com/?t=";
// const APIKEY = "&apikey=AIzaSyDtSbwqCRi1p5c_avBsJmd65_6na1UjyH8";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
