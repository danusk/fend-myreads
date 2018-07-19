import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import Search from './Search'
import './App.css'

class BooksApp extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then(allBooks =>
            this.setState({ books: allBooks })
        )
    }

    updateShelf(book, newShelf) {
        const books = this.state.books
        let foundBook = false
        books.forEach((b, index) => {
            if (b.id === book.id) {
                b.shelf = newShelf
                this.setState({ books })
                foundBook = true
            }
        })

        if (!(foundBook)) {
            book.shelf = newShelf
            books.push(book)
            this.setState({ books })
        }

        BooksAPI.update(book, newShelf)
    }

    render() {
        return (
            <div className="app">
                <Router>
                    <div>
                        <Route exact path="/" render={()=>
                            <div className="list-books">
                                <div className="list-books-title">
                                    <h1>MyReads</h1>
                                </div>
                                <Bookshelf
                                    shelfTitle="Currently Reading"
                                    books={ this.state.books.filter(book => book.shelf === 'currentlyReading') }
                                    updateShelf={ this.updateShelf.bind(this) }
                                    icon="fas fa-book-open"
                                />
                                <Bookshelf
                                    shelfTitle="Want to Read"
                                    books={ this.state.books.filter(book => book.shelf === 'wantToRead') }
                                    updateShelf={ this.updateShelf.bind(this) }
                                    icon="fas fa-bookmark"
                                />
                                <Bookshelf
                                    shelfTitle="Read"
                                    books={ this.state.books.filter(book => book.shelf === 'read') }
                                    updateShelf={ this.updateShelf.bind(this) }
                                    icon="fas fa-book"
                                />
                            <div className="open-search">
                                <Link to="/search">Open Search</Link>
                            </div>
                            <footer className="footer">
                                <p>Copyright @ 2018 MyReads</p>
                            </footer>
                            </div>
                        }/>
                        <Route exact path="/search" render={()=>
                            <Search
                                books={ this.state.books }
                                updateShelf={ this.updateShelf.bind(this) }
                            />
                        }/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default BooksApp
