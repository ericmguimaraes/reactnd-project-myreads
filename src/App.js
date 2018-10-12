import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import HomePage from './HomePage'
import {Route, Switch} from "react-router-dom"

class BooksApp extends React.Component {
    state = {

    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/search" component={SearchPage}/>
            </Switch>
        )
    }
}

export default BooksApp
