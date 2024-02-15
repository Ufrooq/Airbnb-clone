import React from 'react';

const Rating = ({ handleReviewFormModal, handleReviewsModal }) => {
    return (
        <section className='ratin_'>
            <div className="desc">
                <h1>Rate this place </h1>
                <p>Tell others what you think.</p>
            </div>
            <div className="review">
                <div className="stars">
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                </div>
                <button onClick={handleReviewFormModal}>Write review<i class="fa-regular fa-pen-to-square"></i></button>
            </div>
            <div className="all_reviews_">
                <h1>Ratings and reviews</h1>
                <i class="fa-solid fa-arrow-right" onClick={handleReviewsModal}></i>
            </div>
        </section>
    )
};

export default Rating;