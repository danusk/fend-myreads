import React from 'react'
import PropTypes from 'prop-types'

/* created with help from the rating stars tutorial @ https://www.fullstackreact.com/articles/react-tutorial-cloning-yelp/#rating-component */

class Rating extends React.Component {
    render() {
        // kFormatter function from https://stackoverflow.com/questions/9461621
        function kFormatter(num) {
            return num > 999 ? (num / 1000).toFixed(1) + 'k' : num
        }

        const style = {
            width: `${ ( this.props.rating / 5 || 0 ) * 100 }%`
        }

        return (
            <div className="rating-container">
                <div className="rating-top">
                    <span><i className="far fa-star"></i></span>
                    <span><i className="far fa-star"></i></span>
                    <span><i className="far fa-star"></i></span>
                    <span><i className="far fa-star"></i></span>
                    <span><i className="far fa-star"></i></span>
                    <div className="rating-bottom" style={ style }>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                    </div>
                </div>
                <div className="ratings-count">
                    <i className="fas fa-comment-alt"></i> {
                        this.props.ratingsCount ? kFormatter(this.props.ratingsCount) : 0
                    }
                </div>
            </div>
        )
    }
}

Rating.propTypes = {
    rating: PropTypes.number,
    ratingsCount: PropTypes.number
};

export default Rating
