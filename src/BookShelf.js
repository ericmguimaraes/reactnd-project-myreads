import React from "react";
import Book from "./Book"

class BookShelf extends React.Component {
    render() {
        return (<div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        this.props.books && this.props.books.filter(b => b.shelf === this.props.shelf).map(book =>
                            (<li key={book.id}>
                                <Book
                                    book={book}
                                    onUpdate={(book, shelf) => this.props.onUpdate(book, shelf)}
                                />
                            </li>)
                        )
                    }
                </ol>
            </div>
        </div>)
    }
}

export default BookShelf