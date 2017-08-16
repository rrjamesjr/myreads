import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {
   

    render() {
        const { books, onUpdateShelf } = this.props;
        let currentlyReading;
        let wantToRead;
        let read;

        currentlyReading = books.filter(x => x.shelf === "currentlyReading");
        wantToRead = books.filter(x => x.shelf === "wantToRead");
        read = books.filter(x => x.shelf === "read");

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf title="Currently Reading" books={currentlyReading} onUpdateShelf={onUpdateShelf} />
                        <BookShelf title="Want to Read" books={wantToRead} onUpdateShelf={onUpdateShelf} />
                        <BookShelf title="Read" books={read} onUpdateShelf={onUpdateShelf} />
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