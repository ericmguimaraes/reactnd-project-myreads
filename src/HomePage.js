import React from 'react'
import './App.css'
import {Link} from "react-router-dom";
import BookShelf from "./BookShelf";

class HomePage extends React.Component {
    render() {
        console.log(this.props.books)
        return (<div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf
                        title={"Currently Reading"}
                        shelf={"currentlyReading"}
                        onUpdate={(book, shelf) => this.props.onUpdate(book, shelf)}
                        books={this.props.books}/>
                    <BookShelf
                        title={"Want to Read"}
                        shelf={"wantToRead"}
                        onUpdate={(book, shelf) => this.props.onUpdate(book, shelf)}
                        books={this.props.books}/>
                    <BookShelf
                        title={"Read"}
                        shelf={"read"}
                        onUpdate={(book, shelf) => this.props.onUpdate(book, shelf)}
                        books={this.props.books}/>
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>)
    }
}

export default HomePage