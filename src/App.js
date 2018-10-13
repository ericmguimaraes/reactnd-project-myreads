import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import HomePage from './HomePage'
import {Route, Switch} from "react-router-dom"

class BooksApp extends React.Component {

    componentDidMount() {
        this.getAllBooks()
    }

    getAllBooks = () => {
        BooksAPI.getAll().then(books => {
            this.setState({books})
        }).catch(reason => console.log(reason))
    }

    onUpdate = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            this.getAllBooks()
        }).catch(reason => console.log(reason))
    }

    state = {
        books: []
    }

    render() {
        return (
            <Switch>
                <Route exact path="/"
                       render={
                           () => <HomePage books={this.state.books}
                                           onUpdate={(book, shelf) => this.onUpdate(book, shelf)}/>
                       }
                />
                <Route path="/search" render={
                    () => <SearchPage
                        books={this.state.books}
                        onUpdate={(book, shelf) => this.onUpdate(book, shelf)}
                    />
                }/>
            </Switch>
        )
    }
}

export default BooksApp
