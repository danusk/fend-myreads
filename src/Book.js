import React from 'react';
import ShelfChanger from './ShelfChanger'
import Description from './Description'
import Rating from './Rating'
import PropTypes from 'prop-types'

class Book extends React.Component {
    state = {
        isOpen: false
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div className="book">
                <div className="book-cover" onClick={ this.toggleModal.bind(this) } style={{
                    width: 110,
                    height: 160,
                    backgroundImage: `url(${ this.props.cover !== undefined ? this.props.cover : 'https://upload.wikimedia.org/wikipedia/commons/1/15/No_image_available_600_x_450.svg' })`,
                    }}>
                </div>
                <div className="book-info">
                    <div className="book-title">
                        { this.props.title }
                    </div>
                    <div className="book-authors">
                        { this.props.authors ? this.props.authors.join(", ") : ""}
                    </div>
                <Rating
                    rating={ this.props.avgRating }
                    ratingsCount={ this.props.ratingsCount }
                />
                </div>
                <Description
                    show={ this.state.isOpen }
                    onClose={ this.toggleModal }
                    title={ this.props.title }
                    authors={ this.props.authors }
                    description={ this.props.description }
                    cover={ this.props.cover }
                />
                <ShelfChanger
                    shelf={ this.props.shelf }
                    updateShelf={ this.props.updateShelf }
                />
            </div>
        )
    }
}

Book.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    authors: PropTypes.array,
    updateShelf: PropTypes.func.isRequired
}

export default Book
