import React from 'react';
import Review from "./Review";

const Reviews = ({ handleReviewFormModal }) => {
    return (
        <div className="model_content">
            <i
                class="fa-solid fa-xmark cross_"
                onClick={handleReviewFormModal}
            ></i>
            <Review />
        </div>
    )
}

export default Reviews