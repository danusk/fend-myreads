import React from 'react'
import BooksGrid from './BooksGrid'
import PropTypes from 'prop-types'

const Bookshelf = (props) => {
      return (
        <div className="bookshelf">
            <h2 className="bookshelf-title"><i className={ props.icon }></i> { props.shelfTitle }</h2>
            <div className="bookshelf-books">
                <BooksGrid
                    books={ props.books }
                    updateShelf={ props.updateShelf }
                />
            </div>
        </div>
       )
    }

Bookshelf.propTypes = {
    shelfTitle: PropTypes.string,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
    icon: PropTypes.string
}

export default Bookshelf