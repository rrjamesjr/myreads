import React, { Component } from "react"
import PropTypes from "prop-types"

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        bookWidth: PropTypes.number.isRequired,
        bookHeight: PropTypes.number.isRequired
    };

    state = {
        book: ""
    }

    componentWillMount(){
        this.setState({ book : this.props.book });
    }

    render() {
        const { book } = this.state;

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" title={book.title} style={{ width: this.props.bookWidth, height: this.props.bookHeight, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={(e) => this.props.onUpdateShelf(book, e.target.value)} >
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{(book.authors || []).join()}</div>
                </div>
            </li>
        )
    }
}

export default Book