import React from 'react'
import './App.css'
import {Link} from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

class SearchPage extends React.Component {
    state = {
        searchedBooks: []
    }

    handleInputChange = event => {
        this.search(event.target.value)
    };

    search = (query) => {
        if (!query || query==="") {
            this.setState({
                searchedBooks: []
            })
            return
        }
        BooksAPI.search(query).then(books => {
            const searchedBooksWithShelf = Array.isArray(books) ? books.map(b => {
                const myBook = this.props.books.find(myBook => b.id === myBook.id)
                b.shelf = myBook ? myBook.shelf : "none"
                return b
            }) : []

            this.setState({
                searchedBooks: searchedBooksWithShelf
            })
        })
    }

    render() {
        return (<div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        onChange={this.handleInputChange}
                    />

                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        this.state.searchedBooks && this.state.searchedBooks.map(book =>
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

export default SearchPage