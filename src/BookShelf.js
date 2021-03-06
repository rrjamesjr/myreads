import React, { Component } from "react"
import PropTypes from "prop-types"
import Book from "./Book"

class BookShelf extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        bookWidth: PropTypes.number.isRequired,
        bookHeight: PropTypes.number.isRequired
    };

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <Book key={book.id} book={book} onUpdateShelf={this.props.onUpdateShelf} bookWidth={this.props.bookWidth} bookHeight={this.props.bookHeight} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }

}

export default BookShelf