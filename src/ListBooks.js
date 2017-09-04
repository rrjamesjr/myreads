import React, { Component } from "react"
import { Link } from "react-router-dom"
import BookShelf from "./BookShelf"

class ListBooks extends Component {
   

    render() {
        const { books, onUpdateShelf, bookWidth, bookHeight } = this.props;
        let currentlyReading = [];
        let wantToRead = [];
        let read = [];

        books.map((book) => {
            if (book.shelf === "currentlyReading")
                currentlyReading.push(book);
            else if (book.shelf === "wantToRead")
                wantToRead.push(book);
            else if (book.shelf === "read")
                read.push(book);

            return null;
        });

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf title="Currently Reading" books={currentlyReading} onUpdateShelf={onUpdateShelf} bookWidth={bookWidth} bookHeight={bookHeight} />
                        <BookShelf title="Want to Read" books={wantToRead} onUpdateShelf={onUpdateShelf} bookWidth={bookWidth} bookHeight={bookHeight} />
                        <BookShelf title="Read" books={read} onUpdateShelf={onUpdateShelf} bookWidth={bookWidth} bookHeight={bookHeight} />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="search">Add a book</Link>
                </div>
            </div>
        );
    };
}

export default ListBooks