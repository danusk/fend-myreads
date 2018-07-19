import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const BooksGrid = (props) => {
      return (
        <div>
            <ol className="books-grid">
                { props.books.length >= 1 ? props.books.map((book, index) =>
                    <li key={ index } className="book-card">
                        <Book
                            title={ book.title }
                            authors={ book.authors }
                            cover={ book.imageLinks ? book.imageLinks.thumbnail : undefined }
                            shelf={ book.shelf }
                            description={ book.description }
                            avgRating={ book.averageRating }
                            ratingsCount={ book.ratingsCount }
                            updateShelf={ newShelf => props.updateShelf(book, newShelf) }
                        />
                    </li>
                ) : "No Results" }
            </ol>
        </div>
       )
    }

BooksGrid.propTypes = {
    updateShelf: PropTypes.func.isRequired
}

export default BooksGrid
