import React from 'react'
import BooksGrid from './BooksGrid'
import * as BooksAPI from './BooksAPI'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'


class Search extends React.Component {

    state = {
        query: "",
        bookResults: []
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                this.getBooks(this.state.query)
            } else {
                this.setState({ query: "", bookResults: [], })
            }
        })
    }

    setShelf (results) {
        for (let result of results) {
            result.shelf = "none"
        }

        for (let result of results) {
            for (let book of this.props.books) {
                if (result.id === book.id) {
                    result.shelf = book.shelf
                }
            }
        }
        return results
    }

    getBooks(query) {
        BooksAPI.search(query, 20).then(results => {
            results = this.setShelf(results)
            return this.setState({ bookResults: results })
        })
    }

    render() {
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            ref={ input => this.search = input }
                            onChange={ this.handleInputChange }
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <BooksGrid
                        books={ this.state.bookResults }
                        updateShelf={ this.props.updateShelf }
                    />
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    updateShelf: PropTypes.func.isRequired,
    bookResults: PropTypes.array
}

export default Search