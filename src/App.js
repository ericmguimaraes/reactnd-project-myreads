import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import HomePage from './HomePage'
import {Route, Switch} from "react-router-dom"

class BooksApp extends React.Component {

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({books})
        })
    }

    state = {
        books: []
    }

    render() {
        return (
            <Switch>
                <Route exact path="/"
                       render={
                           () => <HomePage books={this.state.books}/>
                       }
                />
                <Route path="/search" render={
                    () => <SearchPage books={this.state.books}/>
                }/>
            </Switch>
        )
    }
}

export default BooksApp
