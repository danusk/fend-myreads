import React from 'react'
import PropTypes from 'prop-types'

const Description = (props) => {
        if(!props.show) {
            return null;
        }
        return (
            <div className="book-tip">
                <div className="book-tip-content">
                    <div className="close">
                        <div onClick={ props.onClose }>
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <div className="book-tip-cover" style={{
                        backgroundImage: `url(${ props.cover })`,
                    }}>
                    </div>
                    <div className="book-tip-info">
                        <div className="book-title">{ props.title }</div>
                        <div className="book-authors">{ props.authors.join(", ") }
                        </div>
                        <div className="book-description">{ props.description }</div>
                    </div>
                </div>
            </div>
        )
    }


Description.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    cover: PropTypes.string,
    title: PropTypes.string,
    authors: PropTypes.array,
    description: PropTypes.string
}

export default Description