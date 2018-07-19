import React from 'react'
import PropTypes from 'prop-types'

const ShelfChanger = (props) => {
    return (
        <div className="book-shelf-changer">
            <select value={ props.shelf || "none" } onChange={ (e) => props.updateShelf(e.target.value) }>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

ShelfChanger.propTypes = {
    shelf: PropTypes.string,
    updateShelf: PropTypes.func.isRequired
}

export default ShelfChanger
