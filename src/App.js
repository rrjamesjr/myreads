import React from "react"
import "./App.css"
import { Route } from "react-router-dom"
import ListBooks from "./ListBooks"
import SearchBooks from "./SearchBooks"
import * as BooksAPI from "./BooksAPI"

class BooksApp extends React.Component {
  state = {
    books: [],
    query: "",
    searchResults: [],
    bookWidth: 128,
    bookHeight: 193
  };


  componentDidMount() {
    if (this.state.books.length === 0) {
      BooksAPI.getAll().then((books) => {
        this.setState({ books: books });
      });
    }
  };

  updateShelf = (book, shelf) => {
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then((bookShelf) => {
      var idx = this.state.books.findIndex(x => book.id === x.id);
      var tempShelf = this.state.books;
      tempShelf[idx] = book;
      this.setState({ books: tempShelf });
    });
  };

  searchBooks = (query) => {
    query = query.trim();

    if (query === "")
      this.setState({ query: "", searchResults: [] });
    else {
      this.setState({ query: query });
      var allBooks = this.state.books;
      BooksAPI.search(query.trim()).then((books) => {
        if (books.length > 0) {
          var results = books.map(book => {
            var foundBook = allBooks.find(x => x.id === book.id);
            if (foundBook)
              book.shelf = foundBook.shelf;
            else
              book.shelf = "none";

            book.imageLinks = book.imageLinks || { smallthubmnail: "", thumbnail: "" };
            return book;
          });

          this.setState({ searchResults: results });
        }
        else
          this.setState({ searchResults: [] });
      });
    }
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={({ history }) => (
          <SearchBooks query={this.state.query} books={this.state.searchResults} onUpdateShelf={this.updateShelf} onUpdateQuery={this.searchBooks} bookWidth={this.state.bookWidth} bookHeight= {this.state.bookHeight} />
        )} />
        <Route path="/" exact render={() => (
                <ListBooks books={this.state.books} onUpdateShelf={this.updateShelf} bookWidth={this.state.bookWidth} bookHeight= {this.state.bookHeight} />
        )} />
      </div>
    )
  };
}

export default BooksApp
