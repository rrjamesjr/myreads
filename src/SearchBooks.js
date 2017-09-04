import React, { Component } from "react"
import Book from "./Book"

class SearchBooks extends Component {
    render() {
        const { query, books, onUpdateShelf, onUpdateQuery, bookWidth, bookHeight } = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" href="/">Close</a>
                    <div className="search-books-input-wrapper">
                        {/* 
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => onUpdateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <Book key={book.id} book={book} onUpdateShelf={onUpdateShelf} bookWidth={bookWidth} bookHeight={bookHeight} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks