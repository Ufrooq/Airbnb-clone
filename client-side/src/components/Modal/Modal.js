import React from 'react'
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';
import "./style.scss"

const Modal = ({ handleReviewFormModal, handleReviewsModal, reviewForm }) => {
    return (
        <div className="model">
            <div className="overlay"></div>
            {
                reviewForm ?
                    <ReviewForm handleReviewFormModal={handleReviewFormModal} />
                    :
                    <Reviews handleReviewFormModal={handleReviewFormModal} />
            }
        </div >
    )
}

export default Modal